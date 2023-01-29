document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.overflowX = 'hidden'
document.body.style.position = 'relative'
document.body.style.background = '#fff'

const header = document.createElement("header")
header.classList.add("header")
header.style.maxWidth = '1366px'
header.style.margin = '0 auto'
header.style.padding = '30px 20px'
header.style.display = 'flex'
header.style.flexWrap = 'wrap'
header.style.justifyContent = 'space-between'
header.style.alignItems = 'center'
document.body.appendChild(header)

const logoDiv = document.createElement("div")
logoDiv.classList.add("logo")
header.appendChild(logoDiv)
const logoDivClass = document.querySelector('.logo')
logoDivClass.style.maxWidth = '170px'
logoDivClass.style.maxHeight = '170px'
logoDivClass.style.display = 'inline-block'

const logoDivImg = document.createElement("img")
logoDivImg.setAttribute("src", "img/logo.jpg")
logoDivImg.setAttribute("alt", "")
logoDiv.appendChild(logoDivImg)
const logoImgClass = document.querySelector('.logo img')
logoImgClass.style.width = '100%'
logoImgClass.style.height = '100%'
logoImgClass.style.objectFit = 'contain'

/* Menu */

const navTagCreate = document.createElement("nav")
navTagCreate.classList.add("main__menu")
header.appendChild(navTagCreate)


const ulNavCreate = document.createElement("ul")
ulNavCreate.style.padding = '0'
ulNavCreate.style.listStyleType = 'none'
ulNavCreate.style.display = 'flex'
ulNavCreate.style.flexWrap = 'wrap'
navTagCreate.appendChild(ulNavCreate)

const liNavCreate1 = document.createElement("li")
ulNavCreate.appendChild(liNavCreate1)
/* Link create */
const linkLiCreate = document.createElement("a")
linkLiCreate.setAttribute("href", "#")
linkLiCreate.classList.add("link__nenu")
linkLiCreate.innerHTML = "Home"
liNavCreate1.appendChild(linkLiCreate)

const liNavCreate2 = document.createElement("li")
ulNavCreate.appendChild(liNavCreate2)
/* Link create */
const linkLiCreate2 = document.createElement("a")
linkLiCreate2.setAttribute("href", "#")
linkLiCreate2.classList.add("link__nenu")
linkLiCreate2.innerHTML = "Destinations"
liNavCreate2.appendChild(linkLiCreate2)

const liNavCreate3 = document.createElement("li")
ulNavCreate.appendChild(liNavCreate3)
/* Link create */
const linkLiCreate3 = document.createElement("a")
linkLiCreate3.setAttribute("href", "#")
linkLiCreate3.classList.add("link__nenu")
linkLiCreate3.innerHTML = "About"
liNavCreate3.appendChild(linkLiCreate3)

const liNavCreate4 = document.createElement("li")
ulNavCreate.appendChild(liNavCreate4)
/* Link create */
const linkLiCreate4 = document.createElement("a")
linkLiCreate4.setAttribute("href", "#")
linkLiCreate4.classList.add("link__nenu")
linkLiCreate4.innerHTML = "Partner"
liNavCreate4.appendChild(linkLiCreate4)


const linkMenuStyle = document.querySelectorAll('.link__nenu')
for (let linkMenuStyles of linkMenuStyle){
    linkMenuStyles.style.textDecoration = 'none'
    linkMenuStyles.style.fontFamily = 'Inter, sans-serif'
    linkMenuStyles.style.fontSize = '16px'
    linkMenuStyles.style.fontWeight = '400'
    linkMenuStyles.style.color = '#B8BECD'
    linkMenuStyles.style.padding = '6px'
    linkMenuStyles.style.margin = '0 20px'
    linkMenuStyles.style.transition = '0.4s'
    linkMenuStyles.onmouseover = function(event) {
        let target = event.target;
        target.style.color = '#FB8F1D'
    };
    linkMenuStyles.onmouseout = function(event) {
        let target = event.target;
        target.style.color = '#B8BECD'
    }; 
}

/* ##### */

/* Button in header */

const btnWrapp = document.createElement("div")
btnWrapp.classList.add("wrapp__btn")
btnWrapp.style.display = 'flex'
header.appendChild(btnWrapp)


const loginBtn = document.createElement("div")
loginBtn.classList.add("login__btn")
loginBtn.innerHTML = 'Login'
loginBtn.style.fontFamily = 'Inter, sans-serif'
loginBtn.style.fontWeight = '500'
loginBtn.style.fontSize = '15px'
loginBtn.style.color = '#FB8F1D'
loginBtn.style.border = '1px solid #FB8F1D'
loginBtn.style.borderRadius = '8px'
loginBtn.style.padding = '11px 47px'
loginBtn.style.margin = '0 18px 0 0'
loginBtn.style.transition = '0.4s'
loginBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = '#FB8F1D';
    target.style.color = '#fff'
};

loginBtn.onmouseout = function(event) {
let target = event.target;
target.style.background = '';
target.style.color = '#FB8F1D'
};
btnWrapp.appendChild(loginBtn)




const registerBtn = document.createElement("div")
registerBtn.classList.add("register__btn")
registerBtn.innerHTML = 'Register'
registerBtn.style.background = '#FB8F1D'
registerBtn.style.fontFamily = 'Inter, sans-serif'
registerBtn.style.fontWeight = '500'
registerBtn.style.fontSize = '15px'
registerBtn.style.color = '#fff'
registerBtn.style.borderRadius = '8px'
registerBtn.style.padding = '11px 48px'
registerBtn.style.border = '1px solid transparent'
registerBtn.style.transition = '0.4s'
registerBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = '#fff';
    target.style.color = '#FB8F1D'
    target.style.border = '1px solid #FB8F1D'
};
registerBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '#FB8F1D';
    target.style.color = '#fff'
    target.style.border = '1px solid transparent' 
};
btnWrapp.appendChild(registerBtn)



const sectionExplore = document.createElement("section")
sectionExplore.style.maxWidth = '1366px'
sectionExplore.style.padding = '0 20px'
sectionExplore.style.margin = '0 auto'
document.body.appendChild(sectionExplore)


const wrappExplore = document.createElement("div")
sectionExplore.appendChild(wrappExplore)

const sectionExploreH1 = document.createElement("h1")
sectionExploreH1.innerHTML = 'Explore and Travel'
sectionExploreH1.style.fontFamily = 'Playfair Display, sans-serif'
sectionExploreH1.style.fontWeight = '700'
sectionExploreH1.style.fontSize = '64px'
sectionExploreH1.style.color = '#202336'
sectionExploreH1.style.maxWidth = '360px'
wrappExplore.appendChild(sectionExploreH1)


const exploreForm = document.createElement("div")
exploreForm.style.display = 'flex'
exploreForm.style.flexDirection = 'column'
exploreForm.style.alignItems = 'flex-start'
wrappExplore.appendChild(exploreForm)



const exploreFormTitle = document.createElement("p")
exploreFormTitle.innerHTML = 'Holiday finder'
exploreFormTitle.style.fontFamily = 'Inter, sans-serif'
exploreFormTitle.style.fontWeight = '600'
exploreFormTitle.style.fontSize = '22px'
exploreFormTitle.style.color = '#202336'
exploreFormTitle.style.borderBottom = '2px solid #202336'
exploreFormTitle.style.display = 'inline-block'
exploreFormTitle.style.padding = '0 0 10px 0'
exploreForm.appendChild(exploreFormTitle)


const selectExploreForm = document.createElement("select")
exploreForm.appendChild(selectExploreForm)

const optionExploreSelect1 = document.createElement("option")
optionExploreSelect1.innerHTML = 'Location'
selectExploreForm.appendChild(optionExploreSelect1)

const optionExploreSelect2 = document.createElement("option")
optionExploreSelect2.innerHTML = 'Location2'
selectExploreForm.appendChild(optionExploreSelect2)

const optionExploreSelect3 = document.createElement("option")
optionExploreSelect3.innerHTML = 'Location3'
selectExploreForm.appendChild(optionExploreSelect3)


















// const popupOverlay = document.createElement("div")
// popupOverlay.classList.add('popup__overlay')
// popupOverlay.style.background = 'rgba(184, 190, 205, 0.5)'
// popupOverlay.style.position = 'fixed'
// popupOverlay.style.width = '100%'
// popupOverlay.style.height = '100%'
// popupOverlay.style.top = '0'
// popupOverlay.style.zIndex = '1'
// document.body.appendChild(popupOverlay)


// const formWrapp = document.createElement("div")
// formWrapp.style.display = 'flex'
// formWrapp.style.flexDirection = 'colum'
// formWrapp.style.justifyContent = 'center'
// formWrapp.style.maxWidth = '300px'
// formWrapp.style.width = '100%'
// formWrapp.style.margin = '5px auto 0 auto'
// formWrapp.style.background = '#1bbf83'
// popupOverlay.appendChild(formWrapp)

// const formInput = document.createElement("input")
// formInput.setAttribute("type", "text")
// formInput.setAttribute("placeholder", "Имя")
// formInput.style.border = '0'
// formInput.style.borderRadius = '8px'
// formInput.style.padding = '5px 43px 5px 13px'
// formWrapp.appendChild(formInput)