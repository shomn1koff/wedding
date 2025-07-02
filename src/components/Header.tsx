import FadeInSection from "./core/animations/FadeInSection.tsx";

const Header = () => {
  return (
    <FadeInSection>
      <section className="w-full py-12 bg-pastel1 text-center">
        <h1 className="text-4xl md:text-5xl font-light font-playfair tracking-wide leading-snug">
          Свадьба Алексей и Алена
        </h1>
        <p className="text-lg md:text-xl mt-2 font-light font-playfair text-gray-700">
          5 августа 2025
        </p>
      </section>
    </FadeInSection>
  );
};

export default Header;
