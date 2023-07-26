
//nav bar scroll down//

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



//show and hide faq ans//

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
    })
})   


//show/hide nav menu//
const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click' , () => {
    menu.style.display = "flex";  
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
}) 

// CLOSE NAV MENU   

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)





