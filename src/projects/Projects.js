import React from 'react';
import {Project} from "./project/Project";
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Project title="To do list" description="BlaBlaBla1"/>
                <Project title="Social Network" description="BlaBlaBla2"/>
                <Project title="Cards" description="BlaBlaBla3"/>
                <Project title="Nominations" description="BlaBlaBla4"/>
                <Project title="Roots" description="BlaBlaBla5"/>
            </div>
        </div>
    );
};