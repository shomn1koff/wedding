import FadeInSection from "./core/animations/FadeInSection.tsx";

const DressCodeBlock = () => {
  return (
    <FadeInSection>
      <section className="w-full py-10 px-4 bg-pastel2 text-center">
        <h2 className="text-2xl font-playfair mb-4">Дресс-код</h2>
        <p className="font-playfair text-gray-700 max-w-xl mx-auto">
          Мы рады видеть вас в любой удобной и комфортной одежде. Дресс-код
          отсутствует — приходите как вам нравится!
        </p>
      </section>
    </FadeInSection>
  );
};

export default DressCodeBlock;
