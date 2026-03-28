import "./professorSection.css";
import Divider from "../../../../shared/ui/divider.jsx";
import { professorInfo, experienceData } from "../../../../shared/datas/professorData.js";

const ProfessorSection = () => {
    return (
        <div className="professor-section">
            <Divider />
            <div className="professor-title">교수님 소개</div>
            
            {/* 상단 프로필 영역 */}
            <div className="professor-upper-container">
                <div className="professor-img-wrapper">
                    <div className="professor-img"></div>
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