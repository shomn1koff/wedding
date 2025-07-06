import { QRCodeSVG } from "qrcode.react";
import FadeInSection from "./core/animations/FadeInSection.tsx";

const TELEGRAM_LINK = "https://t.me/+AVbe5MgIOnEwMTJi";

const TelegramQRBlock = () => (
  <FadeInSection className="bg-pastel3 py-12 px-4 text-center">
    <h2 className="text-2xl font-playfair mb-4">
      Присоединяйтесь к нашему Telegram каналу
    </h2>
    <p className="mb-6 font-playfair text-gray-700 max-w-xl mx-auto">
      Здесь вы сможете получать важные новости и делиться фото с мероприятия.
    </p>
    <div className="flex justify-center mb-6">
      <QRCodeSVG
        value={TELEGRAM_LINK}
        size={150}
        bgColor="transparent"
        fgColor="#4A5568"
      />
    </div>
    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-white text-pink-600 hover:bg-pink-100 transition px-6 py-3 rounded-full font-semibold shadow-md"
    >
      Перейти в Telegram
    </a>
  </FadeInSection>
);

export default TelegramQRBlock;
