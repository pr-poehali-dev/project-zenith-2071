import Header from "@/components/Header"
import Footer from "@/components/Footer"

const LOGO_URL = "https://cdn.poehali.dev/projects/8775c65f-a63d-4029-8175-7693b10a78a4/bucket/655c4152-980e-4167-a4ec-a4a89e28d9d2.jpg"

const brands = [
  {
    name: "Соловьиный край",
    category: "Продукты питания",
    description: "Натуральные продукты из сердца Курской области. Традиционные рецепты, проверенные поколениями.",
    icon: "🌾",
  },
  {
    name: "Курская антоновка",
    category: "Сельское хозяйство",
    description: "Знаменитые курские яблоки — символ плодородной земли и трудолюбия курян.",
    icon: "🍎",
  },
  {
    name: "Коренная ярмарка",
    category: "Торговля и ремёсла",
    description: "Историческая торговая площадка, возрождающая традиции старинной Коренной ярмарки.",
    icon: "🏮",
  },
  {
    name: "Курская косметика",
    category: "Красота и уход",
    description: "Натуральная косметика на основе курских трав и растений. Забота о себе с любовью к природе.",
    icon: "🌿",
  },
  {
    name: "Стрелецкая степь",
    category: "Экотуризм",
    description: "Уникальный заповедник — жемчужина Курской земли. Нетронутая природа и первозданная красота.",
    icon: "🦅",
  },
  {
    name: "Железногорский фарфор",
    category: "Ремёсла и искусство",
    description: "Тонкий фарфор с курскими мотивами — настоящее произведение искусства от местных мастеров.",
    icon: "🏺",
  },
]

const values = [
  { title: "Качество", desc: "Каждый продукт проходит строгий контроль качества и отвечает высоким стандартам." },
  { title: "Традиции", desc: "Сохраняем вековые традиции курских мастеров и передаём их будущим поколениям." },
  { title: "Гордость", desc: "Курская земля — это бренд, которым гордится каждый житель региона." },
]

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4a7c4a 0%, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
          <img
            src={LOGO_URL}
            alt="Сделана на Курской земле"
            className="w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(201,168,76,0.4))" }}
          />

          <div className="space-y-4">
            <p
              className="text-accent font-mono text-sm tracking-[0.3em] uppercase"
            >
              Региональный знак качества
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--gold)" }}
            >
              Сделана на<br />
              <span className="text-foreground">Курской земле</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Объединяем лучшие бренды Курской области. Продукты, ремёсла и традиции, которыми гордится наш край.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#brands">
              <button
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
                style={{ background: "var(--gold)", color: "#1a2e1a" }}
              >
                Смотреть бренды
              </button>
            </a>
            <a href="#about">
              <button className="px-8 py-4 rounded-full font-semibold text-base border transition-all duration-300 hover:scale-105 border-accent text-accent hover:bg-accent/10">
                О проекте
              </button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-accent font-mono text-sm tracking-widest uppercase">О проекте</p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Курская земля —<br />
                <span style={{ color: "var(--gold)" }}>источник качества</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                «Сделана на Курской земле» — региональный знак качества, объединяющий лучших производителей Курской области. Мы гарантируем подлинность, традиции и гордость за свой край.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Соловьиный край богат не только природой, но и талантливыми людьми, создающими продукты мирового уровня прямо здесь, на курской земле.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-accent font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-accent font-mono text-sm tracking-widest uppercase">Участники программы</p>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Бренды Курской земли
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Производители, прошедшие отбор и получившие право носить знак «Сделана на Курской земле»
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-accent/60 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-4">{brand.icon}</div>
                <span
                  className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
                >
                  {brand.category}
                </span>
                <h3
                  className="text-xl font-bold mt-4 mb-3 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {brand.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="relative rounded-3xl p-16 border border-accent/30 overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(var(--card)) 0%, rgba(45,74,45,0.5) 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: `radial-gradient(circle at 50% 0%, var(--gold), transparent 60%)` }}
            />
            <div className="relative z-10 space-y-6">
              <img src={LOGO_URL} alt="Логотип" className="w-24 h-24 object-contain mx-auto opacity-90" />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--gold)" }}
              >
                Стань частью движения
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Если вы производитель из Курской области — подайте заявку на получение знака качества «Сделана на Курской земле»
              </p>
              <a href="#contact">
                <button
                  className="mt-4 px-10 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.6)]"
                  style={{ background: "var(--gold)", color: "#1a2e1a" }}
                >
                  Подать заявку
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
