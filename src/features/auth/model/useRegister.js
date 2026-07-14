import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
    const navigate = useNavigate();

    // 폼 상태
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // 에러 상태
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // 유효성 검사 함수
    const validateForm = () => {
        let isValid = true;

        // 에러 초기화
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setPasswordConfirmError('');
        setErrorMessage('');

        // 이름 검사 (비어있는지)
        if (!name.trim()) {
            setNameError('이름을 입력해주세요.');
            isValid = false;
        }

        // 이메일 검사
        if (!email.trim()) {
            setEmailError('이메일을 입력해주세요.');
            isValid = false;
        }

        // 비밀번호 검사
        if (!password) {
            setPasswordError('비밀번호를 입력해주세요.');
            isValid = false;
        }

        // 비밀번호 확인 검사 (일치하는지)
        if (password !== passwordConfirm) {
            setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 페이지 새로고침 방지

        // 유효성 검사 통과 못하면 여기서 스톱
        if (!validateForm()) return;

        try {
            console.log("서버로 보낼 데이터:", { name, email, password });

            // API 통신 로직
            const response = await fetch('https://api.yanus.bond/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    password
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || '회원가입 요청에 실패했습니다.');
            }


            alert("회원가입이 완료되었습니다!");
            
            navigate('/login');
            
        } catch (error) {
            console.error('회원가입 에러:', error);
            setErrorMessage(error.message || '회원가입 처리 중 오류가 발생했습니다.');
        }
    };

    return {
        name, setName,
        email, setEmail,
        password, setPassword,
        passwordConfirm, setPasswordConfirm,
        nameError, emailError, passwordError, passwordConfirmError, errorMessage,
        handleSubmit
    };
};