import { AuthWidget } from '../../widgets/auth/authWidget';
import { RegisterForm } from '../../features/auth/ui/registerForm';

const Register = () => {
  return (
    <AuthWidget title="회원가입" bottomText="계정이 이미 있으신가요?" bottomLink="로그인">
      <RegisterForm />
    </AuthWidget>
  );
};

export default Register;