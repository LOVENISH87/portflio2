const Footer = () => (
  <footer className="border-t border-border/30 py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display text-xs tracking-[0.3em] text-primary/60">&lt;LT /&gt;</span>
      <span className="font-mono text-xs">
        GAME OVER? NEVER. © {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);

export default Footer;
