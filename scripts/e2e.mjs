import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import process from "node:process";

const port = 3207;
const origin = `http://127.0.0.1:${port}`;
const nextCli = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextCli, "start", "-p", String(port)], {
  cwd: process.cwd(),
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => { output += chunk.toString(); });
server.stderr.on("data", (chunk) => { output += chunk.toString(); });

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await delay(250);
  }
  throw new Error(`Servidor E2E não iniciou.\n${output}`);
}

async function get(pathname) {
  return fetch(`${origin}${pathname}`, { redirect: "manual" });
}

try {
  await waitForServer();

  const home = await get("/");
  const homeHtml = await home.text();
  assert.equal(home.status, 200);
  assert.match(homeHtml, /Produtos sólidos/);
  assert.match(homeHtml, /Michael Machado/);
  assert.match(homeHtml, /application\/ld\+json/);
  assert.equal(home.headers.get("x-content-type-options"), "nosniff");
  assert.equal(home.headers.get("x-powered-by"), null);

  const privacy = await get("/privacidade");
  assert.equal(privacy.status, 200);
  assert.match(await privacy.text(), /Privacidade por padrão/);

  const terms = await get("/termos");
  assert.equal(terms.status, 200);
  assert.match(await terms.text(), /superfície pública de portfólio/);

  const missing = await get("/rota-inexistente");
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /Esta página não existe/);

  const robots = await get("/robots.txt");
  assert.match(await robots.text(), /https:\/\/michaelmachado\.dev\.br\/sitemap\.xml/);

  const sitemap = await get("/sitemap.xml");
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br<\/loc>/);
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br\/privacidade/);

  console.log("E2E: home, páginas legais, 404, SEO e headers verificados.");
} finally {
  server.kill("SIGTERM");
}
