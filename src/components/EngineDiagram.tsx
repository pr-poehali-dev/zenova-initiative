const diagrams = [
  {
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/5fa85e02-8ac6-4973-b4ff-5abf807948aa.jpg",
    title: "Внутреннее устройство",
    subtitle: "Разрез двигателя — КШМ и ГРМ",
    caption: "Кривошипно-шатунный и газораспределительный механизмы в разрезе: поршень, шатун, коленвал, клапаны, распредвал и цепной привод ГРМ.",
  },
  {
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/cb9e16c5-085a-4230-aaf7-01519edcbe2c.jpg",
    title: "Навесное оборудование",
    subtitle: "Внешние агрегаты двигателя",
    caption: "Генератор, стартер, турбокомпрессор, топливный насос, патрубки охлаждения — все агрегаты, обеспечивающие работу двигателя.",
  },
];

export default function EngineDiagram() {
  return (
    <section className="bg-white py-20 px-6" id="diagram">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-3">Общий вид</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
          Двигатель целиком
        </h2>
        <p className="text-neutral-500 text-lg mb-16 max-w-2xl">
          Посмотрите на все изученные элементы в контексте реального двигателя.
        </p>

        <div className="flex flex-col gap-16">
          {diagrams.map((d, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}>
              <div className="flex-[3] w-full overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-[320px] md:h-[480px] object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
              <div className="flex-[2] flex flex-col justify-center">
                <p className="text-neutral-400 uppercase text-xs tracking-widest mb-2">{d.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-5">{d.title}</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">{d.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
