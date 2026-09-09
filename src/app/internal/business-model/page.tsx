import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Model",
};

type Detail = string | { text: string; sub: string[] };

const billingModels: {
  name: string;
  tagline: string;
  details: Detail[];
}[] = [
  {
    name: "Monthly Retainer",
    tagline: "e.g. $3-6k/month; a flat fee that includes up to some number of hours",
    details: [
      "A flat monthly fee for a fixed scope of ongoing work",
      "Day-to-day HR operations up to fractional CHRO work",
      "Retainers are invoiced at the beginning of the month",
      {
        text: "Typical pricing by scope (NY-based clients):",
        sub: [
          "HR operations only — run payroll, benefits admin, onboarding/offboarding for a ~10-30 person company: ~$2.5-4k/month",
          "Ops + one practice area — e.g. also own performance management, or handbook/compliance upkeep: ~$4-7k/month",
          "HR director level — multiple practice areas, manager coaching, recruiting coordination: ~$7-10k/month",
          "Fractional CHRO — strategy, exec/board work, comp planning, org design (~1-2 days/week): ~$10-16k/month",
        ],
      },
    ],
  },
  {
    name: "Hourly Billing",
    tagline: "e.g. $125/hr",
    details: [
      "Just as good as a retainer",
      "Sometimes worth less, but the client never wonders _are Danielle's services worth it?_",
      "Just track in a spreadsheet & invoice once a month",
      "NeoCoast just assigns one person that commands a certain price point, plus a CTO that occasionally bills at the CTO rate. I might pay $140/hr for a generalist/manager that also does some coordinator work. I (wearing my customer hat) like that model - it makes me feel like they're being judicious with what kinds of services I actually need.",
      {
        text: "NY market reference points:",
        sub: [
          "Admin/coordinator work — data entry, filing, scheduling: $75-100/hr",
          "Generalist/manager work — day-to-day ops, employee relations, policy drafting: $125-175/hr",
          "Director-level work — comp benchmarking, HRIS selection, investigations: $175-250/hr",
          "CHRO-level advisory — exec coaching, org strategy, M&A diligence: $250-400/hr, or a $2-3k day rate for on-site/workshop days",
        ],
      },
    ],
  },
  {
    name: "Per-Hire Fees for Recruiting",
    tagline: "e.g. X% per hire",
    details: [
      "Invoiced on candidate's start date",
      "Sometimes scaled to seniority and search difficulty",
      "Sometimes has a replacement guarantee if the hire doesn't work out within the guarantee window.",
      {
        text: "Typical fees by search type:",
        sub: [
          "Straightforward IC roles — coordinator, AE, support: flat $6-10k or ~15% of first-year base",
          "Specialized/senior ICs — engineers, senior finance, niche skills: 18-20%",
          "Executive searches — VP and up: 25-30%, often partially retained (paid in thirds: kickoff, shortlist, start date)",
        ],
      },
    ],
  },
];

export default function BusinessModelPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
        Business Model
      </h1>
      <p className="mt-4 text-lg text-zinc-400">
        Below is how most HR consulting businesses bill. 
        A big part of the sales process is figuring out which one fits best for a prospect.
      </p>
      <p className="mt-4 text-lg text-zinc-400">
        I also know of some companies that quote a fixed fee for a project. It's an option, but I think it's risky & dumb.
      </p>
      <div className="mt-16 flex flex-col gap-16">
        {billingModels.map(({ name, tagline, details }, index) => (
          <section key={name} className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-zinc-900">
                {index + 1}
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {name}
                </h2>
                <p className="mt-1 font-medium text-amber-300">{tagline}</p>
              </div>
            </div>
            <ul className="ml-12 flex list-disc flex-col gap-3 text-zinc-300 marker:text-amber-300">
              {details.map((detail) =>
                typeof detail === "string" ? (
                  <li key={detail}>{detail}</li>
                ) : (
                  <li key={detail.text}>
                    {detail.text}
                    <ul className="mt-3 flex list-[circle] flex-col gap-2 pl-6 text-zinc-400 marker:text-amber-300/70">
                      {detail.sub.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
