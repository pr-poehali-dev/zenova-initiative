import { useState } from "react";

const questions = [
  {
    question: "Что происходит с воздухом внутри цилиндра на такте сжатия?",
    options: [
      "Воздух охлаждается до -20 °C",
      "Воздух нагревается до 700 °C из-за сильного сжатия",
      "Воздух выходит через выпускной клапан",
      "Форсунка впрыскивает топливо и охлаждает воздух",
    ],
    correct: 1,
    explanation: "При степени сжатия 16–22:1 воздух разогревается до 700 °C — этого достаточно для самовоспламенения дизельного топлива без свечи зажигания.",
  },
  {
    question: "Какая деталь преобразует возвратно-поступательное движение поршня во вращение?",
    options: ["Распредвал", "Коленчатый вал", "Маховик", "Турбокомпрессор"],
    correct: 1,
    explanation: "Коленчатый вал имеет смещённые шейки — шатун передаёт на них усилие от поршня, и этот эксцентриситет преобразует прямолинейное движение во вращательное.",
  },
  {
    question: "За счёт чего турбокомпрессор увеличивает мощность двигателя?",
    options: [
      "Он охлаждает топливо перед впрыском",
      "Использует энергию отработавших газов для нагнетания воздуха в цилиндры",
      "Повышает давление масла в двигателе",
      "Раскручивает коленвал электромотором",
    ],
    correct: 1,
    explanation: "Горячие газы из выпускного коллектора раскручивают турбинное колесо. На одном валу с ним — компрессорное колесо, которое нагнетает больше воздуха в цилиндры. Больше воздуха = больше топлива = больше мощности.",
  },
  {
    question: "Для чего нужен термостат в системе охлаждения?",
    options: [
      "Измеряет температуру воздуха снаружи автомобиля",
      "Перекачивает антифриз по системе охлаждения",
      "Блокирует большой круг циркуляции пока двигатель холодный, ускоряя прогрев",
      "Охлаждает масло в поддоне картера",
    ],
    correct: 2,
    explanation: "Холодный двигатель — это износ и неэффективное сгорание. Термостат держит антифриз в малом круге (без радиатора) пока температура не достигнет 85–90 °C, затем открывает большой круг.",
  },
  {
    question: "Что делает масляный насос?",
    options: [
      "Охлаждает масло в радиаторе",
      "Меняет вязкость масла при нагреве",
      "Создаёт давление и подаёт масло ко всем трущимся деталям",
      "Отфильтровывает воду из масла",
    ],
    correct: 2,
    explanation: "Масляный насос — сердце системы смазки. Он забирает масло из поддона картера и под давлением 3–6 бар подаёт его к подшипникам коленвала, распредвала, стенкам цилиндров — везде, где есть трение металла о металл.",
  },
  {
    question: "Сколько раз распределительный вал делает оборот на каждые два оборота коленвала?",
    options: ["4 раза", "2 раза", "1 раз", "0,5 раза"],
    correct: 2,
    explanation: "Четырёхтактный цикл завершается за два оборота коленвала. За это время каждый клапан должен открыться только один раз, значит распредвал вращается вдвое медленнее — один оборот на два оборота коленвала.",
  },
  {
    question: "Какое давление создаёт форсунка при впрыске топлива в современном дизеле?",
    options: ["10–50 бар", "100–300 бар", "1000–2500 бар", "5000–8000 бар"],
    correct: 2,
    explanation: "Системы Common Rail создают давление 1000–2500 бар. Такое колоссальное давление необходимо для тончайшего распыления топлива (капли 5–10 мкм) и его моментального смешивания с раскалённым воздухом.",
  },
  {
    question: "Что происходит с шестернёй стартера после запуска двигателя?",
    options: [
      "Она продолжает вращаться вместе с двигателем",
      "Соленоид убирает её из зацепления с маховиком автоматически",
      "Она ломается и требует замены",
      "Водитель вручную отключает стартер",
    ],
    correct: 1,
    explanation: "В стартере стоит обгонная муфта — как только двигатель набирает обороты выше оборотов стартера, муфта проскальзывает и защищает стартер от разноса. Соленоид затем убирает шестерню из зацепления.",
  },
];

type State = "idle" | "answered" | "finished";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [state, setState] = useState<State>("idle");

  const q = questions[current];
  const total = questions.length;

  function handleSelect(idx: number) {
    if (state === "answered") return;
    setSelected(idx);
    setState("answered");
    if (idx === q.correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setState("idle");
    } else {
      setState("finished");
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setState("idle");
  }

  const pct = Math.round((score / total) * 100);

  if (state === "finished") {
    const grade =
      pct >= 90 ? { label: "Отлично!", color: "text-green-400", sub: "Вы отлично разбираетесь в устройстве дизельного двигателя." }
      : pct >= 60 ? { label: "Хороший результат", color: "text-yellow-400", sub: "Есть что повторить — пройдитесь по разделам выше." }
      : { label: "Стоит повторить", color: "text-red-400", sub: "Перечитайте материал и попробуйте ещё раз." };

    return (
      <section className="bg-neutral-950 py-20 px-6" id="quiz">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase text-neutral-500 text-sm tracking-widest mb-6">Результат теста</p>
          <div className="text-8xl font-bold text-white mb-2">{pct}%</div>
          <p className={`text-2xl font-bold mb-3 ${grade.color}`}>{grade.label}</p>
          <p className="text-neutral-400 text-lg mb-4">{grade.sub}</p>
          <p className="text-neutral-500 mb-10">Правильных ответов: {score} из {total}</p>

          <div className="w-full bg-neutral-800 h-2 mb-10">
            <div
              className="h-2 bg-white transition-all duration-1000"
              style={{ width: `${pct}%` }}
            />
          </div>

          <button
            onClick={handleRestart}
            className="bg-white text-neutral-950 px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors"
          >
            Пройти снова
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-neutral-950 py-20 px-6" id="quiz">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-3">Проверь себя</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">Тест на усвоение</h2>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 bg-neutral-800 h-1">
            <div
              className="h-1 bg-white transition-all duration-500"
              style={{ width: `${((current) / total) * 100}%` }}
            />
          </div>
          <span className="text-neutral-500 text-sm shrink-0">{current + 1} / {total}</span>
        </div>

        <div className="mb-8">
          <p className="text-white text-xl md:text-2xl font-medium leading-snug">{q.question}</p>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          {q.options.map((opt, idx) => {
            let style = "border border-neutral-700 text-neutral-300 hover:border-white hover:text-white";
            if (state === "answered") {
              if (idx === q.correct) style = "border border-green-500 bg-green-500/10 text-green-300";
              else if (idx === selected) style = "border border-red-500 bg-red-500/10 text-red-300";
              else style = "border border-neutral-800 text-neutral-600";
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`text-left px-6 py-4 transition-all duration-200 cursor-pointer ${style}`}
              >
                <span className="text-neutral-500 text-sm mr-3 font-mono">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {state === "answered" && (
          <div className="border border-neutral-700 bg-neutral-900 p-5 mb-8">
            <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">
              {selected === q.correct ? "✓ Верно!" : "✗ Неверно"}
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed">{q.explanation}</p>
          </div>
        )}

        {state === "answered" && (
          <button
            onClick={handleNext}
            className="bg-white text-neutral-950 px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors"
          >
            {current + 1 < total ? "Следующий вопрос" : "Узнать результат"}
          </button>
        )}
      </div>
    </section>
  );
}
