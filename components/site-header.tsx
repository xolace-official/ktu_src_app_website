import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-[10px] font-bold tracking-widest">
            KTU
          </div>
          <div className="hidden sm:block leading-none">
            <p className="text-sm font-semibold">KTU SRC App</p>
            <p className="text-[10px] text-muted-foreground tracking-wide">
              by XolaceInc Ltd.
            </p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-0.5">
          {[
            { href: "/", label: "Home" },
            { href: "/support", label: "Support" },
            { href: "/privacy", label: "Privacy" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
