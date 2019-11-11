// array of my projects
const projectDescriptions = [
    {1: 
        {
            projectTitle: 'Tipsease',
            projectDesc: 'Tip your server in three easy and secure steps.',
            projectTechStack: 'Built using HTML, LESS/CSS, and Javascript.',
            projectLink: 'https://tipsease-buildweek.github.io/Lee-UI/',
            projectGithubRepo: 'https://github.com/Tipsease-Buildweek/Lee-UI',
            projectHighlights: {
                1: 'Designed and programmed the landing-page.',
                2: 'Used responsive LESS/CSS and JavaScript to provide the layout and functionality.'  
            }
        }
    },
    {2: 
        {
            projectTitle: '',
            projectDesc: '',
            projectTechStack: 'Built using...',
            projectLink: 'http://',
            projectGithubRepo: 'http://',
            projectHighlights: {
                1: '',
                2: ''  
            }
        }
    }
];

function postProjectSlideoutContent () {

}

const slideoutToggle = document.querySelector('#x');
const portfolioSlideout = document.querySelector('.portfolio-slideout');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const projectImages = document.querySelectorAll('.portfolio-box img');

// slide the project description slideout in and out

portfolioBoxes.forEach(box => {
    box.addEventListener('click', (event) => {
        portfolioSlideout.classList.add('panel--open');
        TweenLite.to(".portfolio-slideout", 1, {right:'0', ease:Power2.easeInOut});
        event.stopPropagation();
    });
});

slideoutToggle.addEventListener('click', (event) => {
    if(window.innerWidth > 500 && window.innerWidth < 800) {
        TweenLite.to(".portfolio-slideout", 1, {right:'-500', ease:Power2.easeInOut});
    } else if(window.innerWidth >= 800) {
        TweenLite.to(".portfolio-slideout", 1, {right:'-700', ease:Power2.easeInOut});
    } else {
        TweenLite.to(".portfolio-slideout", 1, {right:'-400', ease:Power2.easeInOut});
    }
    portfolioSlideout.classList.remove('panel--open');
    event.stopPropagation();
})

// animate mouseover on portfolio images


projectImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        TweenLite.to(image, 1, {opacity:0, ease:Power2.easeInOut});
    });
    image.addEventListener('mouseout', () => {
        TweenLite.to(image, 1, {opacity:1, ease:Power2.easeInOut});
    });
});
