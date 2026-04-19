import "../footer/footer.css";
import Divider from "../../../../shared/ui/divider.jsx";

const Footer = () => (
    <div className="footer-section">
        <Divider />
        <div className="footer-textBox">
            <div className="footer-textGroup">
                <div className="footer-copyright">
                    <div className="footer-text">ⓒ</div>
                    <div className="footer-text">2026</div>
                    <div className="footer-text">yANUs(보안셀)</div>
                </div>
                <div className="footer-text">국립경국대학교 소프트웨어융합학과</div>
            </div>
            <div className="footer-textGroup">
                <div className="footer-text">이메일: yanus306@gmail.com</div>
            </div>
        </div>
    </div>
);

export default Footer