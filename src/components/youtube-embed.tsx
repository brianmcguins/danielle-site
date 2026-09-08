export function YouTubeEmbed({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="size-full"
      />
    </div>
  );
}
