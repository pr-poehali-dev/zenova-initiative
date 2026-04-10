const accessories = [
  {
    title: "Турбокомпрессор",
    subtitle: "Наддув воздуха",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/0239c26a-c447-4f64-b14f-e1de72607024.jpg",
    description: "Турбина использует энергию отработавших газов для сжатия входящего воздуха. Больше воздуха = больше топлива = больше мощности. Два колеса на одном валу: горячее (турбинное) раскручивается газами, холодное (компрессорное) нагнетает воздух.",
    param: "Давление наддува: 1,5–2,5 бар",
  },
  {
    title: "Топливный насос",
    subtitle: "Высокое давление для впрыска",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/3677b34d-8f0e-4870-936b-18201558635f.jpg",
    description: "ТНВД (топливный насос высокого давления) создаёт колоссальное давление топлива и подаёт его к форсункам точно дозированными порциями. В системах Common Rail топливо хранится в общей магистрали под постоянным давлением.",
    param: "Давление: 1000–2500 бар",
  },
  {
    title: "Форсунки",
    subtitle: "Точный впрыск топлива",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/3e38834d-b8f1-4f31-a45f-1140e96328d6.jpg",
    description: "Форсунка распыляет дизельное топливо в камеру сгорания мельчайшими каплями. Чем мельче распыл — тем лучше перемешивание с воздухом и полнее сгорание. Современные электромагнитные форсунки управляются блоком ЭБУ до 5 раз за один такт.",
    param: "Диаметр отверстий: 0,1–0,3 мм",
  },
  {
    title: "Генератор",
    subtitle: "Электропитание всего автомобиля",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/4644b679-feae-4869-8fb5-dce1aa9afb31.jpg",
    description: "Генератор преобразует механическое вращение (от ремня коленвала) в электрический ток. Он питает всю бортовую электронику и заряжает аккумулятор во время езды. Внутри — ротор с обмоткой создаёт вращающееся магнитное поле, наводящее ток в статоре.",
    param: "Мощность: 1–3 кВт, напряжение 14 В",
  },
  {
    title: "Стартер",
    subtitle: "Запуск двигателя",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/34151897-a633-468d-ad9d-8516ef65d6e1.jpg",
    description: "Стартер — мощный электромотор, который раскручивает коленвал при запуске. Соленоид выдвигает шестерню, она зацепляется с зубчатым венцом маховика. Как только двигатель запустился и набрал обороты, шестерня автоматически выходит из зацепления.",
    param: "Потребляемый ток: 150–400 А",
  },
  {
    title: "Радиатор",
    subtitle: "Отвод тепла из системы охлаждения",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/780213b6-b65c-4721-a5eb-49ef9e088354.jpg",
    description: "Радиатор рассеивает тепло антифриза в окружающий воздух. Горячая жидкость протекает по тонким металлическим трубкам, окружённым рёбрами охлаждения. Встречный поток воздуха при движении (или электровентилятор) уносит тепло от рёбер.",
    param: "Рабочая температура ОЖ: 85–95 °C",
  },
];

export default function Accessories() {
  return (
    <section className="bg-neutral-950 py-20 px-6" id="accessories">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-3">Навесное оборудование</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Системы и агрегаты
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-2xl">
          Двигатель — это не только цилиндры и поршни. Каждый навесной агрегат выполняет критически важную роль.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item) => (
            <div key={item.title} className="group flex flex-col bg-neutral-900">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-neutral-500 uppercase text-xs tracking-widest mb-1">{item.subtitle}</p>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
                <div className="border-t border-neutral-700 pt-4">
                  <p className="text-neutral-300 text-xs font-mono">{item.param}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
