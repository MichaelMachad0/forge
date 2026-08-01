import assert from "node:assert/strict";
import test from "node:test";
import { absoluteUrl, normalizeSiteUrl, siteUrl } from "../src/lib/site-url.ts";

test("uses the official canonical domain", () => {
  assert.equal(siteUrl, "https://michaelmachado.dev.br");
});

test("normalizes trailing slashes", () => {
  assert.equal(normalizeSiteUrl("https://example.com/"), "https://example.com");
});

test("creates stable absolute URLs", () => {
  assert.equal(absoluteUrl("/privacidade"), "https://michaelmachado.dev.br/privacidade");
});
