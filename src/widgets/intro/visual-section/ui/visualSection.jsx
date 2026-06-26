import { useVisualSlider } from "../model/useVisualSlider";
import "./visualSection.css";

// 임시
import yanus1 from "../../../../assets/yanus1.jpg";
import TempPicture1 from "../../../../assets/tempPicture1.jpg";
import TempPicture2 from "../../../../assets/tempPicture2.jpg";

const images = [yanus1, TempPicture1, TempPicture2];

const VisualSection = () => {
  const { currentIndex } = useVisualSlider(images.length);

  return (
    <div className="visual-section">
      <div 
        className="visual-slider" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgUrl, i) => (
          <div key={i} className="visual-slider-picture">
            <img src={imgUrl} alt={`visual-${i}`} />
          </div>
        ))}
      </div>

      <div className="visual-overlay">
        <div className="visual-overlay-content">
          <div className="visual-overlay-text">국립경국대학교 소프트웨어융합학과 보안셀</div>
          <div className="visual-overlay-title">yANUs</div>
        </div>
      </div>
    </div>
  );
};

export default VisualSection;