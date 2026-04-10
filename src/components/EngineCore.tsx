const parts = [
  {
    id: "piston",
    title: "Поршень",
    subtitle: "Сердце рабочего цикла",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/4954ae37-c8e7-4b67-aaf3-3fc0aed46583.jpg",
    description:
      "Поршень — цилиндрическая деталь, которая движется вверх-вниз внутри цилиндра. При сгорании топлива давление газов толкает поршень вниз, создавая механическую силу. Поршневые кольца обеспечивают герметичность и отводят тепло в стенки цилиндра.",
    facts: ["Давление при сгорании: до 200 бар", "Температура днища: 300–400 °C", "Скорость движения: до 15 м/с"],
  },
  {
    id: "conrod",
    title: "Шатун",
    subtitle: "Связующее звено",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/4954ae37-c8e7-4b67-aaf3-3fc0aed46583.jpg",
    description:
      "Шатун соединяет поршень с коленчатым валом. Верхняя головка (малая) крепится к поршню через палец, нижняя (большая) — к шейке коленвала. Шатун преобразует возвратно-поступательное движение поршня во вращательное движение коленвала.",
    facts: ["Материал: кованая сталь или алюминий", "Испытывает нагрузки сжатия и растяжения", "Смазывается маслом под давлением"],
  },
  {
    id: "crankshaft",
    title: "Коленчатый вал",
    subtitle: "Генератор вращения",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/ba1d4eed-6911-45c5-9a59-46925d84bcba.jpg",
    description:
      "Коленчатый вал — главный вращающийся элемент двигателя. Его шатунные шейки смещены относительно оси, поэтому толчки от поршней превращаются в непрерывное вращение. На коленвале установлены противовесы для балансировки и маховик для сглаживания крутящего момента.",
    facts: ["Число оборотов: 700–4000 об/мин у дизеля", "Материал: высокопрочный чугун или сталь", "Крутящий момент передаётся на КПП"],
  },
];

export default function EngineCore() {
  return (
    <section className="bg-neutral-950 py-20 px-6" id="engine-core">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-3">Кривошипно-шатунный механизм</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 leading-tight">
          Поршень, шатун<br />и коленвал
        </h2>

        <div className="flex flex-col gap-24">
          {parts.map((part, i) => (
            <div
              key={part.id}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="overflow-hidden">
                  <img
                    src={part.image}
                    alt={part.title}
                    className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-neutral-500 uppercase text-xs tracking-widest mb-2">{part.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">{part.title}</h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">{part.description}</p>
                <div className="flex flex-col gap-3">
                  {part.facts.map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <p className="text-neutral-400 text-sm">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
