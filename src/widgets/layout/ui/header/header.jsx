import "../header/header.css";
import TextLogo from "/src/assets/textLogo.png";
import { useAuth } from "../../../../features/auth/model/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, userName, handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="header-section">
      <img src={TextLogo} alt="글자 로고" className="header-textlogo" />

      <div className="header-navBox">
        <div className="header-nav">프로젝트</div>
        <div className="header-nav">갤러리</div>
        
        {isLoggedIn ? (
          <>
            <div 
                className="header-nav"
                onClick={() => window.location.href = 'https://yanus.bond/login'}
            >
                출근부
            </div>
            
            <div className="header-nav header-user-wrapper">
              {userName}님
              
              <div className="header-dropdown">
                <div onClick={handleLogout} className="header-dropdown-item">
                  로그아웃
                </div>
              </div>
            </div>
          </>
        ) : (
          <div 
            className="header-nav" 
            onClick={() => navigate('/login')} 
          >
            로그인
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;