import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import FileSaver from 'file-saver';

const HomeSkullgirls = () => {
    let { lang } = useParams();
    let history = useHistory();

    if(lang !== 'en' && lang !== 'es') {
        history.push('/')
    }

    function handleDownload() {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + `/resource/Javier_Iñaki_Carro_CV_${lang}.pdf`,
            `Javier Iñaki Carro - CV (${lang.toUpperCase()}).pdf`);
    }

    function SkillList() {
        let skills = ['JavaScript', 'React', 'Redux', 'CSS', 'TypeScript', 'Sequelize', 'PostgreSQL', 'ExpressJS', 'NodeJS', 'git']

        return (
            <ul>
                {skills.map(skill =>
                    <li>
                        <img src='' alt=''/> 
                        <span>{skill}</span>
                    </li>
                )}
            </ul>
        )
    }

    function ProjectList() {
        let projects = [
            {
                name: 'Clases E-Commerce', 
                desc: 'Proyecto final del bootcamp Henry, el cual es un ecommerce de clases 100% funcional en el que se puede hacer el recorrido completo desde la publicación de un producto hasta su compra posterior por un cliente',
                tech: 'Las tecnologías utilizadas fueron: React, Redux, TypeScript, ExpressJS, PostgreSQL y Sequelize'
            },
            {
                name: 'Pokemon App',
                desc: 'Primer projecto individual, esta aplicación nos permite ver pokemones en una lista paginada, su información al ser clickeados, y crear pokemones propios',
                tech: 'Las tecnologías utilizadas fueron: React y Redux para el Frontend y PostreSQL, Sequelize y Node.JS (Express) para el Backend'
            }
        ]

        return (
            <ul>
                {projects.map(project =>
                    <li>
                        <img src='' alt=''/>
                        <h3>{project.name}</h3>
                        <span>{project.desc}</span>
                        <span>{project.tech}</span>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div>
            <div>
                <span>Javier Iñaki Carro</span>
                <span>Fullstack Web Developer</span>
                <p>Soy un programador muy creativo interesado en aprender nuevas tecnologías de maneras autodidactas. <br/> Cautivado por el arte y con ganas de encontrar un proyecto que me apasione que me permita mejorar mis conocimientos en el mundo de la tecnología</p>
                <button onClick={handleDownload}>Currículum</button>
            </div>
            <div>
                <h2>Habilidades</h2>
                <SkillList />
            </div>
            <div>
                <h2>Proyectos</h2>
                <ProjectList />
            </div>
        </div>
    )
}

export default HomeSkullgirls;