import { useVisualSlider } from "../model/useVisualSlider";
import "./visualSection.css";

// 임시
import yanus1 from "../../../../assets/yanus1.jpg";
import pictureLogo from "../../../../assets/pictureLogo.png";

const images = [yanus1, pictureLogo, pictureLogo];

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