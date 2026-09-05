import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        We're an embedded people team for companies that aren't ready to build the entire function internally.
      </h1>
      <p className="max-w-xl text-lg text-zinc-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <a
        href="mailto:hello@tandemhr.com"
        className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Get in touch
        <ArrowRight className="size-4" />
      </a>
    </section>
  );
}
