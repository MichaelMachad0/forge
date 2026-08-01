import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { request } from "node:http";
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

async function getWithHost(pathname, host) {
  return new Promise((resolve, reject) => {
    const req = request(
      `${origin}${pathname}`,
      { headers: { host } },
      (response) => {
        response.resume();
        response.on("end", () => resolve(response));
      },
    );
    req.on("error", reject);
    req.end();
  });
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
  const missingHtml = await missing.text();
  assert.match(missingHtml, /Esta página não existe/);
  assert.match(missingHtml, /name="robots" content="noindex"/);
  assert.doesNotMatch(missingHtml, /name="robots" content="index, follow"/);

  const canonicalRedirect = await getWithHost(
    "/privacidade?from=www",
    "www.michaelmachado.dev.br",
  );
  assert.equal(canonicalRedirect.statusCode, 308);
  assert.equal(
    canonicalRedirect.headers.location,
    "https://michaelmachado.dev.br/privacidade?from=www",
  );

  const robots = await get("/robots.txt");
  assert.match(await robots.text(), /https:\/\/michaelmachado\.dev\.br\/sitemap\.xml/);

  const sitemap = await get("/sitemap.xml");
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br<\/loc>/);
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br\/privacidade/);

  console.log("E2E: domínio canônico, 404, SEO e headers verificados.");
} finally {
  server.kill("SIGTERM");
}
