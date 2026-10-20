import assert from "node:assert/strict";
import test from "node:test";
import { projects } from "../src/data/projects.ts";

test("GIA Escolar publishes only the verified founding-client facts", () => {
  const gia = projects.find((project) => project.slug === "gia");
  assert.ok(gia);
  assert.equal(gia.status, "Em produção · 1º cliente");
  assert.equal(gia.website?.href, "https://www.usegia.com.br/");
  assert.equal(gia.website?.label, "Visitar site do GIA");
  assert.equal(gia.metricsSummary, "1º cliente em produção · 68 alunos");
  assert.deepEqual(
    gia.metrics?.map((metric) => [metric.value, metric.label]),
    [
      ["1", "Cliente fundador em produção"],
      ["68", "Alunos atendidos"],
      ["9", "Funcionários usando o sistema"],
    ],
  );
  assert.equal(gia.company?.cnpj, "67.953.300/0001-66");
  assert.match(gia.caseStudy.story?.problem ?? "", /escola particular em Camaçari-BA/);
  assert.match(gia.caseStudy.story?.solution ?? "", /suporte técnico remoto/);
  assert.match(gia.caseStudy.story?.status ?? "", /estágio inicial/);
  const blob = JSON.stringify(gia);
  assert.match(blob, /Inova Simples/);
  assert.doesNotMatch(blob, /clientes pagantes/);
  assert.doesNotMatch(blob, /\d+\s?%/);
  assert.doesNotMatch(blob, /R\$\s?\d/);
  assert.doesNotMatch(blob, /\d{3}\.\d{3}\.\d{3}-\d{2}/);
  assert.doesNotMatch(blob, /Em desenvolvimento/);
});

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
