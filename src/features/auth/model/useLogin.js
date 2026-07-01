import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

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
      const response = await fetch('https://api.yanus.bond/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || '로그인 요청에 실패했습니다.');
      }

      if (result.data) {
        const { accessToken, refreshToken, tokenType } = result.data;
        
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        
        console.log('로그인 성공:', tokenType, accessToken);
        
        navigate('/');
      }


    } catch (error) {
      console.error('로그인 에러:', error);
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