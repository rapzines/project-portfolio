const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/NAV CLOSE.svg"
    } else {
        navBtnImg.src = "./img/icons/NAV.svg"
    }

}


AOS.init({
    once:true
});