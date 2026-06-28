import { useState } from 'react';

export const useRegister = () => {
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
    const [errorMessage, setErrorMessage] = useState(''); // 서버 통신 등 전체 에러용

    // 유효성 검사 함수
    const validateForm = () => {
        let isValid = true;

        // 에러 초기화
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setPasswordConfirmError('');
        setErrorMessage('');

        // 1. 이름 검사 (비어있는지)
        if (!name.trim()) {
            setNameError('이름을 입력해주세요.');
            isValid = false;
        }

        // 2. 이메일 검사
        if (!email.trim()) {
            setEmailError('이메일을 입력해주세요.');
            isValid = false;
        }

        // 3. 비밀번호 검사
        if (!password) {
            setPasswordError('비밀번호를 입력해주세요.');
            isValid = false;
        }

        // 4. 비밀번호 확인 검사 (일치하는지)
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
            // TODO: 실제 서버로 회원가입 API 보내는 로직을 여기에 작성해!
            console.log("서버로 보낼 데이터:", { name, email, password });
            
            // 예시: await axios.post('/api/register', { name, email, password });
            
            alert("회원가입 버튼 클릭됨! (API 연결 필요)");
        } catch (error) {
            setErrorMessage('회원가입 처리 중 오류가 발생했습니다.');
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