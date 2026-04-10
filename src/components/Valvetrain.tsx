export default function Valvetrain() {
  return (
    <section className="bg-white py-20 px-6" id="valvetrain">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-3">Газораспределительный механизм</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          Клапаны<br />и распредвал
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch mb-20">
          <div className="flex-1 overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/fb076c6d-0b42-482f-88d3-6c94fbc06389.jpg"
              alt="Клапаны и распредвал"
              className="w-full h-full min-h-[360px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Как это работает</h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Распределительный вал (распредвал) управляет открытием и закрытием клапанов. 
              Его кулачки нажимают на клапаны строго в нужный момент цикла. 
              Впускные клапаны впускают воздух в цилиндр, выпускные — выпускают отработавшие газы.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Впускные клапаны", desc: "Открываются на такте впуска, впускают воздух в цилиндр" },
                { title: "Выпускные клапаны", desc: "Открываются на такте выпуска, выпускают отработавшие газы" },
                { title: "Распредвал", desc: "Вращается вдвое медленнее коленвала, управляет фазами газораспределения" },
                { title: "Привод ГРМ", desc: "Цепь или ремень синхронизируют вращение коленвала и распредвала" },
              ].map((item) => (
                <div key={item.title} className="border border-neutral-200 p-4">
                  <p className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</p>
                  <p className="text-neutral-500 text-sm leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-950 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">4 такта дизельного цикла</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", name: "Впуск", desc: "Впускной клапан открыт, поршень движется вниз — цилиндр наполняется чистым воздухом" },
              { num: "02", name: "Сжатие", desc: "Оба клапана закрыты, поршень идёт вверх — воздух сжимается до 700 °C" },
              { num: "03", name: "Рабочий ход", desc: "Форсунка впрыскивает топливо, оно воспламеняется — взрыв толкает поршень вниз" },
              { num: "04", name: "Выпуск", desc: "Выпускной клапан открывается, поршень выталкивает отработавшие газы наружу" },
            ].map((step) => (
              <div key={step.num} className="border-t border-neutral-700 pt-4">
                <p className="text-neutral-500 text-xs mb-2">{step.num}</p>
                <p className="text-white font-bold text-lg mb-2">{step.name}</p>
                <p className="text-neutral-400 text-sm leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
