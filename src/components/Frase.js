import React from 'react';
import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.containerFrase}>
            <p className={styles.titleFrase}>
                Este é o meu componente com uma frase!
            </p>
        </div>
    );
}

export default Frase;