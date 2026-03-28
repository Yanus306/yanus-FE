import "./visionSection.css";
import Divider from "../../../../shared/ui/divider.jsx";
import PictureLogo from "../../../../assets/pictureLogo.png";

const VisionSection = () => {
  return (
    <div className="vision-section">
        <Divider />

        <div className="vision-wholeBox">
            <img src={PictureLogo} alt="" className="vision-logo"></img>
            <div className="vision-textBox">
                <div className="vision-title">“기술로 세상을 안전하게 만드는 사람들”</div>
            <div className="vision-text">실무 중심의 기술력과 협업 능력을 성장시키는 학술 연구 동아리</div>
            </div>
        </div>

        <Divider />
    </div>
  );
};

export default VisionSection;