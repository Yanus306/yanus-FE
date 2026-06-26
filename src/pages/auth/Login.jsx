import { AuthWidget } from '../../widgets/auth/authWidget';
import { LoginForm } from '../../features/auth/ui/loginForm';

const Login = () => {
  return (
    <AuthWidget title="로그인" bottomText="계정이 없으신가요?" bottomLink="회원가입">
      <LoginForm />
    </AuthWidget>
  );
};

export default Login;