import React, { useEffect, useState } from "react";

// Starter code from: https://designcode.io/react-hooks-handbook-usescrollposition-hook

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollPosition;
}

export default useScrollPosition;