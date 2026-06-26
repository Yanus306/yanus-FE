import { useLogin } from '../model/useLogin';
import './authForm.css';

export const LoginForm = () => {
  const { 
    email, setEmail, 
    password, setPassword, 
    emailError, passwordError, errorMessage, 
    handleSubmit 
  } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="auth_form_container">
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
      
      <button type="submit" className="auth_btn">
        로그인
      </button>

      <div className="auth_error" style={{ visibility: errorMessage ? 'visible' : 'hidden'}}>
        {errorMessage}
      </div>
    </form>
  );
};