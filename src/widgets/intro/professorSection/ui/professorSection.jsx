import "./professorSection.css";
import Divider from "../../../../shared/ui/divider.jsx";
import { professorInfo, experienceData } from "../../../../shared/datas/professorData.js";
import ProfessorImg from "/src/assets/professorImg.png";

const ProfessorSection = () => {
    return (
        <div className="professor-section">
            <Divider />
            <div className="professor-title">교수님 소개</div>
            
            {/* 상단 프로필 영역 */}
            <div className="professor-upper-container">
                <div className="professor-upper-box">
                    <div className="professor-img-wrapper">
                        <img src={ProfessorImg} alt="" className="professor-img"></img>
                    </div>
                    
                    <div className="professor-profileBox">
                        <div className="professor-info-header">
                            <span className="professor-name">{professorInfo.name}</span>
                            <span className="professor-position">{professorInfo.position}</span>
                        </div>
                        <div className="professor-info-list">
                            {professorInfo.details.map((item) => (
                                <div className="professor-info-item" key={item.label}>
                                    <span className="info-label">{item.label}</span>
                                    <span className="info-value">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="professor-lower-box">
                    <span className="professor-quote">"국립경국대학교 소프트웨어융합학과에서 정보보호를 공부하는 학생들이 대박나기를, </span>
                    <span className="professor-quote">경북을 넘어 세계에서 우뚝 서기를 응원합니다."</span>
                </div>
            </div>

            {/* 하단 경력사항 영역 */}
            <div className="professor-lower-container">
                <h3 className="experience-title">경력사항</h3>
                <table className="experience-table">
                    <thead>
                        <tr>
                            <th className="th-year">연도</th>
                            <th className="th-content">내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experienceData.map((item, idx) => (
                            <tr key={idx}>
                                <td className="td-year">{item.year}</td>
                                <td className="td-content">{item.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfessorSection;