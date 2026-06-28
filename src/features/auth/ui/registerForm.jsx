import './authForm.css';
import { useRegister } from '../model/useRegister';

export const RegisterForm = () => {
    const {
        name, setName,
        email, setEmail,
        password, setPassword,
        passwordConfirm, setPasswordConfirm,
        nameError, emailError, passwordError, passwordConfirmError, errorMessage,
        handleSubmit
    } = useRegister();

    return (
        <form className="auth_form_container" onSubmit={handleSubmit}>
            {/* 이름 입력 */}
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth_input"
            />
            <div className="auth_error" style={{ visibility: nameError ? 'visible' : 'hidden' }}>
                {nameError}
            </div>

            {/* 이메일 입력 */}
            <input
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth_input"
            />
            <div className="auth_error" style={{ visibility: emailError ? 'visible' : 'hidden' }}>
                {emailError}
            </div>

            {/* 비밀번호 입력 */}
            <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth_input"
            />
            <div className="auth_error" style={{ visibility: passwordError ? 'visible' : 'hidden' }}>
                {passwordError}
            </div>

            {/* 비밀번호 확인 입력 */}
            <input
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="auth_input"
            />
            <div className="auth_error" style={{ visibility: passwordConfirmError ? 'visible' : 'hidden' }}>
                {passwordConfirmError}
            </div>

            {/* 회원가입 버튼 */}
            <button type="submit" className="auth_btn">
                회원가입
            </button>

            {/* 폼 전송 에러 (서버 에러 등) */}
            <div className="auth_error" style={{ visibility: errorMessage ? 'visible' : 'hidden' }}>
                {errorMessage}
            </div>
        </form>
    );
};