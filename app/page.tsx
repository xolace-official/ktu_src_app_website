import Link from "next/link";
import {
  Megaphone,
  CalendarCheck,
  Buildings,
  ShoppingBag,
  ArrowRight,
  EnvelopeSimple,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const features = [
  {
    icon: Megaphone,
    title: "Campus Announcements",
    desc: "Real-time updates from the Student Representative Council — never miss what matters.",
    bg: "bg-emerald-50",
    fg: "text-emerald-700",
  },
  {
    icon: CalendarCheck,
    title: "Events & Activities",
    desc: "Browse, register, and stay connected with every campus event and activity.",
    bg: "bg-sky-50",
    fg: "text-sky-700",
  },
  {
    icon: Buildings,
    title: "Hostel Showcase",
    desc: "Discover and review accommodations near campus to find your perfect space.",
    bg: "bg-violet-50",
    fg: "text-violet-700",
  },
  {
    icon: ShoppingBag,
    title: "Student Marketplace",
    desc: "Buy and sell within the KTU community — verified, safe, and easy.",
    bg: "bg-amber-50",
    fg: "text-amber-700",
  },
];

const dotGrid = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[oklch(0.22_0.09_155)] text-white">
        {/* Dot grid */}
        <div className="absolute inset-0" style={dotGrid} />
        {/* Decorative rings */}
        <div className="absolute -right-32 top-1/2 size-[480px] -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute -right-20 top-1/2 size-[320px] -translate-y-1/2 rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto max-w-5xl px-4 py-28 md:py-36">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] tracking-wide">
              <span
                className="size-1.5 rounded-full"
                style={{ background: "var(--brand-gold)" }}
              />
              Official Platform · Koforidua Technical University
            </div>

            <h1 className="text-[2.8rem] font-bold leading-[1.08] tracking-tight md:text-6xl">
              Your campus,{" "}
              <span style={{ color: "var(--brand-gold)" }}>connected.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/65 max-w-lg">
              The KTU SRC App is the official digital platform for students of
              Koforidua Technical University — announcements, events, hostels,
              and a student marketplace, all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[oklch(0.22_0.09_155)] transition-opacity hover:opacity-90"
              >
                Get Support <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <p
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--brand-gold)" }}
            >
              Platform Features
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Everything a KTU student needs
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`mb-4 inline-flex size-10 items-center justify-center rounded-lg ${f.bg} ${f.fg}`}
                >
                  <f.icon className="size-5" weight="duotone" />
                </div>
                <h3 className="mb-2 text-sm font-semibold">{f.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Text */}
            <div>
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--brand-gold)" }}
              >
                About the App
              </p>
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                Built for the KTU community
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The KTU SRC App is the official digital platform for students
                of Koforidua Technical University. The app provides campus
                announcements, event updates, hostel showcase listings, and a
                student marketplace.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Developed by{" "}
                <span className="font-medium text-foreground">
                  XolaceInc Ltd.
                </span>{" "}
                in partnership with the Student Representative Council — making
                student life at KTU more connected and accessible.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Need help? Visit Support <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Card */}
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-[10px] font-bold tracking-widest text-primary-foreground">
                    KTU
                  </div>
                  <div>
                    <p className="text-sm font-semibold">KTU SRC App</p>
                    <p className="text-xs text-muted-foreground">
                      Official Student Platform
                    </p>
                  </div>
                  <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    Active
                  </span>
                </div>

                <div className="my-4 h-px bg-border" />

                <ul className="space-y-2.5">
                  {[
                    "Campus Announcements",
                    "Student Events",
                    "Hostel Listings",
                    "Student Marketplace",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle
                        className="size-3.5 text-primary flex-shrink-0"
                        weight="fill"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="my-4 h-px bg-border" />
                <p className="text-xs text-muted-foreground">
                  Published by{" "}
                  <span className="font-medium text-foreground">
                    XolaceInc Ltd.
                  </span>
                </p>
              </div>
              {/* Decorative accent block */}
              <div
                className="absolute -bottom-3 -right-3 size-20 rounded-2xl -z-10 opacity-30"
                style={{ background: "var(--brand-gold)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Support CTA ── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-2xl bg-[oklch(0.22_0.09_155)] px-8 py-14 text-center text-white">
            <div className="absolute inset-0" style={dotGrid} />
            {/* Decorative rings */}
            <div className="absolute -left-16 -top-16 size-48 rounded-full border border-white/[0.06]" />
            <div className="absolute -right-16 -bottom-16 size-48 rounded-full border border-white/[0.06]" />

            <div className="relative">
              <div
                className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <EnvelopeSimple
                  className="size-6"
                  style={{ color: "var(--brand-gold)" }}
                  weight="duotone"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold">Need assistance?</h2>
              <p className="mx-auto mb-7 max-w-md text-sm text-white/65">
                Our support team is ready to help with technical issues,
                marketplace concerns, hostel listings, or general inquiries.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[oklch(0.22_0.09_155)] transition-opacity hover:opacity-90"
              >
                Visit Support Center <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
