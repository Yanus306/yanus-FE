import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    // 토큰이 있으면 유저 정보(이름) 가져옴
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.yanus.bond/api/v1/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (response.ok) {
          const { data } = await response.json();
          setIsLoggedIn(true);
          setUserName(data.name); 
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      } catch (error) {
        console.error('유저 정보 불러오기 실패:', error);
      }
    };

    fetchUser();
  }, []);

  // 로그아웃 로직
  const handleLogout = async () => {
    try {
      await fetch('https://api.yanus.bond/api/v1/auth/logout', { method: 'POST' });
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setIsLoggedIn(false);
      window.location.reload(); // 상태 초기화를 위해 새로고침
    }
  };

  return { isLoggedIn, userName, handleLogout };
};