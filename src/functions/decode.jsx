const revealText = (text) => {
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

export default revealText;