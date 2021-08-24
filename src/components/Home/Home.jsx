import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';
import texts from '../../texts';
import imgs from '../../images/index.js';
import './Home.css';

const Home = () => {
    const [lang, setLang] = useState('en')
    const [open, setOpen] = useState(false)
    const [sidebarAnim, setSidebarAnim] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    function handleDownload() {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + `/resource/Javier_Iñaki_Carro_CV_${lang}.pdf`,
            `Javier Iñaki Carro - CV (${lang.toUpperCase()}).pdf`);
    }

    const handleDropdownClose = (e) => {
        if(e.target.name === 'dropdownBtn') {
            document.removeEventListener('mousedown', handleDropdownClose)
        } else if(e.target.tagName === 'BUTTON') {
            return null
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
            case 'sidebarBtn':
                setSidebarAnim(!sidebarAnim)

                if(!sidebar) {
                    setSidebar(true)
                } else {
                    setTimeout(() => {
                        setSidebar(false)
                    }, 500)
                }
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
        <div className='bgImg'>
            <div className='container'>
                <button type='button' name='dropdownBtn' onClick={handleChange}>Idioma</button>
                {open ? 
                    <div className='dropdown'>
                        <ul>
                            <li><button type='button' onClick={() => {setLang('es'); setOpen(false)}}>Español</button></li>
                            <li><button type='button' onClick={() => {setLang('en'); setOpen(false)}}>English</button></li>
                        </ul>
                    </div>
                    :
                    null
                }
            </div>

            {/* Cellphone Sidebar */}
            <div className={sidebarAnim ? 'focusSidebarC' : 'closedC'}/>
            <img src={imgs.sidebar.open} alt='' onClick={handleChange} className='closedSidebarBtnC' name='sidebarBtn'/>
            <div className={sidebar ? 'sidebarContainerC' : 'sidebarContainerC' + ' closedC'} id={sidebarAnim ? 'open' : 'close'}>
                <div className='sidebarC'>

                </div>
                <img src={imgs.sidebar.close} alt='' onClick={handleChange} className='openedSidebarBtnC' name='sidebarBtn'/>
            </div>

            {/* Tablet Sidebar */}
            <div className='sidebarContainerT'>

            </div>

            {/* Desktop Sidebar */}
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
                <Link to={{pathname: "mailto:javier.carro.trabajo@gmail.com"}} target="_blank" rel="noopener noreferrer"><img src='' alt='Gmail'/></Link>
                <Link to={{pathname: 'https://www.linkedin.com/in/javier-iñaki-carro/'}} target='_blank' rel="noopener noreferrer"><img src='' alt='LinkedIn'/></Link>
            </div>
        </div>
    )
}

export default Home;