import { useMemo } from "react";

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const CalendarBlock = () => {
  const year = 2025;
  const month = 7; // август
  const weddingDay = 5;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const startIndex = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  const calendarDays = useMemo(() => {
    const daysArray = Array(startIndex).fill(null);
    for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);
    return daysArray;
  }, [startIndex, daysInMonth]);

  return (
    <section className="w-full py-10 px-4 bg-pastel3 text-center">
      <h2 className="text-2xl font-medium font-playfair mb-6">Август 2025</h2>

      <div className="max-w-md mx-auto p-4 rounded-lg bg-pastel2 shadow-md">
        <div className="grid grid-cols-7 gap-1 text-sm font-semibold text-gray-600">
          {WEEK_DAYS.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mt-2">
          {calendarDays.map((day, idx) => {
            if (day === null) return <div key={`empty-${idx}`} />;

            const isWeddingDay = day === weddingDay;

            return (
              <div
                key={`day-${idx}-${day}`}
                className={
                  "py-2 rounded " +
                  (isWeddingDay
                    ? "bg-pastel1 font-semibold text-pink-700 shadow-inner"
                    : "hover:bg-pastel3 text-gray-800")
                }
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CalendarBlock;
