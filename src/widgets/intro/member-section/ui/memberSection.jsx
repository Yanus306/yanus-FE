import "./memberSection.css";
import Divider from "../../../../shared/ui/divider.jsx";
import YanusGif from "/src/assets/yanus.gif";

const MemberSection = () => {

    return (
        <div className="member-section">
            <Divider />

            <div className="member-title">멤버 소개</div>

            <div className="member-box">
                <div className="member-tabs">
                    <img src={YanusGif} alt="" className="member-gif"></img>
                </div>
                
                <div className="member-mark-box">
                    <div className="member-bookmark">1기</div>
                </div>
            </div>
        </div>
    );
};

export default MemberSection;