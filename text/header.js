const headerTop = document.querySelector('.header__right-top');
const headerBot = document.querySelector('.header__right-bot')
const headerLogo = document.querySelector('.header__logo')
const mainHeader = document.querySelector('.header')

window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        headerTop.style = ' top: -100px;'
        headerBot.style = 'top: -100px;'
        headerLogo.style = 'width: 50px; height: 50px;'
        mainHeader.style = 'top: -90px;'
    } else {
        headerTop.style = 'top: 0px;'
        headerBot.style = 'top: 0px;'
        headerLogo.style = 'width: 148px; height: 148px;'
        mainHeader.style = 'top: 0px;'
    }
})