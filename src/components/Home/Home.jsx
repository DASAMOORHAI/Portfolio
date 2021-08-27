import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';
import texts from '../../texts';
import imgs from '../../images/index.js';
import './Home.css';

const Home = () => {
    const [lang, setLang] = useState('en')
    const [open, setOpen] = useState(false)
    const [langAnim, setLangAnim] = useState(false)
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
            setLangAnim(false)
            setTimeout(() => {
                setOpen(false)
            }, 300)
            document.removeEventListener('mousedown', handleDropdownClose)
        }
    }

    function handleChange(e) {
        switch(e.target.name) {
            case 'dropdownBtn':
                setLangAnim(!langAnim)

                if(!open) {
                    setOpen(true)
                    document.addEventListener('mousedown', handleDropdownClose)
                } else {
                    setTimeout(() => {
                        setOpen(false)
                    }, 300)
                }
                break;
            case 'langEs':
                setLang('es')
                setLangAnim(false)
                setTimeout(() => {
                    setOpen(false)
                }, 300)
                break;
            case 'langEn':
                setLang('en')
                setLangAnim(false)
                setTimeout(() => {
                    setOpen(false)
                }, 300)
                break;
            case 'sidebarBtn':
                setSidebarAnim(!sidebarAnim)

                if(!sidebar) {
                    setSidebar(true)
                } else {
                    setTimeout(() => {
                        setSidebar(false)
                    }, 300)
                }
                break;
            default:
                break;
        }
    }

    function SkillList() {
        let skills = ['JavaScript', 'React', 'Redux', 'CSS', 'TypeScript', 'Sequelize', 'PostgreSQL', 'ExpressJS', 'NodeJS', 'git']

        return (
            <ul>
                {skills.map(skill =>
                    <li className='indvSkill'>
                        <img src={imgs.skills[skill]} alt=''/> 
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
                <button type='button' className='dropdownBtn' name='dropdownBtn' onClick={handleChange}><img name='dropdownBtn' onClick={handleChange} className='langIcon' src={imgs.page.globe} alt='lang'/></button>
                <div className={open ? 'dropdown' : 'dropdown' + ' closedC'} id={langAnim ? 'langOpen' : 'langClose'}>
                    <ul className='langList'>
                        <li><button className='langBtn' type='button' onClick={handleChange} name='langEs'>Español</button></li>
                        <li><button className='langBtn' type='button' onClick={handleChange} name='langEn'>English</button></li>
                    </ul>
                </div>
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
            <div className='myInfoContainer col-10'>
                <span className='fullName'>Javier Iñaki Carro</span>
                <span className='myPos'>Fullstack Web Developer</span>
                <p className='desc'>{texts[lang].desc1}<br/>{texts[lang].desc2}</p>
                <button className='cvBtn' onClick={handleDownload}>{texts[lang].curr}</button>
            </div>
            <div className='col-10'>
                <h2>{texts[lang].skillsT}</h2>
                <SkillList />
            </div>
            <div className='clearer'/>
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