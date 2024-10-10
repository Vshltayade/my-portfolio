const line = document.getElementsByClassName('line')[0];
const about = document.getElementById('about');
const body = document.getElementsByTagName('body')[0];
const logoEdu = document.getElementsByClassName('logo-edu')[0];
const logoExp = document.getElementsByClassName('logo-exp')[0];
const logoSkl = document.getElementsByClassName('logo-skl')[0];
const logoProj = document.getElementsByClassName('logo-proj')[0];
const headerLinks = document.querySelectorAll('header a');
const eduStyle = document.querySelectorAll('.education-details div');
const expStyle = document.querySelector('.experience-details');
const sklStyle = document.querySelector('.skill-item');
const projStyle = document.querySelector('.projects-items');
const leftBtn = document.getElementById('get-left');
const rightBtn = document.getElementById('get-right');

let lineHeight = line.getAttribute('style');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        let h = window.scrollY + lineHeight + 500;
        line.setAttribute('style', `height:${h}px`);

        h < 900 ? about.style.opacity = 1 : about.style.opacity = 0;
        
        h > 880 ? logoEdu.style.display = 'block' : logoEdu.style.display = 'none';
        
        h > 1600 ? logoExp.style.display = 'block' : logoExp.style.display = 'none';

        h > 2350 ? logoSkl.style.display = 'block' : logoSkl.style.display = 'none';

        h > 3050 ? logoProj.style.display = 'block' : logoProj.style.display = 'none';
        
        h > 830 && h < 1480 ? eduStyle.item(0).style.opacity = 1 : eduStyle.item(0).style.opacity = 0;
        h > 950 && h < 1600 ? eduStyle.item(1).style.opacity = 1 : eduStyle.item(1).style.opacity = 0;
        h > 1160 && h < 1780 ? eduStyle.item(2).style.opacity = 1 : eduStyle.item(2).style.opacity = 0;

        h > 1580 && h < 2300 ? expStyle.style.opacity = 1 : expStyle.style.opacity = 0;

        h > 2500 && h < 3200 ? sklStyle.style.opacity = 1 : sklStyle.style.opacity = 0;

        h > 3100 && h < 3500 ? projStyle.style.opacity = 1 : projStyle.style.opacity = 0;
    }
});


headerLinks.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(ele.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let i = 1;
rightBtn.addEventListener('click', () => {
    i++;
    if(i>5) i=1;
    projStyle.children.item(1).children.item(0).setAttribute('src', `../Assests/proj${i}.jpg`);
});

leftBtn.addEventListener('click', () => {
    i--;
    if(i<1) i=5;
    projStyle.children.item(1).children.item(0).setAttribute('src', `../Assests/proj${i}.jpg`);
    
});

projStyle.children.item(1).children.item(0).addEventListener('click', (e) => {
    if(e.target.getAttribute('src').includes('1')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/Tech-Shop/');
    if(e.target.getAttribute('src').includes('2')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/food-cart/');
    if(e.target.getAttribute('src').includes('3')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/dice-play/');
    if(e.target.getAttribute('src').includes('4')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/Real-Time-Analog-Clock/');
    if(e.target.getAttribute('src').includes('5')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/to-do-list/');
});

// let i=0;
// setInterval(() => {
//     i++;
//     projStyle.children.item(0).children.item(0).setAttribute('src', `../Assests/proj${i}.jpg`);
//     projStyle.children.item(0).children.item(0).addEventListener('click', (e) => {
//         if(e.target.getAttribute('src').includes('1')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/Tech-Shop/');
//         if(e.target.getAttribute('src').includes('2')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/food-cart/');
//         if(e.target.getAttribute('src').includes('3')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/dice-play/');
//         if(e.target.getAttribute('src').includes('4')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/Real-Time-Analog-Clock/');
//         if(e.target.getAttribute('src').includes('5')) e.target.parentElement.setAttribute('href', 'https://vshltayade.github.io/to-do-list/');
//     })
//     if(i>=5) i=0;
// },3000);