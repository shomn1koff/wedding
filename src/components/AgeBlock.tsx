import FadeInSection from "./core/animations/FadeInSection.tsx";

const AgeBlock = () => {
  return (
    <FadeInSection>
      <section className="w-full py-10 px-4 bg-pastel1 text-center">
        <h2 className="text-2xl font-playfair mb-4">Возраст гостей 0+</h2>
        <p className="font-playfair text-gray-700 max-w-xl mx-auto">
          Мы рады видеть самых маленьких гостей. Приходите с детьми!
        </p>
      </section>
    </FadeInSection>
  );
};

export default AgeBlock;
