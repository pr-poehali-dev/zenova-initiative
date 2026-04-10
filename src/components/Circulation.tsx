const systems = [
  {
    id: "coolant",
    label: "Система охлаждения",
    color: "bg-blue-500",
    textColor: "text-blue-400",
    borderColor: "border-blue-500",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/2c6cea6c-ce41-47da-a212-7f6724d5fbd1.jpg",
    title: "Как циркулирует антифриз",
    description:
      "Водяной насос гонит антифриз по каналам в блоке цилиндров и головке блока. Жидкость забирает тепло от стенок цилиндров, затем отдаёт его в радиаторе встречному потоку воздуха. Термостат закрывает большой круг пока двигатель холодный — это ускоряет прогрев.",
    steps: [
      "Водяной насос создаёт давление и движение антифриза",
      "Антифриз проходит по каналам в блоке и ГБЦ, охлаждая цилиндры",
      "Горячий антифриз поступает в радиатор",
      "В радиаторе тепло отдаётся воздуху через соты",
      "Охлаждённый антифриз возвращается к насосу",
    ],
  },
  {
    id: "oil",
    label: "Система смазки",
    color: "bg-amber-500",
    textColor: "text-amber-400",
    borderColor: "border-amber-500",
    image: "https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/26ea4d42-03c5-44fb-9072-b137f805e3ba.jpg",
    title: "Как циркулирует масло",
    description:
      "Масляный насос забирает масло из поддона картера и под давлением подаёт его ко всем трущимся деталям. Масло образует плёнку между металлическими поверхностями, исключая их прямой контакт. Масляный фильтр задерживает частицы износа и продукты горения.",
    steps: [
      "Масляный насос забирает масло из поддона картера",
      "Масло проходит через фильтр — он задерживает загрязнения",
      "Под давлением масло поступает к подшипникам коленвала и распредвала",
      "Часть масла разбрызгивается на стенки цилиндров и поршни",
      "Использованное масло стекает обратно в поддон",
    ],
  },
];

export default function Circulation() {
  return (
    <section className="bg-neutral-900 py-20 px-6" id="circulation">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-3">Жизненно важные системы</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 leading-tight">
          Охлаждение<br />и смазка
        </h2>

        <div className="flex flex-col gap-20">
          {systems.map((sys, i) => (
            <div
              key={sys.id}
              className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-start`}
            >
              <div className="flex-1 w-full">
                <div className={`inline-block px-3 py-1 text-xs uppercase tracking-widest mb-4 border ${sys.borderColor} ${sys.textColor}`}>
                  {sys.label}
                </div>
                <div className="overflow-hidden">
                  <img
                    src={sys.image}
                    alt={sys.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{sys.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">{sys.description}</p>
                <div className="flex flex-col gap-3">
                  {sys.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <span className={`shrink-0 w-6 h-6 rounded-full ${sys.color} flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                        {j + 1}
                      </span>
                      <p className="text-neutral-300 text-sm leading-snug">{step}</p>
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
