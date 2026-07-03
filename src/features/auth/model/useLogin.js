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
      /* 백엔드 생성 시 주석 해제
      // API 통신 로직
      const response = await fetch('/api/v1/auth/login', {
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
      */

      // --- 임시 로직 시작 ---
      // 실제 통신처럼 1초 대기
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 가짜 토큰 데이터 생성
      const mockAccessToken = "mock_access_token_12345";
      const mockRefreshToken = "mock_refresh_token_67890";
      const mockTokenType = "Bearer";

      // 로컬 스토리지에 가짜 토큰 저장 (스웨거 명세 흐름 모방)
      localStorage.setItem('accessToken', mockAccessToken);
      localStorage.setItem('refreshToken', mockRefreshToken);
      
      console.log('로그인 성공 (가짜 응답):', mockTokenType, mockAccessToken);
      alert("로그인 성공! (임시 가짜 응답)");
      // --------------------

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