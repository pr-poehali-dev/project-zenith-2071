const LOGO_URL = "https://cdn.poehali.dev/projects/8775c65f-a63d-4029-8175-7693b10a78a4/bucket/655c4152-980e-4167-a4ec-a4a89e28d9d2.jpg"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50" style={{ background: "rgba(14,22,14,0.85)" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Логотип" className="w-10 h-10 object-contain rounded-full" />
          <div className="leading-tight">
            <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--gold)" }}>Сделана на</p>
            <p className="text-sm font-bold text-foreground">Курской земле</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">О проекте</a>
          <a href="#brands" className="text-sm text-muted-foreground hover:text-accent transition-colors">Бренды</a>
          <a href="#contact">
            <button
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
              style={{ background: "var(--gold)", color: "#1a2e1a" }}
            >
              Подать заявку
            </button>
          </a>
        </nav>
      </div>
    </header>
  )
}
