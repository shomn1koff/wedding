const schedule = [
  { time: "09:40 – 11:00", event: "ЗАГС и фотосессия" },
  { time: "11:00 – 12:00", event: "Трансфер гостей до локации" },
  {
    time: "12:00 – 13:00",
    event: "Welcome-зона: шампанское, закуски, общение",
  },
  { time: "13:00 – 14:30", event: "Торжественная церемония и поздравления" },
  { time: "14:30 – 18:00", event: "Праздничный ужин, музыка, танцы" },
  { time: "18:00 – 21:00", event: "Игры, активности и фотозона" },
  { time: "21:00 – 23:00", event: "Финальный торт, фаер-шоу, объятия" },
  { time: "23:00", event: "Завершение вечера" },
];

const ScheduleBlock = () => {
  return (
    <section className="w-full py-10 px-4 bg-pastel4 text-center">
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
  );
};

export default ScheduleBlock;
