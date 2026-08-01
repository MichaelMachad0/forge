"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[75svh] w-full max-w-6xl items-center px-6 pb-20 pt-32 sm:px-8">
      <div>
        <p className="eyebrow">Erro inesperado</p>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
          Algo interrompeu esta página.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted">
          Tente novamente. Se o problema continuar, use um dos canais públicos no rodapé.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-accent"
        >
          Tentar novamente
        </button>
      </div>
    </section>
  );
}
