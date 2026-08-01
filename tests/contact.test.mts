import assert from "node:assert/strict";
import test from "node:test";
import { escapeHtml, validateContactPayload } from "../src/lib/contact.ts";

const validPayload = {
  name: "Maria Silva",
  email: "maria@example.com",
  company: "Acme",
  message: "Gostaria de conversar sobre uma plataforma SaaS modular.",
  consent: true,
  website: "",
  startedAt: Date.now() - 2_000,
};

test("accepts and normalizes a valid contact payload", () => {
  const result = validateContactPayload({ ...validPayload, email: " MARIA@EXAMPLE.COM " });
  assert.equal(result.success, true);
  if (result.success) assert.equal(result.data.email, "maria@example.com");
});

test("rejects invalid or non-consensual contact payloads", () => {
  assert.equal(validateContactPayload({ ...validPayload, email: "invalid" }).success, false);
  assert.equal(validateContactPayload({ ...validPayload, consent: false }).success, false);
  assert.equal(validateContactPayload({ ...validPayload, message: "curta" }).success, false);
});

test("escapes user-controlled HTML before composing email", () => {
  assert.equal(escapeHtml(`<script>alert("x")</script>`), "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;");
});
