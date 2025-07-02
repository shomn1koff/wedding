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
        <a
          href="https://example.com/your-photo-folder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-600 hover:bg-pink-100 transition px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Перейти к фото
        </a>
      </section>
    </FadeInSection>
  );
};

export default PhotosBlock;
