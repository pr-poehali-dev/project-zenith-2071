const LOGO_URL = "https://cdn.poehali.dev/projects/8775c65f-a63d-4029-8175-7693b10a78a4/bucket/655c4152-980e-4167-a4ec-a4a89e28d9d2.jpg"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-0" style={{ background: "hsl(var(--card))" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Логотип" className="w-12 h-12 object-contain rounded-full" />
              <div>
                <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--gold)" }}>Сделана на</p>
                <p className="font-bold text-foreground">Курской земле</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Региональный знак качества продуктов и услуг Курской области.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold" style={{ color: "var(--gold)" }}>Навигация</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">О проекте</a>
              <a href="#brands" className="text-sm text-muted-foreground hover:text-accent transition-colors">Бренды</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold" style={{ color: "var(--gold)" }}>Стать участником</h4>
            <p className="text-muted-foreground text-sm">Вы производитель из Курской области? Напишите нам!</p>
            <a href="mailto:hello@kurskbrand.ru">
              <button
                className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.5)]"
                style={{ background: "var(--gold)", color: "#1a2e1a" }}
              >
                Написать нам
              </button>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-muted-foreground text-sm font-mono">© 2026 Сделана на Курской земле</p>
          <p className="text-muted-foreground text-sm font-mono">Курская область, Россия 🌿</p>
        </div>
      </div>
    </footer>
  )
}
