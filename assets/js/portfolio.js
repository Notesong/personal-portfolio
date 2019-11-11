const projectDescriptions = [
    { id: 1, 
        title: 'Tipsease',
        description: 'blah',
        techStack: 'Built using...',
        link: 'http://',
        githubRepo: 'http://',
        highlights: {
            1: '',
            2: ''  
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
const projects = document.querySelectorAll('.portfolio-box img');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        TweenLite.to(project, 1, {opacity:0, ease:Power2.easeInOut});
    });
    project.addEventListener('mouseout', () => {
        TweenLite.to(project, 1, {opacity:1, ease:Power2.easeInOut});
    });
});
