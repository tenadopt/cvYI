import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.slillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Blablablabla1"}/>
                    <Skill title={"CSS"} description={"Blablablabla2"}/>
                    <Skill title={"React"} description={"Blablablabla3"}/>
                    <Skill title={"Redux"} description={"Blablablabla4"}/>
                    <Skill title={"TypeScript"} description={"Blablablabla5"}/>
                </div>
            </div>

        </div>
    );
};