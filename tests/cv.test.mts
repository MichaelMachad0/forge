import assert from "node:assert/strict";
import test from "node:test";
import { CV_PUBLIC_FILE, getCvPath } from "../src/lib/cv.ts";

test("resolves the public curriculum PDF", () => {
  assert.equal(getCvPath(), `/${CV_PUBLIC_FILE}`);
});
