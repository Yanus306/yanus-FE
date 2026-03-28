import "./professorSection.css";
import Divider from "../../../../shared/ui/divider.jsx";

const experienceData = [
    { year: "2023년~현재", content: "Associate Editor (Journal of information Security and Applications, Elsevier/SCIE" },
    { year: "2023년~현재", content: "Guest Editor (Computer, Materials & Continua(CMC), Discover Computing, Journal of Eletronic Imaging/SCIE)" },
    { year: "2022년~현재", content: "국립안동대학교 소프트웨어융합학과 교수" },
    { year: "2021년~현재", content: "Guest Editor (Symmetry, Mathematics, Applied Sciences, MDPI/SCIE)" },
    { year: "2021년~현재", content: "Topic Editor (Applied Sciences, Symmetry, MDPI/SCIE)" },
    { year: "2022년~2023년", content: "대구경북사이버보안연구회 초대회장" },
    { year: "2015년~2022년", content: "경일대학교 사이버보안학과 교수" },
    { year: "2003년~2015년", content: "영진전문대학 컴퓨터정보계열 교수" },
    { year: "1997년~2003년", content: "국방과학연구소 선임연구원" },
];

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
                    <div className="professor-header">
                        <span className="professor-name">정 기 현</span>
                        <span className="professor-position">학부장 / 전공주임</span>
                    </div>
                    <div className="professor-info-list">
                        {[
                            ["전공분야", "컴퓨터공학/정보보호"],
                            ["연구실", "공대2호관 325"],
                            ["담당과목", "프로그래밍, 정보보안, 블록체인"],
                            ["전화", "054-820-7968"],
                            ["이메일", "kingjung@gnu.ac.kr"],
                        ].map(([label, value]) => (
                            <div className="professor-info-item" key={label}>
                                <span className="info-label">{label}</span>
                                <span className="info-value">{value}</span>
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