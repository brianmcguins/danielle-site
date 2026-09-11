import type { Metadata } from "next";
import Link from "next/link";
import { episodes } from "@/lib/episodes";
import { YouTubeEmbed } from "@/components/youtube-embed";

export const metadata: Metadata = {
  title: "Videos for Founders",
  description:
    "Short, practical videos answering the HR questions founders actually have — hiring, compliance, compensation, and building a people function without a full-time team.",
};

export default function VideosPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Tandem HR: Purpose, Culture, etc.
        </h1>
      </div>
      <ul className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {episodes.map((episode) => (
          <li key={episode.slug} className="flex flex-col gap-4">
            <YouTubeEmbed youtubeId={episode.youtubeId} title={episode.title} />
            <Link
              href={`/videos/${episode.slug}`}
              className="text-xl font-semibold tracking-tight text-zinc-900 hover:text-zinc-600"
            >
              {episode.title}
            </Link>
            <p className="text-zinc-600">{episode.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
