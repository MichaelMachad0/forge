import assert from "node:assert/strict";
import test from "node:test";
import { projects } from "../src/data/projects.ts";

test("project slugs are unique and URL-safe", () => {
  const slugs = projects.map(({ slug }) => slug);
  assert.equal(new Set(slugs).size, slugs.length);
  slugs.forEach((slug) => assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/));
});

test("every public project has a complete factual case study", () => {
  for (const project of projects) {
    assert.ok(project.href?.startsWith("https://github.com/MichaelMachad0/"));
    assert.ok(project.caseStudy.summary.length > 40);
    assert.ok(project.caseStudy.challenge.length > 80);
    assert.ok(project.caseStudy.approach.length >= 3);
    assert.ok(project.caseStudy.architecture.length >= 3);
    assert.ok(project.caseStudy.evidence.length >= 3);
    assert.ok(project.caseStudy.outcome.length > 80);
    assert.ok(project.caseStudy.boundary.length > 80);
  }
});
