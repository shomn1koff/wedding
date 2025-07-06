import FadeInSection from "./core/animations/FadeInSection.tsx";

const PhotosBlock = () => {
  return (
    <FadeInSection>
      <section className="w-full py-10 px-4 bg-pastel3 text-center">
        <h2 className="text-2xl font-playfair mb-4">
          Фотографии с мероприятия
        </h2>
        <p className="mb-6 font-playfair text-gray-700">
          Здесь будут фото с мероприятия!
        </p>
        <button
          disabled
          className="inline-block bg-white text-gray-400 px-6 py-3 rounded-full font-semibold shadow-md cursor-not-allowed opacity-70"
          style={{ pointerEvents: "none" }}
        >
          Перейти к фото
        </button>
      </section>
    </FadeInSection>
  );
};

export default PhotosBlock;
