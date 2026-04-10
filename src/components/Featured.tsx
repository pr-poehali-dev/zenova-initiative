export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/9492bd09-4232-4f0d-9f28-62fea19789d1/files/7233071d-7fa2-4503-8c23-fe31e02db636.jpg"
          alt="Устройство дизельного двигателя в разрезе"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="device">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ключевые узлы и системы</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Цилиндро-поршневая группа, топливная аппаратура, система наддува — каждый узел играет
          свою роль в рождении крутящего момента.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          {[
            { label: "Топливные форсунки", desc: "Впрыск под давлением 1000–2500 бар" },
            { label: "Турбонагнетатель", desc: "Повышает мощность на 30–40%" },
            { label: "Коленчатый вал", desc: "Преобразует возвратно-поступательное движение во вращение" },
            { label: "Система охлаждения", desc: "Поддерживает рабочую температуру 85–95 °C" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-neutral-900 pl-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-900">{item.label}</p>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Подробнее
        </button>
      </div>
    </div>
  );
}