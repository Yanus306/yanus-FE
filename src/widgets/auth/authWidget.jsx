import "./authWidget.css";
import TextLogo from "/src/assets/TextLogo.png";

export const AuthWidget = ({ title, bottomText, bottomLink, children }) => {
  return (
    <div className="auth_page">
      <div className="auth_box">
        <img src={TextLogo} alt="글자 로고" className="auth_logo"></img>
        <div className="auth_container">
          {children}
        </div>
        
        <div className="auth_bottom">
          <p>{bottomText}</p>
          <p className="auth_link_text">{bottomLink}</p>
        </div>
      </div>
    </div>
  );
};