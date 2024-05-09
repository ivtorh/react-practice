import React, { useState, useEffect } from "react";
import './ToggleTheme.css';


function ToggleTheme() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    useEffect(() => {
        const body = document.querySelector('body'); // pego o elemento 'body' através do DOM

        if (isDarkTheme) {
            body.classList.add('dark-theme'); // chama o elemento escuro
            body.classList.remove('light-theme'); // remove o tema claro
        } else {
            body.classList.add('light-theme'); // chama o elemento claro
            body.classList.remove('dark-theme'); // remove o elemento escuro
        }   
    }, [isDarkTheme]);

    const theme = isDarkTheme ? 'Dark' : 'Light';

    return (
        <div>
            <h1>{theme} Theme</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ToggleTheme;
