import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
    const elementRefs = useRef([]);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 화면에 들어오면 클래스 추가
                    entry.target.classList.add('is-visible');
                } else {
                    // 화면 밖으로 나가면 클래스 제거
                    entry.target.classList.remove('is-visible');
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px', 
            threshold: 0.3 
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // ref 배열에 담긴 모든 DOM 요소 관찰 시작
        elementRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        // 컴포넌트 언마운트 시 관찰 해제
        return () => observer.disconnect();
    }, []);

    return elementRefs;
};