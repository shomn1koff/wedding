import Header from "./components/Header";
import InvitationText from "./components/InvitationText";
import CalendarBlock from "./components/CalendarBlock";
import MapBlock from "./components/MapBlock";
import CountdownBlock from "./components/CountdownBlock.tsx";
import ScheduleBlock from "./components/ScheduleBlock.tsx";
import SurveyBlock from "./components/SurveyBlock.tsx";
import PhotosBlock from "./components/PhotosBlock.tsx";
import DressCodeBlock from "./components/DressCodeBlock.tsx";
import TelegramQRBlock from "./components/TelegramQRBlock.tsx";
import VenueBlock from "./components/VenueBlock.tsx";
import AgeBlock from "./components/AgeBlock.tsx";
import PhotoGallery from "./components/PhotoGallery.tsx";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <PhotoGallery />
      <InvitationText />
      <CalendarBlock />
      <MapBlock />
      <VenueBlock />
      <CountdownBlock />
      <ScheduleBlock />
      <SurveyBlock />
      <PhotosBlock />
      <AgeBlock />
      <DressCodeBlock />
      <TelegramQRBlock />
    </div>
  );
}

export default App;
