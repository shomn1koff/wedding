import Header from "./components/Header";
import InvitationText from "./components/InvitationText";
import CalendarBlock from "./components/CalendarBlock";
import MapBlock from "./components/MapBlock";
import CountdownBlock from "./components/CountdownBlock.tsx";
import ScheduleBlock from "./components/ScheduleBlock.tsx";
import SurveyBlock from "./components/SurveyBlock.tsx";
import PhotosBlock from "./components/PhotosBlock.tsx";
import DressCodeBlock from "./components/DressCodeBlock.tsx";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <InvitationText />
      <CalendarBlock />
      <MapBlock />
      <CountdownBlock />
      <ScheduleBlock />
      <SurveyBlock />
      <PhotosBlock />
      <DressCodeBlock />
    </div>
  );
}

export default App;
