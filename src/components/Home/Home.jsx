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

    window.addEventListener("scroll", function () {
        var scrollPos = this.scrollY
        if(scrollPos < 270) {
            document.getElementById('persInfoBtn').className = 'D-sidebarOpts optSelect'
            document.getElementById('skillsBtn').className = 'D-sidebarOpts optDeselect'
        } else if(scrollPos >= 270 &&  scrollPos < 975) {
            document.getElementById('persInfoBtn').className = 'D-sidebarOpts optDeselect'
            document.getElementById('skillsBtn').className = 'D-sidebarOpts optSelect'
            document.getElementById('projectsBtn').className = 'D-sidebarOpts optDeselect'
        } else if(scrollPos >= 975 && scrollPos < 1700) {
            document.getElementById('skillsBtn').className = 'D-sidebarOpts optDeselect'
            document.getElementById('projectsBtn').className = 'D-sidebarOpts optSelect'
            document.getElementById('contactBtn').className = 'D-sidebarOpts optDeselect'
        } else if(scrollPos >= 1700) {
            document.getElementById('projectsBtn').className = 'D-sidebarOpts optDeselect'
            document.getElementById('contactBtn').className = 'D-sidebarOpts optSelect'
        }
    })

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

    function handleDownload() {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + `/resource/Javier_Iñaki_Carro_CV_${lang}.pdf`,
            `Javier Iñaki Carro - CV (${lang.toUpperCase()}).pdf`);
    }

    function handleButtonScroll(e) {
        document.getElementById(e.target.name).scrollIntoView({behavior: 'smooth'});
        setSidebarAnim(false)
        setTimeout(() => {
            setSidebar(false)
        }, 300)
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
            <ul className='indvSkillContainer'>
                {skills.map(skill =>
                    <li className='indvSkill'>
                        <img className='indvSkillImg' src={imgs.skills[skill]} alt=''/> 
                        <span>{skill}</span>
                    </li>
                )}
            </ul>
        )
    }

    function ProjectList({projects}) {
        return (
            <ul className='indvProjectsContainer'>
                {projects.map(project =>
                    <li className='indvProject'>
                        <img src={project.img} alt=''/>
                        <h3>{project.name}</h3>
                        <span>{project.desc}</span>
                        <br/>
                        <span>{project.tech}</span>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div className='bgImg'>
            <div className='landscapeLock'>
                <p>Landscape mode is currently under development, on the meantime please read the portfolio on Portrait mode, sorry for the inconvenience <br /> / <br /> El modo horizontal está bajo desarrollo, mientras tanto por favor lea el portfolio en modo vertical, disculpe la molestia</p>
            </div>
            <div className='langContainer'>
                <button type='button' className='langDropdownBtn' name='dropdownBtn' onClick={handleChange}><img name='dropdownBtn' onClick={handleChange} className='langIcon' src={imgs.page.globe} alt='lang'/></button>
                <div className={open ? 'langDropdown' : 'langDropdown' + ' closed'} id={langAnim ? 'langOpen' : 'langClose'}>
                    <ul className='langList'>
                        <li><button className='langBtn' type='button' onClick={handleChange} name='langEs'>Español</button></li>
                        <li><button className='langBtn' type='button' onClick={handleChange} name='langEn'>English</button></li>
                    </ul>
                </div>
            </div>
            {/* Cellphone Sidebar */}
            <button className={sidebarAnim ? 'focusSidebar' : 'closed'} onClick={handleChange} name='sidebarBtn'/>
            <img src={imgs.sidebar.cell.open} alt='' onClick={handleChange} className='closedSidebarBtn' name='sidebarBtn'/>
            <div className={sidebar ? 'sidebarContainer' : 'sidebarContainer' + ' closed'} id={sidebarAnim ? 'open' : 'close'}>
                <div className='C-sidebar'>
                    <button className='C-sidebarOpts' type='button' onClick={handleButtonScroll} name='persInfo'>{texts[lang].sidebar.personalInf}</button>
                    <button className='C-sidebarOpts' type='button' onClick={handleButtonScroll} name='skills'>{texts[lang].sidebar.skillsS}</button>
                    <button className='C-sidebarOpts' type='button' onClick={handleButtonScroll} name='projects'>{texts[lang].sidebar.projectsS}</button>
                    <button className='C-sidebarOpts' type='button' onClick={handleButtonScroll} name='contact'>{texts[lang].sidebar.contactS}</button>
                </div>
                <img src={imgs.sidebar.cell.close} alt='' onClick={handleChange} className='openedSidebarBtn' name='sidebarBtn'/>
            </div>
            {/* ----------------- */}
            {/* Tablet Sidebar */}
            <div className='T-sidebar col-2'>
                <button className='T-sidebarOpts' type='button' onClick={handleButtonScroll} name='persInfo'>{texts[lang].sidebar.personalInf}</button>
                <button className='T-sidebarOpts' type='button' onClick={handleButtonScroll} name='skills'>{texts[lang].sidebar.skillsS}</button>
                <button className='T-sidebarOpts' type='button' onClick={handleButtonScroll} name='projects'>{texts[lang].sidebar.projectsS}</button>
                <button className='T-sidebarOpts' type='button' onClick={handleButtonScroll} name='contact'>{texts[lang].sidebar.contactS}</button>
            </div>
            {/* -------------- */}
            {/* Desktop Sidebar */}
            <div className='D-sidebarBG' />
            <div className='D-sidebar col-3'>
                <img className='D-sidebarOpts optSelect' id='persInfoBtn' src={imgs.sidebar.desk[lang].about} onClick={handleButtonScroll} name='persInfo' />
                <img className='D-sidebarOpts optDeselect' id='skillsBtn' src={imgs.sidebar.desk[lang].skills} onClick={handleButtonScroll} name='skills' />
                <img className='D-sidebarOpts optDeselect' id='projectsBtn' src={imgs.sidebar.desk[lang].projects} onClick={handleButtonScroll} name='projects' />
                <img className='D-sidebarOpts optDeselect' id='contactBtn' src={imgs.sidebar.desk[lang].contact} onClick={handleButtonScroll} name='contact' />
            </div>
            {/* --------------- */}
            <div className='col-port'>
                <div className='myInfoContainer'>
                    <span className='fullName' id='persInfo'>Javier Iñaki Carro</span>
                    <span className='myPos'>Fullstack Web Developer</span>
                    <p className='desc'>{texts[lang].desc1}<br/>{texts[lang].desc2}</p>
                    <button className='cvBtn' onClick={handleDownload}>{texts[lang].curr}</button>
                </div>
                <div>
                    <h2 id='skills'>{texts[lang].skillsT}</h2>
                    <SkillList />
                </div>
                <div>
                    <h2 id='projects'>{texts[lang].projectsT}</h2>
                    <ProjectList projects={texts[lang].projects}/>
                </div>
                <div>
                    <h2 id='contact'>{texts[lang].contactT}</h2>
                    <div className='contactImgs'>
                        <Link to={{pathname: "mailto:javier.carro.trabajo@gmail.com"}} target="_blank" rel="noopener noreferrer"><img src={imgs.contact.gmail} alt='Gmail'/></Link>
                        <Link to={{pathname: 'https://www.linkedin.com/in/javier-iñaki-carro/'}} target='_blank' rel="noopener noreferrer"><img src={imgs.contact.linkedin} alt='LinkedIn'/></Link>
                        <Link to={{pathname: 'https://github.com/DASAMOORHAI'}} target='_blank' rel="noopener noreferrer"><img src={imgs.contact.github} alt='GitHub'/></Link>
                    </div>
                </div>
            </div>
            <div className='clearer'/>
        </div>
    )
}

export default Home;