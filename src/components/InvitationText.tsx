import FadeInSection from "./core/animations/FadeInSection.tsx";

const InvitationText = () => {
  return (
    <FadeInSection>
      <section className="w-full py-10 bg-pastel2 px-6 text-center">
        <p className="text-lg md:text-xl font-light font-playfair text-gray-800 leading-relaxed tracking-wide max-w-3xl mx-auto">
          Дорогие друзья! Мы рады пригласить вас разделить с нами самый важный
          день в нашей жизни — нашу свадьбу. Будем счастливы видеть каждого из
          вас рядом 5 августа 2025 года!
        </p>
      </section>
    </FadeInSection>
  );
};

export default InvitationText;
