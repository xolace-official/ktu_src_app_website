import type { Metadata } from "next";
import Link from "next/link";
import {
  LockIcon,
  DatabaseIcon,
  UserCheckIcon,
  ShareNetworkIcon,
  ClockIcon,
  ShieldCheckIcon,
  TrashIcon,
  GlobeIcon,
  EnvelopeIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Icon } from "@phosphor-icons/react";

export const metadata: Metadata = {
  title: "Privacy Policy | KTU SRC App",
  description:
    "Privacy Policy for the KTU SRC App by XolaceInc Ltd. Learn how we collect, use, and protect your personal information.",
};

interface Section {
  id: string;
  title: string;
  icon: Icon;
  content: string;
}

const sections: Section[] = [
  {
    id: "overview",
    title: "Privacy Overview",
    icon: LockIcon,
    content: `The KTU SRC App is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.

We encourage you to read this policy carefully. By using the app, you consent to the data practices described in this policy.`,
  },
  {
    id: "data-collection",
    title: "Information We Collect",
    icon: DatabaseIcon,
    content: `We collect information that you provide directly:

• Account Information: Name, student ID, email, phone number
• Profile Data: Department, level, profile picture
• Communications: Messages, feedback, and support requests

We automatically collect:

• Device Information: Device type, operating system, unique identifiers
• Usage Data: App features used, time spent, interactions
• Log Data: IP address, access times, error reports`,
  },
  {
    id: "data-usage",
    title: "How We Use Your Data",
    icon: UserCheckIcon,
    content: `We use your information to:

• Provide and maintain the app services
• Personalize your experience
• Send important notifications and updates
• Respond to your inquiries and support requests
• Improve our services through analytics
• Ensure security and prevent fraud
• Comply with legal obligations

We will never sell your personal information to third parties.`,
  },
  {
    id: "data-sharing",
    title: "Information Sharing",
    icon: ShareNetworkIcon,
    content: `We may share your information with:

• University Administration: For academic and administrative purposes
• Service Providers: Third parties who help us operate the app
• Legal Authorities: When required by law or to protect rights

All third parties are contractually obligated to protect your data and use it only for specified purposes.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: ClockIcon,
    content: `We retain your personal information for as long as:

• Your account remains active
• Necessary to provide services
• Required by law or regulations
• Needed for legitimate business purposes

After graduation or account deletion, we may retain anonymized data for statistical purposes. Backup copies may persist for up to 90 days.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: ShieldCheckIcon,
    content: `We implement appropriate security measures including:

• Encryption of data in transit and at rest
• Secure authentication mechanisms
• Regular security assessments
• Access controls and monitoring
• Employee training on data protection

While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: UserCheckIcon,
    content: `You have the right to:

• Access: Request a copy of your personal data
• Correction: Update or correct inaccurate information
• Deletion: Request deletion of your data
• Portability: Receive your data in a portable format
• Objection: Object to certain processing activities
• Withdrawal: Withdraw consent at any time

To exercise these rights, contact us through the app or via email.`,
  },
  {
    id: "data-deletion",
    title: "Account & Data Deletion",
    icon: TrashIcon,
    content: `You can request account deletion at any time through:

• App Settings > Profile > Delete Account
• Emailing support@xolaceinc.com

Upon deletion request:
• Your account will be deactivated immediately
• Personal data will be deleted within 30 days
• Some data may be retained for legal compliance
• Anonymized analytics data may be preserved`,
  },
  {
    id: "international",
    title: "International Data",
    icon: GlobeIcon,
    content: `Your information may be transferred to and processed in countries other than Ghana. These countries may have different data protection laws.

By using the app, you consent to the transfer of your information to Ghana and other countries where we operate. We ensure appropriate safeguards are in place for international transfers.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: EnvelopeIcon,
    content: `For privacy-related questions or concerns:

Data Protection — KTU SRC App
XolaceInc Ltd.

Email: support@xolaceinc.com

We take all privacy concerns seriously and will respond within 48 hours.`,
  },
];

const dotGrid = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ── Page Header ── */}
      <section className="relative overflow-hidden bg-[oklch(0.22_0.09_155)] text-white">
        <div className="absolute inset-0" style={dotGrid} />
        <div className="absolute -right-24 top-1/2 size-64 -translate-y-1/2 rounded-full border border-white/6" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] tracking-wide">
            <span
              className="size-1.5 rounded-full"
              style={{ background: "var(--brand-gold)" }}
            />
            Legal · XolaceInc Ltd.
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/65">
            Last updated: January 15, 2025
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-background to-transparent" />
      </section>

      <div className="mx-auto w-full max-w-5xl px-4 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">

          {/* Sidebar TOC (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Contents
              </p>
              <nav className="space-y-0.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <main className="space-y-10">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-xl border border-border p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="size-4 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-sm font-semibold">{s.title}</h2>
                  </div>
                </div>

                <div className="space-y-2">
                  {s.content.split("\n\n").map((para, j) => (
                    <div key={j}>
                      {para.startsWith("•") ? (
                        <ul className="space-y-1.5">
                          {para.split("\n").map((line, k) => (
                            <li
                              key={k}
                              className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span
                                className="mt-[0.4em] size-1.5 shrink-0 rounded-full bg-primary/50"
                              />
                              {line.replace(/^•\s*/, "")}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {para}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Footer note */}
            <div className="rounded-xl border border-dashed border-border p-5 text-center">
              <p className="text-xs text-muted-foreground">
                For privacy concerns, contact{" "}
                <a
                  href="mailto:support@xolaceinc.com"
                  className="font-medium text-primary hover:underline"
                >
                  support@xolaceinc.com
                </a>
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <Link
                href="/support"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeftIcon className="size-3.5" />
                Back to Support
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                Terms of Service →
              </Link>
            </div>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
