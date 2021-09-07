import imgs from '../images/index.js';

export default {
    es: {
        sidebar: {personalInf: 'Sobre mi', skillsS: 'Habilidades', projectsS: 'Proyectos', contactS: 'Contáctame'},
        desc1: 'Soy un programador muy creativo interesado en aprender nuevas tecnologías de maneras autodidactas.',
        desc2: 'Cautivado por el arte y con ganas de encontrar un proyecto que me apasione que me permita mejorar mis conocimientos en el mundo de la tecnología',
        curr: 'Currículum',
        skillsT: 'Habilidades',
        projectsT: 'Proyectos',
        projects: [
            {
                img: imgs.projects.ecom,
                name: 'Clases E-Commerce', 
                desc: 'Proyecto final del bootcamp Henry, el cual es un ecommerce de clases 100% funcional en el que se puede hacer el recorrido completo desde la publicación de una clase hasta su compra posterior por un cliente.',
                tech: 'Las tecnologías utilizadas fueron: React, Redux, TypeScript, ExpressJS, PostgreSQL y Sequelize'
            },
            {
                img: imgs.projects.poke,
                name: 'Pokemon App',
                desc: 'Primer projecto individual, esta aplicación nos permite ver pokemones en una lista paginada, su información al ser clickeados, y crear pokemones propios.',
                tech: 'Las tecnologías utilizadas fueron: React y Redux para el Frontend y PostreSQL, Sequelize y Node.JS (Express) para el Backend'
            }
        ],
        contactT: 'Contáctame'
    },
    en: {
        sidebar: {personalInf: 'About me', skillsS: 'Skills', projectsS: 'Projects', contactS: 'Contact me'},
        desc1: `I'm a very creative programmer interested in learning new technologies with self-taught methods.`,
        desc2: 'Captivated by art and looking for a project that I am passionate about and that permits me to deepen my knowledge in the world of tech.',
        curr: 'Resume',
        skillsT: 'Skills',
        projectsT: 'Projects',
        projects: [
            {
                img: imgs.projects.ecom,
                name: 'E-Commerce Classes', 
                desc: 'Final project of the Henry bootcamp, which is a 100% functional class ecommerce in which the complete journey can be made from the publication of a class to its subsequent purchase by a client.',
                tech: 'The used technologies are: React, Redux, TypeScript, ExpressJS, PostgreSQL and Sequelize'
            },
            {
                img: imgs.projects.poke,
                name: 'Pokemon App',
                desc: 'First individual project, this application allows us to see Pokémon in a paginated list, their information when clicked, and create our own Pokémon.',
                tech: 'The used technologies are: React and Redux for Frontend and PostreSQL, Sequelize and Node.JS (Express) for Backend'
            }
        ],
        contactT: 'Contact me'
    }
}