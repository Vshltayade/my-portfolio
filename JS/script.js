const line = document.getElementsByClassName('line')[0];
const body = document.getElementsByTagName('body')[0];
const logoEdu = document.getElementsByClassName('logo-edu')[0];
const logoExp = document.getElementsByClassName('logo-exp')[0];
const headerLinks = document.querySelectorAll('header a');

let lineHeight = line.getAttribute('style');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        let h = window.scrollY + lineHeight + 500;
        line.setAttribute('style', `height:${h}px`);
        
        h > 880 ? logoEdu.style.display = 'block' : logoEdu.style.display = 'none';
        h > 1600 ? logoExp.style.display = 'block' : logoExp.style.display = 'none';
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