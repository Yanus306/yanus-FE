import Header from '../../widgets/layout/ui/header/header.jsx';
import VisualSection from '../../widgets/intro/visual-section/ui/visualSection.jsx';
import VisionSection from '../../widgets/intro/vision-section/ui/visionSection.jsx';
import HistorySection from '../../widgets/intro/historySection/ui/historySection.jsx';
import ProfessorSection from '../../widgets/intro/professorSection/ui/professorSection.jsx';

function Intro() {
  return (
    <>
      <Header />
      <VisualSection />
      <VisionSection />
      <HistorySection />
      <ProfessorSection />
    </>
  )
}

export default Intro