import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const base = import.meta.env.BASE_URL;
const images = [`${base}img/venue1.jpg`, `${base}img/venue2.jpg`];

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const VenueCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 8,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const paginate = (newIndex: number, dir: number) => {
    if (newIndex < 0) newIndex = images.length - 1;
    else if (newIndex >= images.length) newIndex = 0;
    setDirection(dir);
    setModalIndex(newIndex);
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div
        ref={sliderRef}
        className="keen-slider rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((src, index) => (
          <div key={index} className="keen-slider__slide">
            <img
              src={src}
              alt={`Venue ${index + 1}`}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => {
                setModalIndex(index);
                setDirection(0);
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
      >
        ◀
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
      >
        ▶
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        {modalIndex !== null && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalIndex(null)}
          >
            <motion.div
              key={modalIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(modalIndex + 1, 1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(modalIndex - 1, -1);
                }
              }}
            >
              <button
                onClick={() => setModalIndex(null)}
                className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-2xl rounded-full w-8 h-8 flex items-center justify-center z-10"
              >
                ×
              </button>

              <img
                src={images[modalIndex]}
                alt={`Venue ${modalIndex + 1}`}
                className="rounded-lg shadow-xl max-h-[90vh] max-w-[90vw] object-contain"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VenueCarousel;
