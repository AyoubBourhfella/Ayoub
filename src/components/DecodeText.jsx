import { useState, useEffect } from 'react';

const DecodeText = ({ text,  revealSpeed = 50, delay = 0, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789___+-=/&*()[]{}|;:,.<>?';

    const revealText = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(text.split("").map((letter, index) => {
                if (index < iteration) {
                    return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));

            if (iteration >= text.length) {
                clearInterval(interval);
            }
            iteration += 1 / 5;
        }, revealSpeed);

        return () => clearInterval(interval);
    };
    useEffect(() => {

        const timeoutId = setTimeout(() => {
            revealText();
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [text, revealSpeed, delay]);

    return (
        <span className={className} onMouseOver={revealText}>{displayText}</span>
    );
};

export default DecodeText;
