const SurveyBlock = () => {
  return (
    <section className="w-full py-10 px-4 bg-pastel2 text-center">
      <h2 className="text-2xl font-playfair mb-4">
        Расскажите нам немного о себе 😊
      </h2>
      <p className="text-base font-playfair mb-6 text-gray-700">
        Пожалуйста, заполните короткую форму: подтвердите участие, расскажите,
        что предпочитаете пить и оставьте свои пожелания!
      </p>

      <a
        href="https://docs.google.com/forms/d/e/ВАШ_ID/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-pink-600 hover:bg-pink-100 transition px-6 py-3 rounded-full font-semibold shadow-md"
      >
        Перейти к анкете
      </a>
    </section>
  );
};

export default SurveyBlock;
