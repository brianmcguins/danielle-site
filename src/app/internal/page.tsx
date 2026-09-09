import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InternalHomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <Link
        href="/business-model"
        className="inline-flex items-center gap-2 text-xl font-medium text-amber-300 transition-colors hover:text-amber-200"
      >
        Business Model
        <ArrowRight className="size-5" />
      </Link>
    </div>
  );
}
