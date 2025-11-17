'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-20 border-t border-border no-print">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> echo &ldquo;Made with ❤️ by Isaac Beale&rdquo;
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © {currentYear} Isaac Beale. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
