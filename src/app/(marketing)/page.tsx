import {
  ArrowRight,
  ChartColumnIncreasing,
  ClipboardCheck,
  Flag,
  HandCoins,
  MonitorCog,
  NotebookPen,
  Trophy,
  UserSearch,
  Workflow,
} from "lucide-react";

const highlights = [
  {
    title: "Streamline Your HR",
    description:
      "Streamline your day-to-day HR operations and initiatives with expert guidance.",
  },
  {
    title: "Become 100% Compliant",
    description:
      "Reduce legal risk and stay 100% compliant with labor laws across all 50 states.",
  },
  {
    title: "Flexible Pricing Model",
    description:
      "Our flexible HR outsourcing services give you the exact amount of support you need any time.",
  },
];

const services = [
  { name: "Compliance Audits", icon: ClipboardCheck },
  { name: "Payroll & Benefits", icon: HandCoins },
  { name: "Cost-Effective Recruitment", icon: UserSearch },
  { name: "Employee Handbooks", icon: NotebookPen },
  { name: "HR Software Implementation", icon: MonitorCog },
  { name: "Modern HR Processes", icon: Workflow },
  { name: "Compensation Benchmarking", icon: ChartColumnIncreasing },
  { name: "Performance Management", icon: Trophy },
  { name: "Leadership Development", icon: Flag },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          We're an embedded people team for companies that aren't ready to build the entire function internally.
        </h1>
        <p className="max-w-xl text-lg text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <a
          href="https://calendar.app.google/VYTjHytHT3GJFBSP7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Schedule a Call
          <ArrowRight className="size-4" />
        </a>
      </section>

      <section className="bg-amber-50">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-16 text-center sm:grid-cols-3 sm:py-20">
          {highlights.map(({ title, description }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <h2 className="relative text-2xl font-medium tracking-tight text-zinc-900">
                {title}
                <span
                  aria-hidden
                  className="absolute -top-3 -right-4 size-3.5 rounded-full bg-amber-300"
                />
              </h2>
              <p className="max-w-xs font-medium text-zinc-800">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            HR Support Customized To Your Needs
          </h2>
          <p className="mt-4 text-lg font-medium text-zinc-700">
            Whether you're looking for consulting on key initiatives, fractional
            support, or complete HR outsourcing, we can help.
          </p>
        </div>
        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, icon: Icon }) => (
            <li key={name} className="flex flex-col items-center gap-4 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-amber-100">
                <Icon className="size-8 text-zinc-900" strokeWidth={1.5} />
              </span>
              <span className="font-semibold text-zinc-900">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
