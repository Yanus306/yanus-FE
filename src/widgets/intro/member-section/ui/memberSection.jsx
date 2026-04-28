import "./memberSection.css";
import Divider from "../../../../shared/ui/divider.jsx";
import YanusGif from "/src/assets/yanus.gif";
import { useState } from "react";
import { MEMBER_DATA } from "/src/shared/datas/memberData.js";

const MemberSection = () => {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <div className="member-section">
            <Divider />

            <div className="member-title">멤버 소개</div>

            <div className="member-box">
                <div className={`member-tabs ${activeTab ? "active" : ""}`}>
                    {activeTab ? (
                        <table className="member-table">
                            <thead>
                                <tr>
                                    <th>기수</th>
                                    <th>이름</th>
                                    <th></th>
                                    <th>분야</th>
                                    <th>비고?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MEMBER_DATA[activeTab].map((member, index) => (
                                    <tr key={index}>
                                        <td>{member.gen}</td>
                                        <td>{member.name}</td>
                                        <td>{member.role}</td>
                                        <td>{member.field}</td>
                                        <td>{member.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <img src={YanusGif} alt="Intro" className="member-gif" />
                    )}
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