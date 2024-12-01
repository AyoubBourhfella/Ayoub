import { useState, useEffect } from 'react';

const useDecodeAnimation = (text, revealSpeed = 50, delay = 0) => {
    const [displayText, setDisplayText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789___+-=/&*()[]{}|;:,.<>?';

   

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            revealText();
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [text, revealSpeed, delay]);

    return [displayText, revealText];
};

export default useDecodeAnimation;
