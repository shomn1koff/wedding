import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeInSection from "./core/animations/FadeInSection.tsx";

const base = import.meta.env.BASE_URL;
const images = [
  `${base}/img/us/us1.jpg`,
  `${base}/img/us/us3.jpg`,
  `${base}/img/us/us4.jpg`,
  `${base}/img/us/us6.jpg`,
];

const swipeConfidenceThreshold = 10000;
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

const PhotoGallery = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const paginate = (newIndex: number, dir: number) => {
    if (newIndex < 0) newIndex = images.length - 1;
    else if (newIndex >= images.length) newIndex = 0;
    setDirection(dir);
    setModalIndex(newIndex);
  };

  return (
    <FadeInSection>
      <section className="w-full py-10 px-4 bg-pastel2 text-center">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-full aspect-square overflow-hidden rounded-lg shadow cursor-pointer"
              onClick={() => {
                setModalIndex(i);
                setDirection(0);
              }}
            >
              <img
                src={src}
                alt={`Фото ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <AnimatePresence initial={false} custom={direction}>
          {modalIndex !== null && (
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
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
                  alt={`Фото ${modalIndex + 1}`}
                  className="rounded-lg shadow-xl max-h-[90vh] max-w-[90vw] object-contain"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </FadeInSection>
  );
};

export default PhotoGallery;
