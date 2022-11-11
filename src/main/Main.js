import React from 'react';
import style from "./Main.module.css"

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.welcomeText}>
                <p>Welcome</p>
                <h2>
                    <span className="typed">I'm Yury Ihnatsyeu</span>
                    <span className="typed-cursor">|</span>
                </h2>
                <a>Hire me</a>
            </div>


        </div>
    );
}