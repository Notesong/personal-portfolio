// array of my projects for display on the slideout
const projectDescriptions = [
    {
        projectTitle: 'Tipsease',
        projectDesc: 'Tip your server in three easy and secure steps.',
        projectTechStack: 'Built using HTML, LESS/CSS, and Javascript.',
        projectLink: 'https://tipsease-buildweek.github.io/Lee-UI/',
        projectGithubRepo: 'https://github.com/Tipsease-Buildweek/Lee-UI',
        projectHighlights: ['Designed and coded the landing-page.', 'Used responsive LESS/CSS and JavaScript to provide the layout and functionality.']
    },
    {
        projectTitle: 'Lambda Times',
        projectDesc: 'Displays a list of articles gathered through an API request.',
        projectTechStack: 'Built using JavaScript and the Axios library',
        projectLink: 'https://notesong.github.io/Sprint-Challenge-Applied-Javascript/',
        projectGithubRepo: 'http://https://github.com/Notesong/Sprint-Challenge-Applied-Javascript',
        projectHighlights: ['Coded the header, topics section, and article boxes.', 'DOM manipulation with events and HTTP GET requests.', 'Accesses API to deliver content for article boxes.', 'Components used throughout code for reusability for API requests.']
    }
];

const portfolioSlideoutContainer = document.querySelector('.portfolio-slideout-container');
const portfolioSlideout = document.querySelector('.portfolio-slideout');
const projectTitle = document.querySelector('#projectTitle');
const projectDesc = document.querySelector('#projectDesc');
const projectTechStack = document.querySelector('#projectTechStack');
const projectLink = document.querySelector('#projectLink');
const projectGithubRepo = document.querySelector('#projectGithubRepo');
let projectHighlights = document.querySelector('#projectHighlights');
function postProjectSlideoutContent (projectDescriptionNum) {
    // add text to each element
    projectTitle.textContent = projectDescriptions[projectDescriptionNum].projectTitle;
    projectDesc.textContent = projectDescriptions[projectDescriptionNum].projectDesc;
    projectTechStack.textContent = projectDescriptions[projectDescriptionNum].projectTechStack;
    projectLink.href = projectDescriptions[projectDescriptionNum].projectLink;
    projectLink.textContent = projectDescriptions[projectDescriptionNum].projectLink;
    projectGithubRepo.href = projectDescriptions[projectDescriptionNum].projectGithubRepo;
    projectGithubRepo.textContent = projectDescriptions[projectDescriptionNum].projectGithubRepo;

    // reset project highlights each time so that it doesn't duplicate
    projectHighlights.remove();
    projectHighlights = document.createElement('ul');
    projectHighlights.id = 'projectHighlights';
    portfolioSlideout.appendChild(projectHighlights);

    // create each li and add the text based on how many project highlights there are
    for(let i = 0 ; i < projectDescriptions[projectDescriptionNum].projectHighlights.length ; i++) {
        const highlight = document.createElement('li');
        projectHighlights.appendChild(highlight);
        highlight.textContent = projectDescriptions[projectDescriptionNum].projectHighlights[i];
    }
}

// open project description box for active project boxes
const portfolioBoxes = document.querySelectorAll('.active-box');
portfolioBoxes.forEach((box, i) => {
    box.addEventListener('click', (event) => {
        postProjectSlideoutContent(i);
        portfolioSlideout.classList.add('panel--open');
        TweenLite.to(".portfolio-slideout-container", 1, {right:'0', ease:Power2.easeInOut});
        event.stopPropagation();
    });
});

// 'x' to close slideout
const xSlideoutToggle = document.querySelector('#x');
xSlideoutToggle.addEventListener('click', (event) => {
    TweenLite.to(".portfolio-slideout-container", 1, {right:'-1000', ease:Power2.easeInOut});
    portfolioSlideout.classList.remove('panel--open');
    event.stopPropagation();
})

// animate mouseover and mouseout on portfolio images
const projectImages = document.querySelectorAll('.portfolio-box img');
projectImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        TweenLite.to(image, 1, {opacity:0, ease:Power2.easeInOut});
    });
    image.addEventListener('mouseout', () => {
        TweenLite.to(image, 1, {opacity:1, ease:Power2.easeInOut});
    });
});
