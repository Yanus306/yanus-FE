import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setEmailError('');
    setPasswordError('');
    setErrorMessage(''); 

    let isValid = true;
    
    if (!email) {
      setEmailError('이메일을 입력해주세요.');
      isValid = false;
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      console.log('서버로 데이터 전송:', { email, password });
      // API 통신 로직
    } catch (error) {
      setErrorMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    emailError, passwordError, errorMessage,
    handleSubmit
  };
};