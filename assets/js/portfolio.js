// array of my projects
const projectDescriptions = [
    { id: 1, 
        title: 'Tipsease',
        description: 'Tip your server in three easy and secure steps.',
        techStack: 'Built using HTML, LESS/CSS, and Javascript.',
        link: 'https://tipsease-buildweek.github.io/Lee-UI/',
        githubRepo: 'https://github.com/Tipsease-Buildweek/Lee-UI',
        highlights: {
            1: 'Designed and programmed the landing-page.',
            2: 'Used responsive LESS/CSS and JavaScript to provide functionality.'  
        }
    },
    { id: 2, 
        title: '',
        description: '',
        techStack: 'Built using...',
        link: 'http://',
        githubRepo: 'http://',
        highlights: {
            1: '',
            2: ''  
        }
    }
];

// animate mouseover on portfolio images
const projectHolder = document.querySelectorAll('.portfolio-box');
const projects = document.querySelectorAll('.portfolio-box img');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        TweenLite.to(project, 1, {opacity:0, ease:Power2.easeInOut});
    });
    project.addEventListener('mouseout', () => {
        TweenLite.to(project, 1, {opacity:1, ease:Power2.easeInOut});
    });
});
