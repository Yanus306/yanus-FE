import "../header/header.css";
import TextLogo from "/src/assets/textLogo.png";

const Header = () => (
    <div className="header-section">
        <img src={TextLogo} alt="글자 로고" className="header-textlogo"></img>

        <div className="header-navBox">
            <div className="header-nav">
                프로젝트
            </div>
            <div className="header-nav">
                갤러리
            </div>
            <div className="header-nav">
                로그인
            </div>
        </div>
    </div>
);

export default Header