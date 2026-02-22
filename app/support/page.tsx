import type { Metadata } from "next";
import Link from "next/link";
import {
  EnvelopeSimple,
  Clock,
  Question,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Support | KTU SRC App",
  description:
    "Get help with the KTU SRC App. Contact support, browse FAQs, and find answers to common questions.",
};

const faqItems = [
  {
    question: "How do I report an issue in the app?",
    answer:
      "To report a technical issue, go to Settings in the app and tap 'Send Feedback'. You can describe the issue in detail. For urgent matters, you can also email us directly at support@xolaceinc.com and our team will respond within 24–48 hours.",
  },
  {
    question: "How do I list an item in the marketplace?",
    answer:
      "Navigate to the Marketplace tab in the app and tap the '+' button. Add photos of your item, set a price, write a clear description, and publish. Only verified KTU students can list or purchase items. For listing issues, contact support@xolaceinc.com.",
  },
  {
    question: "How do I list or update hostel information?",
    answer:
      "Hostel listings are managed through the SRC office. To add a new listing or update existing hostel information, please contact us at support@xolaceinc.com with details about the hostel, including name, location, and pricing. Our team will assist you with the listing process.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request account deletion by going to Settings > Profile & Account > Delete Account in the app. Alternatively, email support@xolaceinc.com with your request. Please note that deletion is irreversible — all your data will be permanently removed within 30 days of the request.",
  },
];

const dotGrid = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ── Page Header ── */}
      <section className="relative overflow-hidden bg-[oklch(0.22_0.09_155)] text-white">
        <div className="absolute inset-0" style={dotGrid} />
        <div className="absolute -right-24 top-1/2 size-64 -translate-y-1/2 rounded-full border border-white/6" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] tracking-wide"
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: "var(--brand-gold)" }}
            />
            Official Support · XolaceInc Ltd.
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            KTU SRC App — Official Support
          </h1>
          <p className="mt-3 max-w-lg text-sm text-white/65 leading-relaxed">
            The official student platform of the Student Representative Council.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-background to-transparent" />
      </section>

      <div className="mx-auto w-full max-w-5xl px-4 py-16 space-y-16">

        {/* ── About the App ── */}
        <section>
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--brand-gold)" }}
          >
            About the App
          </p>
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            What is the KTU SRC App?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The KTU SRC App is the official digital platform for students of
            Koforidua Technical University. The app provides campus
            announcements, event updates, hostel showcase listings, and a
            student marketplace — keeping the KTU community informed and
            connected in one place.
          </p>
        </section>

        {/* ── Contact ── */}
        <section>
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--brand-gold)" }}
          >
            Contact Support
          </p>
          <h2 className="mb-6 text-xl font-bold md:text-2xl">
            Get in touch with us
          </h2>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            For technical issues, marketplace concerns, hostel listing questions,
            or general inquiries, please reach out to our support team.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
            {/* Email card */}
            <div className="flex-1 rounded-xl border border-border p-5">
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                <EnvelopeSimple
                  className="size-4 text-primary"
                  weight="duotone"
                />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Email Support
              </p>
              <a
                href="mailto:support@xolaceinc.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                support@xolaceinc.com
                <ArrowSquareOut className="size-3.5" />
              </a>
            </div>

            {/* Response time card */}
            <div className="flex-1 rounded-xl border border-border p-5">
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-amber-50">
                <Clock className="size-4 text-amber-700" weight="duotone" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Response Time
              </p>
              <p className="text-sm font-semibold">24 – 48 hours</p>
              <p className="mt-1 text-xs text-muted-foreground">
                We respond to all enquiries promptly.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <Question className="size-4 text-primary" weight="duotone" />
            </div>
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--brand-gold)" }}
              >
                FAQ
              </p>
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            </div>
          </div>

          <FAQAccordion items={faqItems} />
        </section>

        {/* ── Privacy & Legal ── */}
        <section>
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--brand-gold)" }}
          >
            Privacy &amp; Legal
          </p>
          <h2 className="mb-5 text-xl font-bold md:text-2xl">
            Legal information
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/privacy"
              className="group flex flex-1 items-center justify-between rounded-xl border border-border p-4 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-muted/50"
            >
              Privacy Policy
              <ArrowSquareOut className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
            <Link
              href="/terms"
              className="group flex flex-1 items-center justify-between rounded-xl border border-border p-4 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-muted/50"
            >
              Terms of Service
              <ArrowSquareOut className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
