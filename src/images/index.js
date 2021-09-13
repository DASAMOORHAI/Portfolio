import open from './Sidebar.png';
import close from './SidebarClose.png';
import globe from './GlobeIcon.png';
import JavaScript from './JavaScript.png';
import React from './ReactLogo.png';
import Redux from './Resux.png';
import CSS from './CSS3Logo.png';
import Sequelize from './Sequelize.png';
import PostgreSQL from './PostgreSQL.png';
import ExpressJS from './ExpressLogo.png';
import git from './git.png';
import TypeScript from './TypescriptLogo.png';
import NodeJS from './NodeJSLogo.png';
import gmail from './Gmail.png';
import linkedin from './LinkedIn.png';
import github from './GitHub.png';
import ecom from './EcommerceImg.png';
import poke from './PokeAppImg.png';
import aboutES from './TitleSobreMi.png';
import aboutEN from './TitleAboutMe.png';
import skillsES from './TitleHabilidades.png';
import skillsEN from './TitleSkills.png';
import projectsES from './TitleProyectos.png';
import projectsEN from './TitleProjects.png';
import contactES from './TitleContactame.png';
import contactEN from './TitleContactMe.png';

export default {
    sidebar: {
        cell: {
            open,
            close
        },
        desk: {
            es: {
                about: aboutES,
                skills: skillsES,
                projects: projectsES,
                contact: contactES
            },
            en: {
                about: aboutEN,
                skills: skillsEN,
                projects: projectsEN,
                contact: contactEN
            },
        }
    },
    page: {
        globe
    },
    skills: {
        JavaScript,
        React,
        Redux,
        CSS,
        TypeScript,
        Sequelize,
        PostgreSQL,
        ExpressJS,
        NodeJS,
        git
    },
    projects: {
        ecom,
        poke
    },
    contact: {
        gmail,
        linkedin,
        github
    }
}