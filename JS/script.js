const line = document.getElementsByClassName('line')[0];
const about = document.getElementById('about');
const body = document.getElementsByTagName('body')[0];
const logoEdu = document.getElementsByClassName('logo-edu')[0];
const logoExp = document.getElementsByClassName('logo-exp')[0];
const logoSkl = document.getElementsByClassName('logo-skl')[0];
const headerLinks = document.querySelectorAll('header a');
const eduStyle = document.querySelectorAll('.education-details div');
const expStyle = document.querySelector('.experience-details');
const sklStyle = document.querySelector('.skill-item');

let lineHeight = line.getAttribute('style');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        let h = window.scrollY + lineHeight + 500;
        line.setAttribute('style', `height:${h}px`);

        h < 900 ? about.style.opacity = 1 : about.style.opacity = 0;
        
        h > 880 ? logoEdu.style.display = 'block' : logoEdu.style.display = 'none';
        
        h > 1600 ? logoExp.style.display = 'block' : logoExp.style.display = 'none';

        h > 2350 ? logoSkl.style.display = 'block' : logoSkl.style.display = 'none';
        
        h > 830 && h < 1480 ? eduStyle.item(0).style.opacity = 1 : eduStyle.item(0).style.opacity = 0;
        h > 950 && h < 1600 ? eduStyle.item(1).style.opacity = 1 : eduStyle.item(1).style.opacity = 0;
        h > 1160 && h < 1780 ? eduStyle.item(2).style.opacity = 1 : eduStyle.item(2).style.opacity = 0;

        h > 1580 && h < 2300 ? expStyle.style.opacity = 1 : expStyle.style.opacity = 0;

        h > 2500 && h < 2800 ? sklStyle.style.opacity = 1 : sklStyle.style.opacity = 0;
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