import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-[10px] font-bold tracking-widest">
              KTU
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold">KTU SRC App</p>
              <p className="text-[10px] text-muted-foreground tracking-wide mt-0.5">
                Official Student Platform · XolaceInc Ltd.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link href="/support" className="hover:text-foreground transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 XolaceInc Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
