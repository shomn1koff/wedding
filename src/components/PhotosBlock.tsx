const PhotosBlock = () => {
  return (
    <section className="w-full py-10 px-4 bg-pastel3 text-center">
      <h2 className="text-2xl font-playfair mb-4">Фотографии с мероприятия</h2>
      <p className="mb-6 font-playfair text-gray-700">
        Загружайте сюда ваши фото или скачивайте фотографии с нашей свадьбы.
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
  );
};

export default PhotosBlock;
