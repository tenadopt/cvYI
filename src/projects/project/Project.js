import React from 'react';
import style from '../project/Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};