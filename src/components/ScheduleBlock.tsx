import FadeInSection from "./core/animations/FadeInSection.tsx";

const schedule = [
  { time: "09:40 – 11:00", event: "ЗАГС и фотосессия" },
  { time: "11:00 – 12:00", event: "Трансфер" },
  {
    time: "12:00 – 14:00",
    event: "Welcome-зона",
  },
  { time: "14:00 – 18:00", event: "Банкет, поздравления, официальная часть" },
  {
    time: "18:00 – 19:00",
    event: "Свадебный торт, вкусный чай и теплые объятия",
  },
  { time: "19:00 – 22:00", event: "Музыка, танцы" },
  { time: "23:00", event: "Завершение вечера" },
];

const ScheduleBlock = () => {
  return (
    <FadeInSection>
      <section className="w-full py-10 px-4 bg-pastel1 text-center">
        <h2 className="text-2xl font-playfair mb-6">Тайминг дня</h2>

        <ul className="max-w-xl mx-auto text-left space-y-4 font-playfair text-base md:text-lg">
          {schedule.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col md:flex-row md:justify-between border-b border-gray-300 pb-2"
            >
              <span className="font-semibold text-gray-800">{item.time}</span>
              <span className="text-gray-600 mt-1 md:mt-0">{item.event}</span>
            </li>
          ))}
        </ul>
      </section>
    </FadeInSection>
  );
};

export default ScheduleBlock;
