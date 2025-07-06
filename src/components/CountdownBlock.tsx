import { useEffect, useState } from "react";
import FadeInSection from "./core/animations/FadeInSection.tsx";

const getTimeRemaining = () => {
  const now = new Date();
  const target = new Date("2025-08-05T09:40:00");

  const total = target.getTime() - now.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

const CountdownBlock = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <FadeInSection>
      <section className="w-full py-10 px-4 bg-pastel3 text-center">
        <h2 className="text-2xl font-playfair mb-4">До свадьбы осталось</h2>
        {timeLeft.total > 0 ? (
          <div className="flex justify-center gap-4 text-xl font-light font-playfair">
            <div>
              <span className="block text-3xl font-semibold">
                {timeLeft.days}
              </span>
              <span>дней</span>
            </div>
            <div>
              <span className="block text-3xl font-semibold">
                {timeLeft.hours}
              </span>
              <span>часов</span>
            </div>
            <div>
              <span className="block text-3xl font-semibold">
                {timeLeft.minutes}
              </span>
              <span>минут</span>
            </div>
            <div>
              <span className="block text-3xl font-semibold">
                {timeLeft.seconds}
              </span>
              <span>секунд</span>
            </div>
          </div>
        ) : (
          <p className="text-xl font-light font-playfair">
            Свадьба уже началась!
          </p>
        )}
      </section>
    </FadeInSection>
  );
};

export default CountdownBlock;
