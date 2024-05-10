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
            body.classList.add('dark-theme'); // adiciona a classe 'dark-theme'
            body.classList.remove('light-theme'); // remove a classe 'light-theme'
        } else {
            body.classList.add('light-theme'); // adiciona a classe 'light-theme'
            body.classList.remove('dark-theme'); // remove a classe 'dark-theme'
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
