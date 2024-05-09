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
            body.classList.add('dark-theme'); // chama a class estilizada
            body.classList.remove('light-theme'); // chama a class estilizada
        } else {
            body.classList.add('light-theme'); // remove a class estilizada
            body.classList.remove('dark-theme'); // remove a class estilizada
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