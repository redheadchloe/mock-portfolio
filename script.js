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




const work = [
    {
        'quantity': '6',
        'project': '年のWeb業界経験',
    },
    {
        'quantity': '200',
        'project': 'サイト制作実績',
    },
    {
        'quantity': '120',
        'project': 'リピーター顧客数',
    },
    {
        'quantity': '100',
        'project': '高評価レビュー',
    }
]
const about = document.querySelector('.right-about')
for (let i = 0; i < work.length; i++) {
    about.innerHTML += `<div class="about-item">
    <div class="about-text">
        <p class="lg-text counter" data-value="${work[i].quantity}">0</p>
        <p class="sm-text toUpper">${work[i].project}</p>
    </div>
</div>`;
}
const counters = document.querySelectorAll('.counter');
let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        // console.log('intersecting');
        let speed = 200;
        counters.forEach((counter, index) => {
            function UpdateCounter() {
                const target = +counter.dataset.value;
                const start = +counter.innerText;
                const increment = target / speed;
                if (start < target) {
                    counter.innerText = Math.ceil(start + increment);
                    setTimeout(UpdateCounter, 10);
                }
                else {
                    counter.innerText = target + '+';
                }
            }
            UpdateCounter();
        });
        observer.unobserve(about);
    },
    {
        threshold: .5,
    }
);
CounterObserver.observe(about);

const skills = [
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
    {
        'name': 'jquery',
        'tool': 'jQuery',
        'progress': '80%'
    },
    {
        'name': 'bootstrap',
        'tool': 'Bootstrap',
        'progress': '90%'
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




const experience = [
    {
        'year': '2020-今',
        'role': 'Webディレクター',
        'company': 'Mericori',
        'brief': 'Webサイトの企画立案や制作、運用や更新等全般業務に関わる。また、制作チームのマネジメントや仕事の指揮も。'
    },
    {
        'year': '2018-2020',
        'role': 'Webデザイナー・ディレクター',
        'company': 'Nicrosoft',
        'brief': 'クライアントの要望・課題のヒアリング、企画提案、見積もりや予算管理、スケジュールの進行管理、運用更新などを行いました。'
    },
    {
        'year': '2016-2018',
        'role': 'Webデザイナー',
        'company': 'LIME',
        'brief': 'ユーザーのリサーチからWebサイトの企画、デザイン、ワイヤーフレームの作成まで行いました。'
    },
    {
        'year': '2015-2016',
        'role': 'インターン',
        'company': 'Amazom',
        'brief': 'Photoshop/Illustratorを使ったWebサイトやアプリのデザインの企画・設計・実装を行いました。'
    },
    {
        'year': '2011-2015',
        'role': 'コンピューターサイエンス',
        'company': '東京大学',
        'brief': 'コンピューターの仕組みに関して学習し、システムの構築や制御などを研究し、人の生活に役立てるための応用的研究を行いました。'
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
        'language': 'Html, Css, Javascript',
        'img': 'img/p1.jpeg',
        'title': 'レスポンシブWebデザイン',
    },
    {
        'language': 'Html, Css, Javascript, Bootstrap',
        'img': 'img/p2.webp',
        'title': 'ホームページの更新・修正',
    },
    {
        'language': 'Html, Css, Javascript,jQuery',
        'img': 'img/p3.jpeg',
        'title': 'デザインカンプ',
    },
    {
        'language': 'Photoshop, Illustrator, AdobeXD',
        'img': 'img/p4.webp',
        'title': 'ランディングページ',
    },
    {
        'language': 'Photoshop, Illustrator',
        'img': 'img/p5.jpeg',
        'title': 'Web素材の作成',
    },
    {
        'language': 'Photoshop, Illustrator, AdobeXD',
        'img': 'img/p6.webp',
        'title': 'ホームページのリニュアル',
    },
    {
        'language': 'Html, Css, Javascript',
        'img': 'img/p7.jpeg',
        'title': 'コーディング',
    },
    {
        'language': 'Html, Css, Javascript, Wordpress, PHP',
        'img': 'img/p8.jpeg',
        'title': 'Wordpressテーマの構築・導入',
    },
    {
        'language': 'Photoshop, Illustrator, Lightroom',
        'img': 'img/p9.jpeg',
        'title': 'バナー広告',
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
        'img': 'img/s1.jpeg',
        'title': ' ホームページ・LPデザイン',
        'sum': 'HPの作成はもちろん、修正・更新も対応しております。'
    },
    {
        'img': 'img/s2.jpeg',
        'title': 'コーディング',
        'sum': 'デザイン通りにレスポンシブコーディングします。'
    },
    {
        'img': 'img/s3.webp',
        'title': 'バナー広告',
        'sum': 'バナー広告、ヘッダーなど様々なサイズや用途で制作いたします。'
    },
    {
        'img': 'img/s4.avif',
        'title': '写真・ビデオ編集',
        'sum': 'WebやSNS用の写真またビデオ素材を作成いたします。'
    },
    {
        'img': 'img/s5.avif',
        'title': 'Wordpressテーマ',
        'sum': 'Wordpressテーマを修正・カスタマイズいたします。'
    },
    {
        'img': 'img/s6.jpeg',
        'title': 'コンサルティング',
        'sum': 'Web全般のお悩みを気軽にご相談ください。'
    },
]
const serviceContainer = document.querySelector('.service-container');
for (let i = 0; i < service.length; i++) {
    serviceContainer.innerHTML += `<div class="service-item txt-ctr">
    <img src="${service[i].img}" alt="">
    <div class="desc">
    <h4>${service[i].title}</h4>
    <p>${service[i].sum}</p>
    <a href="#contact">お問い合せへ</a>
    </div>
</div>`
}



let observer = new IntersectionObserver(reveal);

sections.forEach(section => {
    observer.observe(section);
})

function reveal(entries) {
    entries.forEach(entry => {
        entry.target.classList.add('reveal', entry.isIntersecting);
        // observer.unobserve(entry.target);
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