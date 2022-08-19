// nav highlight

let navObserver = new IntersectionObserver(navCheck);
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    navObserver.observe(section);
});

function navCheck(entries) {
    entries.forEach(entry => {
        const secName = entry.target.id;
        const activeNav = document.querySelector(`[data-id=${secName}]`);

        activeNav.classList.toggle('active-btn', entry.isIntersecting);
    });
}






// light/dark mode

// const themeToggle = document.querySelector('.theme-btn');

// themeToggle.addEventListener('click', function () {
//     document.body.classList.toggle('light-mode');

//     var theme;

//     if (document.body.classList.contains('light-mode')) {
//         theme = 'light';
//         themeToggle.firstElementChild.className = 'fa fa-moon';
//     }

//     else {
//         theme = 'dark';
//         themeToggle.firstElementChild.className = 'fa fa-sun';
//     }

//     localStorage.setItem('theme', JSON.stringify(theme));
// })

// let getTheme = JSON.parse(localStorage.getItem('theme'));

// if (getTheme === 'light') {
//     document.body.classList = 'light-mode';
//     themeToggle.firstElementChild.className = 'fa fa-moon';
// }

// const themeToggle = document.querySelector('.theme-btn');


// themeToggle.addEventListener('click', ()=> {
//     document.body.classList.toggle('light-mode');

//     if (document.body.classList.contains('light-mode')) {
//         themeToggle.firstElementChild.className = 'fa fa-moon';
//         localStorage.setItem('theme', JSON.stringify('light-mode'));
//     }

//     else {
//         themeToggle.firstElementChild.className = 'fa fa-sun';
//         localStorage.setItem('theme', JSON.stringify('root'));
//     }
// });

work = [
    {
        'quantity': '560+',
        'project': 'projects completed',
    },
    {
        'quantity': '10+',
        'project': 'years of experience',
    },
    {
        'quantity': '300+',
        'project': 'satisfied customers',
    },
    {
        'quantity': '400+',
        'project': 'execellent reviews',
    }
]
const about = document.querySelector('.right-about')
for (let i = 0; i < work.length; i++) {
    about.innerHTML += `<div class="about-item">
    <div class="about-text">
        <p class="lg-text">${work[i].quantity}</p>
        <p class="sm-text toUpper">${work[i].project}</p>
    </div>
</div>`
}

skills = [
    {
        'name': 'html',
        'tool': 'HTML5',
        'progress': '95%'
    },
    {
        'name': 'css',
        'tool': 'CSS3',
        'progress': '93%'
    },
    {
        'name': 'js',
        'tool': 'JAVA SCRIPT',
        'progress': '85%'
    },
    {
        'name': 'wp',
        'tool': 'Wordpress',
        'progress': '82%'
    },
]
const progress = document.querySelector('.progress-bars');
for (let i = 0; i < skills.length; i++) {
    progress.innerHTML += ` <div class="progress-bar">
    <p class="prog-title">${skills[i].tool}</p>
    <div class="progress-container grid">
        <p class="prog-text">${skills[i].progress}</p>
        <div class="progress">
            <span class="stat ${skills[i].name}"></span>
        </div>
    </div>
</div>`
}
let progressObserver = new IntersectionObserver(callBack);
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => {
    progressObserver.observe(stat);
})
function callBack(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting)
    })
}




experience = [
    {
        'year': '2019-今',
        'role': 'Webディレクター',
        'company': 'Nicrosoft',
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa!'
    },
    {
        'year': '2017-2019',
        'role': 'Webエンジニア',
        'company': 'Nicrosoft',
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa!'
    },
    {
        'year': '2013-2017',
        'role': 'Webデザイナー',
        'company': 'Nicrosoft',
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa!'
    },
    {
        'year': '2010-2013',
        'role': 'グラッフィックデザイナー',
        'company': 'LIME',
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa!'
    },
    {
        'year': '2009-2010',
        'role': 'インターン',
        'company': 'Amazom',
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa!'
    },
    {
        'year': '2005-2009',
        'role': 'Computer Science',
        'company': 'Gokyo University',
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa!'
    },
]

const timeline = document.querySelector('.timeline-items');
for (let i = 0; i < experience.length; i++) {
    timeline.innerHTML += `<div class="timeline-item">
<div class="tl-icon active-btn">
    <i class="fas fa-briefcase"></i>
</div>
<div class="tl-text">
    <p class="tl-duration">${experience[i].year}</p>
    <h5>${experience[i].role} <span>- ${experience[i].company}</span></h5>
    <p>${experience[i].brief}</p>
</div>
</div>`}


const portfolio = [
    {
        'language': 'html, css, javascript',
        'img': 'img/p1.jpeg',
        'title': 'Portfolio Title',
    },
    {
        'language': 'html, css, bootstrap, javascript',
        'img': 'img/p2.webp',
        'title': 'Portfolio Title',
    },
    {
        'language': 'html, css, javascript,jQuery',
        'img': 'img/p3.jpeg',
        'title': 'Portfolio Title',
    },
    {
        'language': 'Photoshop, Illustrator, AdobeXD',
        'img': 'img/p4.webp',
        'title': 'Portfolio Title',
    },
    {
        'language': 'Photoshop, Illustrator, AdobeXD',
        'img': 'img/p5.webp',
        'title': 'Portfolio Title',
    },
    {
        'language': 'Photoshop, Illustrator, AdobeXD',
        'img': 'img/p6.webp',
        'title': 'Portfolio Title',
    },
]

const portfolioContainer = document.querySelector('.portfolio-container');
for (let i = 0; i < portfolio.length; i++) {
    portfolioContainer.innerHTML += `<div class="portfolio-item txt-ctr">
    <div class="hovertext" data-hover="${portfolio[i].language}">
        <img src="${portfolio[i].img}" alt="">
    </div>
    <p>${portfolio[i].title}</p>
</div>`
}

const service = [
    {
        'img': 'img/s1.webp',
        'title': ' Webデザイン',
        'sum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo!'
    },
    {
        'img': 'img/s2.jpeg',
        'title': 'コーディング',
        'sum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo!'
    },
    {
        'img': 'img/s3.jpeg',
        'title': 'バナー広告',
        'sum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo!'
    },
    {
        'img': 'img/s4.jpeg',
        'title': '写真・ビデオ編集',
        'sum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo!'
    },
    {
        'img': 'img/s5.jpeg',
        'title': 'Wordpressテーマ',
        'sum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo!'
    },
    {
        'img': 'img/s6.jpeg',
        'title': 'コンサルティング',
        'sum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quo!'
    },
]
const serviceContainer = document.querySelector('.service-container');
for (let i = 0; i < service.length; i++) {
    serviceContainer.innerHTML += `<div class="service-item txt-ctr">
    <img src="${service[i].img}" alt="">
    <h4>${service[i].title}</h4>
    <p>${service[i].sum}</p>
    <a href="">Click to read more</a>
</div>`
}



let observer = new IntersectionObserver(reveal);

sections.forEach(section => {
    observer.observe(section);
})

function reveal(entries) {
    entries.forEach(entry => {
        entry.target.classList.add('reveal', entry.isIntersecting);
    })
}




// footer get year
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// back to top
const toTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500) {
        toTop.classList.add('pop');
    } else {
        toTop.classList.remove('pop');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});