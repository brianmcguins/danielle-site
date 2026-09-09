import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Links are subdomain-relative: the proxy rewrites internal.[domain]/x to /internal/x.
const sections = [
  {
    title: "Operations",
    links: [{ name: "Business Model", href: "/business-model" }],
  },
];

export default function InternalHomePage() {
  return (
      <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-16 sm:grid-cols-2">
        {sections.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium tracking-tight">{title}</h2>
            <ul className="flex flex-col gap-4">
              {links.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-xl font-medium text-amber-300 transition-colors hover:text-amber-200"
                  >
                    {name}
                    <ArrowRight className="size-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
}
