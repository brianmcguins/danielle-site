// Placeholder episode entries — titles/descriptions are stand-ins until real
// podcast content ships. Publishing a new episode = adding an entry here.
export type Episode = {
  slug: string;
  youtubeId: string;
  title: string;
  question: string;
  description: string;
  duration: string;
  topic: string;
};

export const episodes: Episode[] = [
  {
    slug: "first-hr-hire",
    youtubeId: "mvhNRogXjts",
    title: "FTE vs. Contracting out HR",
    question: "Do I actually need a full-time HR person yet?",
    description:
      "Most early-stage companies hire HR too early or too late. Danielle walks through the signals that you actually need dedicated HR support — and what to do in the meantime.",
    duration: "4 min",
    topic: "Hiring",
  },
  {
    slug: "compliance-mistakes",
    youtubeId: "kGGUZgzQiVI",
    title: "Benefits: Mistakes, Doing it Right, and Free Ideas",
    question: "What HR compliance issues should I actually worry about?",
    description:
      "Not every compliance gap is worth losing sleep over. Danielle covers the handful of mistakes that create real legal exposure for small companies — and the ones that can wait.",
    duration: "5 min",
    topic: "Compliance",
  },
];

export function getEpisode(slug: string): Episode | undefined {
  return episodes.find((episode) => episode.slug === slug);
}
