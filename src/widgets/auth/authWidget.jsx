import { useNavigate } from "react-router-dom";
import "./authWidget.css";
import TextLogo from "/src/assets/TextLogo.png";

export const AuthWidget = ({ title, bottomText, bottomLink, children }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    if (bottomLink === "로그인") {
      navigate("/login");
    } else if (bottomLink === "회원가입") {
      navigate("/register");
    }
  };

  return (
    <div className="auth_page">
      <div className="auth_box">
        <img src={TextLogo} alt="글자 로고" className="auth_logo" />
        <div className="auth_container">
          {children}
        </div>
        
        <div className="auth_bottom">
          <p>{bottomText}</p>
          <p 
            className="auth_link_text" 
            onClick={handleLinkClick}
            style={{ cursor: "pointer" }} 
          >
            {bottomLink}
          </p>
        </div>
      </div>
    </div>
  );
}