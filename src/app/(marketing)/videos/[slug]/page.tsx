import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { episodes, getEpisode } from "@/lib/episodes";
import { YouTubeEmbed } from "@/components/youtube-embed";

export function generateStaticParams() {
  return episodes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/videos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) return {};
  return {
    title: episode.title,
    description: episode.description,
  };
}

export default async function EpisodePage({
  params,
}: PageProps<"/videos/[slug]">) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <Link
        href="/videos"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        <ArrowLeft className="size-4" />
        All videos
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {episode.title}
      </h1>
      <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 font-medium text-zinc-900">
          {episode.topic}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" />
          {episode.duration}
        </span>
      </div>
      <div className="mt-8">
        <YouTubeEmbed youtubeId={episode.youtubeId} title={episode.title} />
      </div>
      <p className="mt-8 text-lg text-zinc-600">{episode.description}</p>
      <div className="mt-12 rounded-lg bg-amber-50 p-8">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Wrestling with this at your company?
        </h2>
        <p className="mt-2 text-zinc-700">
          This is exactly the kind of thing we help founders with. Grab 30
          minutes — no pitch, just a conversation about where you are.
        </p>
        <a
          href="https://calendar.app.google/VYTjHytHT3GJFBSP7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Schedule a Call
          <ArrowRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
