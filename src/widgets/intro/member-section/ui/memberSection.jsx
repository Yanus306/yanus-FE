import "./memberSection.css";
import Divider from "../../../../shared/ui/divider.jsx";
import YanusGif from "/src/assets/yanus.gif";
import { useState } from "react";
import { MEMBER_DATA } from "/src/shared/datas/memberData.js";

const MemberSection = () => {
    const [activeTab, setActiveTab] = useState("1기");

    return (
        <div className="member-section">
            <Divider />

            <div className="member-title">멤버 소개</div>

            <div className="member-box">
                <div className="member-tabs">
                    <img src={YanusGif} alt="" className="member-gif" />
                </div>
                
                <div className="member-mark-box">
                    {Object.keys(MEMBER_DATA).map((gen) => (
                        <div 
                            key={gen} 
                            className={`member-bookmark ${activeTab === gen ? "active" : ""}`}
                            onClick={() => setActiveTab(gen)}
                        >
                            {gen}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberSection;