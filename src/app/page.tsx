import NavBar from "@/components/NavBar";

const stats = [
  { value: "10+", label: "Años de Experiencia", icon: "⭐" },
  { value: "500+", label: "Pasteles Creados", icon: "🎂" },
  { value: "100%", label: "Clientes Satisfechos", icon: "❤️" },
];

const services = [
  {
    icon: "💍",
    title: "Pasteles de Boda",
    description:
      "Diseños únicos y elegantes para el día más especial de tu vida. Cada detalle elaborado con amor y precisión artesanal.",
    features: ["Consulta de diseño gratuita", "Sabores y rellenos a elegir", "Entrega puntual garantizada"],
  },
  {
    icon: "🎂",
    title: "Pasteles de Cumpleaños",
    description:
      "Celebra cada año con un pastel que refleje tu personalidad. Diseños para todas las edades y gustos.",
    features: ["Temas personalizados", "Para todas las edades", "Minipasteles disponibles"],
  },
  {
    icon: "👑",
    title: "Quinceañeras",
    description:
      "Convierte el cumpleaños más especial en un sueño hecho realidad con pasteles de ensueño dignos de una princesa.",
    features: ["Diseños de lujo", "Coordinación con decoración", "Cake tasting incluido"],
  },
  {
    icon: "✨",
    title: "Eventos Corporativos",
    description:
      "Pasteles temáticos para celebrar los logros de tu empresa con la distinción y profesionalismo que mereces.",
    features: ["Branding personalizado", "Entregas corporativas", "Pedidos en volumen"],
  },
];

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Consulta Inicial",
    description:
      "Hablamos de tu visión, el evento, tus gustos y presupuesto. Todo comienza con una conversación.",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Diseño Personalizado",
    description:
      "Creamos el diseño único de tu pastel, eligiendo sabores, rellenos, colores y decoración juntos.",
  },
  {
    number: "03",
    icon: "🎂",
    title: "Elaboración con Amor",
    description:
      "Elaboramos tu pastel con los mejores ingredientes artesanales y lo entregamos en perfectas condiciones.",
  },
];

const gallery = [
  { title: "Pastel de Boda Elegante", gradient: "from-rose-100 via-pink-50 to-rose-200", emoji: "💍" },
  { title: "Cumpleaños Especial", gradient: "from-amber-100 via-orange-50 to-rose-100", emoji: "🎂" },
  { title: "Quinceañera Soñada", gradient: "from-pink-100 via-purple-50 to-rose-100", emoji: "👑" },
  { title: "Pastel Artesanal", gradient: "from-rose-200 via-red-50 to-amber-100", emoji: "🌸" },
  { title: "Diseño Floral", gradient: "from-green-50 via-rose-50 to-pink-100", emoji: "🌺" },
  { title: "Pastel Corporativo", gradient: "from-stone-100 via-rose-50 to-amber-50", emoji: "✨" },
];

const testimonials = [
  {
    name: "María González",
    role: "Novia emocionada",
    initial: "M",
    text: "Alan creó el pastel de bodas más hermoso que jamás había imaginado. Cada detalle fue perfecto y el sabor era simplemente increíble. ¡Todos los invitados quedaron encantados!",
  },
  {
    name: "Carlos Rodríguez",
    role: "Papá orgulloso",
    initial: "C",
    text: "Para el cumpleaños de mi hija, Alan superó todas nuestras expectativas. El diseño personalizado fue exactamente lo que pedimos y la calidad del pastel fue extraordinaria.",
  },
  {
    name: "Sofía Martínez",
    role: "Quinceañera feliz",
    initial: "S",
    text: "Mi pastel de quinceañera fue absolutamente mágico. Alan capturó exactamente mi sueño y lo convirtió en una obra de arte comestible. ¡Lo recomiendo al 100%!",
  },
];

const faqs = [
  {
    question: "¿Cuánto tiempo antes debo pedir mi pastel?",
    answer:
      "Se recomienda hacer tu pedido con al menos 2 semanas de anticipación para pasteles de cumpleaños, y con 1 a 3 meses de anticipación para pasteles de boda o quinceañera, para garantizar la disponibilidad y el diseño perfecto.",
  },
  {
    question: "¿Hacen pasteles personalizados con diseño propio?",
    answer:
      "¡Absolutamente! Cada pastel que creamos es completamente personalizado. Puedes traer fotos, inspiración o simplemente contarnos tu idea y nosotros diseñamos el pastel perfecto para ti.",
  },
  {
    question: "¿Qué estilos de pasteles ofrece Alan Diaz?",
    answer:
      "Ofrecemos pasteles fondant, naked cake, drip cake, pasteles con flores naturales o de azúcar, pasteles de varios pisos, pasteles temáticos y mucho más. Nos especializamos en bodas, cumpleaños, quinceañeras, baby showers y eventos corporativos.",
  },
  {
    question: "¿Hacen entregas a domicilio?",
    answer:
      "Sí, contamos con servicio de entrega a domicilio para garantizar que tu pastel llegue en perfectas condiciones al lugar de tu evento.",
  },
  {
    question: "¿Cuánto cuesta un pastel personalizado?",
    answer:
      "El precio varía según el tamaño, diseño y complejidad. Ofrecemos consulta gratuita para darte una cotización personalizada sin compromiso. Contáctanos para conocer nuestros precios.",
  },
  {
    question: "¿Usan ingredientes naturales?",
    answer:
      "Sí, todos nuestros pasteles están elaborados con ingredientes 100% naturales y artesanales, sin conservadores artificiales. La calidad es nuestra máxima prioridad.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alan Diaz | Decorador de Pasteles Artesanales",
    description:
      "Maestro decorador de pasteles artesanales especializado en bodas, cumpleaños, quinceañeras y eventos especiales.",
    founder: {
      "@type": "Person",
      name: "Alan Diaz",
      jobTitle: "Maestro Decorador de Pasteles",
    },
    priceRange: "$$",
    servesCuisine: "Repostería Artesanal",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Pasteles Artesanales",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pasteles de Boda" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pasteles de Cumpleaños" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pasteles de Quinceañera" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pasteles para Baby Shower" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pasteles Corporativos" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alan Diaz",
    jobTitle: "Maestro Decorador de Pasteles & CEO",
    description:
      "Alan Diaz es un maestro pastelero y decorador de pasteles artesanales con más de 10 años de experiencia en México, especializado en pasteles de boda, cumpleaños, quinceañeras y diseños personalizados únicos.",
    knowsAbout: [
      "Decoración de pasteles",
      "Repostería artesanal",
      "Pasteles de boda",
      "Diseño de pasteles fondant",
      "Pasteles naked cake",
      "Pasteles drip cake",
    ],
  },
];

export default function Home() {
  return (
    <>
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <NavBar />

      <main>
        {/* ── Hero ── */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-rose-900 via-rose-800 to-stone-900 overflow-hidden pt-16 scroll-mt-16"
        >
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-700/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-amber-700/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-800/40 px-4 py-2 text-sm text-rose-200 mb-8">
              <span>🌟</span>
              <span>Maestro Decorador de Pasteles Artesanales</span>
            </div>

            <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Alan Diaz
            </h1>

            <p className="text-xl sm:text-2xl text-rose-200 mb-4 font-light max-w-3xl mx-auto">
              Transformando momentos especiales en obras de arte comestibles
            </p>
            <p className="text-base sm:text-lg text-rose-300/80 mb-12 max-w-2xl mx-auto">
              Pasteles fondant, naked cake y drip cake personalizados para bodas, cumpleaños, quinceañeras, baby showers y eventos únicos · Entrega a domicilio en México
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 hover:bg-rose-400 px-8 py-4 text-base font-semibold text-white transition-all shadow-lg shadow-rose-900/50"
              >
                🎂 Pedir Cotización Gratis
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-300/40 hover:bg-rose-800/40 px-8 py-4 text-base font-semibold text-rose-100 transition-all"
              >
                Ver Galería
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              className="w-full h-16 sm:h-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,80 C360,10 1080,80 1440,10 L1440,80 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-3">
                  <span className="text-5xl">{stat.icon}</span>
                  <span className="font-playfair text-5xl font-bold text-rose-600">
                    {stat.value}
                  </span>
                  <span className="text-stone-500 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="sobre-mi"
          className="bg-rose-50 py-24 scroll-mt-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 h-96 sm:w-80 sm:h-[420px]">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-rose-200 to-amber-100 rotate-3" />
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-rose-400 to-rose-600 flex flex-col items-center justify-center -rotate-1 shadow-xl">
                    <span className="text-8xl mb-4">👨‍🍳</span>
                    <span className="text-white font-playfair text-2xl font-bold">Alan Diaz</span>
                    <span className="text-rose-100 text-sm mt-1">Maestro Pastelero & CEO</span>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-amber-400 rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs font-semibold text-amber-900 uppercase tracking-wide">Fundador</p>
                    <p className="text-amber-900 font-bold text-sm">10+ años</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                  CEO & Fundador
                </span>
                <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900 mt-3 mb-6 leading-tight">
                  El Arte de Endulzar<br />tu Vida
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-5">
                  Soy <strong>Alan Diaz</strong>, maestro decorador de pasteles artesanales y fundador de mi propio estudio de repostería. Con más de 10 años de experiencia, transformo sueños en delicias únicas que cuentan tu historia.
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Mi pasión por la <strong>repostería artesanal</strong> y el <strong>diseño de pasteles</strong> me llevó a especializarme en creaciones únicas para bodas, cumpleaños, quinceañeras y eventos especiales. Cada pastel es elaborado con ingredientes naturales de primera calidad y técnicas artesanales perfeccionadas a lo largo de los años.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Ingredientes 100% naturales y artesanales",
                    "Diseños únicos y completamente personalizados",
                    "Puntualidad y profesionalismo garantizados",
                    "Consulta de diseño inicial gratuita",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-stone-700">
                      <span className="mt-0.5 text-rose-500 font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 px-8 py-4 font-semibold text-white transition-colors"
                >
                  Ver mis servicios →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section
          id="servicios"
          className="bg-white py-24 scroll-mt-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                Lo que ofrezco
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
                Servicios de Pastelería Artesanal
              </h2>
              <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
                Cada servicio es una experiencia única diseñada para superar tus expectativas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-rose-100 bg-white p-8 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-300"
                >
                  <div className="text-5xl mb-5">{service.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-stone-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-stone-500">
                        <span className="text-rose-400 flex-shrink-0">●</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-linear-to-br from-rose-50 to-amber-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                Cómo funciona
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
                Mi Proceso Creativo
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto">
                Desde la primera idea hasta la entrega, trabajamos juntos para crear algo extraordinario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-rose-50 border-2 border-rose-100 flex items-center justify-center text-4xl">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-stone-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section
          id="galeria"
          className="bg-white py-24 scroll-mt-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                Mi trabajo
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
                Galería de Pasteles
              </h2>
              <p className="mt-4 text-stone-500 max-w-2xl mx-auto">
                Cada creación cuenta una historia única. Descubre algunos de mis pasteles más especiales elaborados con amor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.title}
                  className={`group relative h-64 rounded-2xl bg-linear-to-br ${item.gradient} overflow-hidden cursor-pointer`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                    <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                      {item.emoji}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-900/70 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-playfair font-semibold text-lg">{item.title}</p>
                    <p className="text-white/70 text-sm">por Alan Diaz</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-rose-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                Lo que dicen
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
                Clientes Felices
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-6 italic text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                      <p className="text-stone-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                Preguntas frecuentes
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
                Todo lo que Necesitas Saber
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto">
                Resuelve tus dudas sobre pasteles personalizados, tiempos de entrega, precios y más.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6 hover:border-rose-300 transition-colors"
                >
                  <h3 className="font-playfair text-lg font-bold text-stone-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed pl-10">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Keywords / Servicios Tag Cloud ── */}
        <section className="bg-rose-50 py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-6">
              Especialidades de Alan Diaz
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Pasteles de Boda",
                "Pasteles de Cumpleaños",
                "Pasteles de Quinceañera",
                "Pasteles Fondant",
                "Naked Cake",
                "Drip Cake",
                "Baby Shower",
                "Pasteles Temáticos",
                "Pasteles a Domicilio",
                "Pasteles Corporativos",
                "Pasteles Personalizados",
                "Repostería Artesanal",
                "Pasteles con Flores",
                "Pasteles de 3 Pisos",
                "Sugar Flowers",
                "Pasteles de Autor",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-stone-600 hover:border-rose-400 hover:text-rose-600 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact / CTA ── */}
        <section
          id="contacto"
          className="bg-linear-to-br from-rose-900 via-rose-800 to-stone-900 py-24 relative overflow-hidden scroll-mt-16"
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-rose-700/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-800/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-5xl mb-6 block">🎂</span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              ¿Listo para tu Pastel Perfecto?
            </h2>
            <p className="text-rose-200 text-xl mb-3 max-w-2xl mx-auto">
              Cuéntame sobre tu evento especial y juntos crearemos el pastel de tus sueños.
            </p>
            <p className="text-rose-300/80 mb-12 text-sm">
              Consulta gratuita &nbsp;•&nbsp; Diseño personalizado &nbsp;•&nbsp; Ingredientes artesanales
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              {[
                { icon: "📱", label: "WhatsApp", info: "+52 (XXX) XXX-XXXX" },
                { icon: "📧", label: "Email", info: "alan@alandiazpasteles.com" },
                { icon: "📍", label: "Ubicación", info: "México" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl bg-rose-800/40 border border-rose-700/30 p-5 text-center"
                >
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <p className="text-rose-200 text-xs font-semibold uppercase tracking-wide mb-1">
                    {c.label}
                  </p>
                  <p className="text-white text-sm">{c.info}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-rose-50 px-10 py-4 text-base font-semibold text-rose-700 transition-colors shadow-lg"
            >
              📲 Contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎂</span>
                <span className="font-playfair text-xl font-bold text-white">Alan Diaz</span>
              </div>
              <p className="text-sm leading-relaxed">
                Maestro decorador de pasteles artesanales. Transformando momentos especiales en obras de arte comestibles desde hace más de 10 años.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Navegación</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  { href: "#sobre-mi", label: "Sobre Mí" },
                  { href: "#servicios", label: "Servicios" },
                  { href: "#galeria", label: "Galería" },
                  { href: "#contacto", label: "Contacto" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="hover:text-rose-400 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Especialidades</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  "Pasteles de Boda",
                  "Pasteles de Cumpleaños",
                  "Quinceañeras",
                  "Eventos Corporativos",
                ].map((s) => (
                  <li key={s}>
                    <a href="#servicios" className="hover:text-rose-400 transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Alan Diaz — Decorador de Pasteles Artesanales. Todos los derechos reservados.
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Pasteles artesanales · Bodas · Cumpleaños · Quinceañeras · México
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
