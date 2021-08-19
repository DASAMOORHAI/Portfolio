import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';
import texts from '../../texts';
import './Home.css';

const Home = () => {
    const [lang, setLang] = useState('en')
    const [open, setOpen] = useState(false)

    function handleDownload() {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + `/resource/Javier_Iñaki_Carro_CV_${lang}.pdf`,
            `Javier Iñaki Carro - CV (${lang.toUpperCase()}).pdf`);
    }

    const handleDropdownClose = (e) => {
        if(e.target.name === 'dropdownBtn') {
            document.removeEventListener('mousedown', handleDropdownClose)
        } else {
            setOpen(false)
            document.removeEventListener('mousedown', handleDropdownClose)
        }
    }

    function handleChange(e) {
        switch(e.target.name) {
            case 'dropdownBtn':
                setOpen(!open)
                document.addEventListener('mousedown', handleDropdownClose)
            break;
            default:
                break
        }
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

    function ProjectList({projects}) {
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
            <div className='container'>
                <button type='button' name='dropdownBtn' onClick={handleChange}>Idioma</button>
                {open ? 
                    <div className='dropdown'>
                        <ul>
                            <li>Español</li>
                            <li>English</li>
                        </ul>
                    </div>
                    :
                    null
                }
            </div>
            <div>
                <span>Javier Iñaki Carro</span>
                <span>Fullstack Web Developer</span>
                <p>{texts[lang].desc1}<br/>{texts[lang].desc2}</p>
                <button onClick={handleDownload}>{texts[lang].curr}</button>
            </div>
            <div>
                <h2>{texts[lang].skillsT}</h2>
                <SkillList />
            </div>
            <div>
                <h2>{texts[lang].projectsT}</h2>
                <ProjectList projects={texts[lang].projects}/>
            </div>
            <div>
                <h2>{texts[lang].contactT}</h2>
                <Link to={{pathname: "mailto:javier.carro.trabajo@gmail.com"}} target="_blank"><img src='' alt='Gmail'/></Link>
                <Link to={{pathname: 'https://www.linkedin.com/in/javier-iñaki-carro/'}} target='_blank'><img src='' alt='LinkedIn'/></Link>
            </div>
        </div>
    )
}

export default Home;