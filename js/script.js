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
sectionExplore.style.display = 'flex'
sectionExplore.style.flexWrap = 'wrap'
sectionExplore.style.justifyContent = 'space-between'
sectionExplore.style.maxWidth = '1366px'
sectionExplore.style.padding = '45px 20px'
sectionExplore.style.margin = '0 auto'
document.body.appendChild(sectionExplore)


const wrappExplore = document.createElement("div")
wrappExplore.style.maxWidth = '558px'
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


const wrapperSelect = document.createElement("div")
wrapperSelect.style.display = 'flex'
wrapperSelect.style.flexWrap = 'wrap'
wrapperSelect.style.justifyContent = 'flex-start'
wrapperSelect.style.maxWidth = '506px'
wrappExplore.appendChild(wrapperSelect)



const selectExploreForm = document.createElement("select")
selectExploreForm.style.fontFamily = 'Inter, sans-serif'
selectExploreForm.style.fontWeight = '400'
selectExploreForm.style.fontSize = '15px'
selectExploreForm.style.color = '#D7D7D7'
selectExploreForm.style.border = '1px solid #D7D7D7'
selectExploreForm.style.borderRadius = '8px'
selectExploreForm.style.outline = 'none'
selectExploreForm.style.padding = '14px 64px'
selectExploreForm.style.margin = '15px'
wrapperSelect.appendChild(selectExploreForm)

const optionExploreSelectLocation1 = document.createElement("option")
optionExploreSelectLocation1.innerHTML = 'Location'
selectExploreForm.appendChild(optionExploreSelectLocation1)

const optionExploreSelectLocation2 = document.createElement("option")
optionExploreSelectLocation2.innerHTML = 'Location2'
selectExploreForm.appendChild(optionExploreSelectLocation2)

const optionExploreSelectLocation3 = document.createElement("option")
optionExploreSelectLocation3.innerHTML = 'Location3'
selectExploreForm.appendChild(optionExploreSelectLocation3)



const selectExploreFormActivity = document.createElement("select")
selectExploreFormActivity.style.fontFamily = 'Inter, sans-serif'
selectExploreFormActivity.style.fontWeight = '400'
selectExploreFormActivity.style.fontSize = '15px'
selectExploreFormActivity.style.color = '#D7D7D7'
selectExploreFormActivity.style.border = '1px solid #D7D7D7'
selectExploreFormActivity.style.borderRadius = '8px'
selectExploreFormActivity.style.outline = 'none'
selectExploreFormActivity.style.padding = '14px 68px'
selectExploreFormActivity.style.margin = '15px'
wrapperSelect.appendChild(selectExploreFormActivity)

const optionExploreSelectActivity1 = document.createElement("option")
optionExploreSelectActivity1.innerHTML = 'Activity'
selectExploreFormActivity.appendChild(optionExploreSelectActivity1)

const optionExploreSelectActivity2 = document.createElement("option")
optionExploreSelectActivity2.innerHTML = 'Activity2'
selectExploreFormActivity.appendChild(optionExploreSelectActivity2)

const optionExploreSelectActivity3 = document.createElement("option")
optionExploreSelectActivity3.innerHTML = 'Activity3'
selectExploreFormActivity.appendChild(optionExploreSelectActivity3)



const selectExploreFormGrade = document.createElement("select")
selectExploreFormGrade.style.fontFamily = 'Inter, sans-serif'
selectExploreFormGrade.style.fontWeight = '400'
selectExploreFormGrade.style.fontSize = '15px'
selectExploreFormGrade.style.color = '#D7D7D7'
selectExploreFormGrade.style.border = '1px solid #D7D7D7'
selectExploreFormGrade.style.borderRadius = '8px'
selectExploreFormGrade.style.outline = 'none'
selectExploreFormGrade.style.padding = '14px 73px'
selectExploreFormGrade.style.margin = '15px'
wrapperSelect.appendChild(selectExploreFormGrade)

const optionExploreSelectGrade1 = document.createElement("option")
optionExploreSelectGrade1.innerHTML = 'Grade'
selectExploreFormGrade.appendChild(optionExploreSelectGrade1)

const optionExploreSelectGrade2 = document.createElement("option")
optionExploreSelectGrade2.innerHTML = 'Grade1'
selectExploreFormGrade.appendChild(optionExploreSelectGrade2)

const optionExploreSelectGrade3 = document.createElement("option")
optionExploreSelectGrade3.innerHTML = 'Grade2'
selectExploreFormGrade.appendChild(optionExploreSelectGrade3)



const selectExploreFormDate = document.createElement("select")
selectExploreFormDate.style.fontFamily = 'Inter, sans-serif'
selectExploreFormDate.style.fontWeight = '400'
selectExploreFormDate.style.fontSize = '15px'
selectExploreFormDate.style.color = '#D7D7D7'
selectExploreFormDate.style.border = '1px solid #D7D7D7'
selectExploreFormDate.style.borderRadius = '8px'
selectExploreFormDate.style.outline = 'none'
selectExploreFormDate.style.padding = '14px 78px'
selectExploreFormDate.style.margin = '15px'
wrapperSelect.appendChild(selectExploreFormDate)

const optionExploreSelectDate1 = document.createElement("option")
optionExploreSelectDate1.innerHTML = 'Date'
selectExploreFormDate.appendChild(optionExploreSelectDate1)

const optionExploreSelectDate2 = document.createElement("option")
optionExploreSelectDate2.innerHTML = 'Date1'
selectExploreFormDate.appendChild(optionExploreSelectDate2)

const optionExploreSelectDate3 = document.createElement("option")
optionExploreSelectDate3.innerHTML = 'Date2'
selectExploreFormDate.appendChild(optionExploreSelectDate3)


const exploreBtn = document.createElement("div")
exploreBtn.innerHTML = 'Explore'
exploreBtn.style.background = '#fb8f1d'
exploreBtn.style.fontFamily = 'Mulish, sans-serif'
exploreBtn.style.fontWeight = '700'
exploreBtn.style.fontSize = '17px'
exploreBtn.style.color = '#fff'
exploreBtn.style.padding = '15px 65px'
exploreBtn.style.margin = '15px 0 0 15px'
exploreBtn.style.borderRadius = '8px'
exploreBtn.style.border = '1px solid transparent'
exploreBtn.style.transition = '0.4s'
exploreBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = '#fff';
    target.style.color = '#FB8F1D'
    target.style.border = '1px solid #FB8F1D'
};
exploreBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '#FB8F1D';
    target.style.color = '#fff'
};
wrapperSelect.appendChild(exploreBtn)


const wrappForImage = document.createElement("div")
wrappForImage.style.maxWidth = '700px'
wrappForImage.style.maxHeight = '640px'
sectionExplore.appendChild(wrappForImage)

const wrappImage = document.createElement("img")
wrappImage.setAttribute("src", "img/f1.jpg")
wrappImage.setAttribute("alt", "")
wrappImage.style.width = '100%'
wrappImage.style.height = '100%'
wrappImage.style.objectFit = 'contain'
wrappForImage.appendChild(wrappImage)



/* Section Way Explore */
const sectionWayExplore = document.createElement("section")
sectionWayExplore.style.maxWidth = '1366px'
sectionWayExplore.style.margin = '0 auto'
sectionWayExplore.style.padding = '45px 20px'
sectionWayExplore.style.display = 'flex'
sectionWayExplore.style.justifyContent = 'space-between'
sectionWayExplore.style.alignItems = 'center'
sectionWayExplore.style.flexWrap = 'wrap'
document.body.appendChild(sectionWayExplore)

const wrappImageForWay = document.createElement("div")
wrappImageForWay.style.maxWidth = '660px'
wrappImageForWay.style.maxHeight = '535px'
sectionWayExplore.appendChild(wrappImageForWay)

const imageForWrappWay = document.createElement("img")
imageForWrappWay.setAttribute("src", "img/f2.jpg")
imageForWrappWay.setAttribute("alt", "")
imageForWrappWay.style.width = '100%'
imageForWrappWay.style.height = '100%'
imageForWrappWay.style.objectFit = 'contain'
wrappImageForWay.appendChild(imageForWrappWay)


const wrappWayText = document.createElement("div")
wrappWayText.style.maxWidth = '482px'
sectionWayExplore.appendChild(wrappWayText)

const wayTextTitle = document.createElement("p")
wayTextTitle.innerHTML = 'A new way to explore the world '
wayTextTitle.style.fontFamily = 'Playfair Display, sans-serif'
wayTextTitle.style.fontWeight = '700'
wayTextTitle.style.fontSize = '36px'
wayTextTitle.style.color = '#000'
wrappWayText.appendChild(wayTextTitle)

const wayTextText = document.createElement("p")
wayTextText.innerHTML = 'For decades travellers have reached for Lonely \
Planet books when looking to plan and execute their perfect trip, \
but now, they can also let Lonely Planet Experiences lead the way'
wayTextText.style.fontFamily = 'Mulish, sans-serif'
wayTextText.style.fontWeight = '300'
wayTextText.style.fontSize = '17px'
wayTextText.style.color = '#7D7987'
wrappWayText.appendChild(wayTextText)


const wayTextBtn = document.createElement("a")
wayTextBtn.setAttribute("href", "#")
wayTextBtn.innerHTML = 'Learn more'
wayTextBtn.style.fontFamily = 'Inter, sans-serif'
wayTextBtn.style.fontWeight = '600'
wayTextBtn.style.fontSize = '16px'
wayTextBtn.style.color = '#fff'
wayTextBtn.style.background = '#FB8F1D'
wayTextBtn.style.borderRadius = '8px'
wayTextBtn.style.display = 'inline-block'
wayTextBtn.style.textDecoration = 'none'
wayTextBtn.style.padding = '14px 39px'
wayTextBtn.style.margin = '39px 0 0 0'
wayTextBtn.style.transition = '0.4s'
wayTextBtn.style.border = '1px solid transparent' 
wayTextBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = '#fff';
    target.style.color = '#FB8F1D'
    target.style.border = '1px solid #FB8F1D'
};
wayTextBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '#FB8F1D';
    target.style.color = '#fff'
};
wrappWayText.appendChild(wayTextBtn)



const sectionFeatured = document.createElement("section")
sectionFeatured.style.maxWidth = '1366px'
sectionFeatured.style.margin = '0 auto'
sectionFeatured.style.display = 'flex'
sectionFeatured.style.flexDirection = 'column'
sectionFeatured.style.padding = '45px 20px'
document.body.appendChild(sectionFeatured)


const wrappFeaturedItems = document.createElement("div")
wrappFeaturedItems.style.display = 'flex'
wrappFeaturedItems.style.flexWrap = 'wrap'
wrappFeaturedItems.style.justifyContent = 'space-between'
wrappFeaturedItems.style.width = '100%'
sectionFeatured.appendChild(wrappFeaturedItems)

const featuredTitle = document.createElement("div")
featuredTitle.innerHTML = 'Featured destinations'
featuredTitle.style.fontFamily = 'Playfair Display, sans-serif'
featuredTitle.style.fontWeight = '700'
featuredTitle.style.fontSize = '36px'
featuredTitle.style.color = '#000'
wrappFeaturedItems.appendChild(featuredTitle)


const linkFeatured = document.createElement("a")
linkFeatured.setAttribute("href", "#")
linkFeatured.innerHTML = 'View all'
linkFeatured.style.fontFamily = 'Inter, sans-serif'
linkFeatured.style.fontWeight = '600'
linkFeatured.style.fontSize = '17px'
linkFeatured.style.color = '#FB8F1D'
linkFeatured.style.textDecoration = 'none'
wrappFeaturedItems.appendChild(linkFeatured)


const linkVector = document.createElement("img")
linkVector.setAttribute("src", "img/v1.png")
linkVector.style.margin = '0 0 0 11px'
linkFeatured.appendChild(linkVector)



const wrapperFeatured = document.createElement("div")
wrapperFeatured.style.padding = '55px 0 55px 0'
wrapperFeatured.style.display = 'flex'
wrapperFeatured.style.flexWrap = 'wrap'
wrapperFeatured.style.justifyContent = 'space-between'
sectionFeatured.appendChild(wrapperFeatured)


const cards = document.createElement("div")
cards.style.maxWidth = '262px'
cards.style.maxHeight = '335px'
cards.style.overflow = 'hidden'
cards.style.borderRadius = '8px'
cards.style.position = 'relative'
wrapperFeatured.appendChild(cards)

const cardsTextWrapp = document.createElement("div")
cardsTextWrapp.style.position = 'absolute'
cardsTextWrapp.style.bottom = '0'
cardsTextWrapp.style.left = '0'
cardsTextWrapp.style.background = '#fff'
cardsTextWrapp.style.maxWidth = '108px'
cardsTextWrapp.style.borderTopRightRadius = '8px'
cardsTextWrapp.style.padding = '8px 12px'
cards.appendChild(cardsTextWrapp)
const cardsTextContainer = document.createElement("div")
cardsTextContainer.innerHTML = 'Raja Ampat'
cardsTextContainer.style.fontFamily = 'Inter, sans-serif'
cardsTextContainer.style.fontWeight = '600'
cardsTextContainer.style.fontSize = '17px'
cardsTextContainer.style.color = '#042521'
cardsTextWrapp.appendChild(cardsTextContainer)
const cardsSpanContainer = document.createElement("span")
cardsSpanContainer.innerHTML = 'Indonesia'
cardsSpanContainer.style.fontFamily = 'Inter, sans-serif'
cardsSpanContainer.style.fontWeight = '300'
cardsSpanContainer.style.fontSize = '17px'
cardsSpanContainer.style.color = '#7D7987;'
cardsTextWrapp.appendChild(cardsSpanContainer)


const cardsImg = document.createElement("img")
cardsImg.setAttribute("src", "img/z1.png")
cardsImg.style.width = '100%'
cardsImg.style.height = '100%'
cardsImg.style.objectFit = 'contain'
cards.appendChild(cardsImg)



const cards2 = document.createElement("div")
cards2.style.maxWidth = '262px'
cards2.style.maxHeight = '335px'
cards2.style.overflow = 'hidden'
cards2.style.borderRadius = '8px'
cards2.style.position = 'relative'
wrapperFeatured.appendChild(cards2)

const cardsTextWrapp2 = document.createElement("div")
cardsTextWrapp2.style.position = 'absolute'
cardsTextWrapp2.style.bottom = '0'
cardsTextWrapp2.style.left = '0'
cardsTextWrapp2.style.background = '#fff'
cardsTextWrapp2.style.maxWidth = '108px'
cardsTextWrapp2.style.borderTopRightRadius = '8px'
cardsTextWrapp2.style.padding = '8px 12px'
cards2.appendChild(cardsTextWrapp2)
const cardsTextContainer2 = document.createElement("div")
cardsTextContainer2.innerHTML = 'Fanjingshan'
cardsTextContainer2.style.fontFamily = 'Inter, sans-serif'
cardsTextContainer2.style.fontWeight = '600'
cardsTextContainer2.style.fontSize = '17px'
cardsTextContainer2.style.color = '#042521'
cardsTextWrapp2.appendChild(cardsTextContainer2)
const cardsSpanContainer2 = document.createElement("span")
cardsSpanContainer2.innerHTML = 'China'
cardsSpanContainer2.style.fontFamily = 'Inter, sans-serif'
cardsSpanContainer2.style.fontWeight = '300'
cardsSpanContainer2.style.fontSize = '17px'
cardsSpanContainer2.style.color = '#7D7987;'
cardsTextWrapp2.appendChild(cardsSpanContainer2)

const cardsImg2 = document.createElement("img")
cardsImg2.setAttribute("src", "img/z2.png")
cardsImg2.style.width = '100%'
cardsImg2.style.height = '100%'
cardsImg2.style.objectFit = 'contain'
cards2.appendChild(cardsImg2)



const cards3 = document.createElement("div")
cards3.style.maxWidth = '262px'
cards3.style.maxHeight = '335px'
cards3.style.overflow = 'hidden'
cards3.style.borderRadius = '8px'
cards3.style.position = 'relative'
wrapperFeatured.appendChild(cards3)

const cardsTextWrapp3 = document.createElement("div")
cardsTextWrapp3.style.position = 'absolute'
cardsTextWrapp3.style.bottom = '0'
cardsTextWrapp3.style.left = '0'
cardsTextWrapp3.style.background = '#fff'
cardsTextWrapp3.style.maxWidth = '108px'
cardsTextWrapp3.style.borderTopRightRadius = '8px'
cardsTextWrapp3.style.padding = '8px 12px'
cards3.appendChild(cardsTextWrapp3)
const cardsTextContainer3 = document.createElement("div")
cardsTextContainer3.innerHTML = 'Vevey'
cardsTextContainer3.style.fontFamily = 'Inter, sans-serif'
cardsTextContainer3.style.fontWeight = '600'
cardsTextContainer3.style.fontSize = '17px'
cardsTextContainer3.style.color = '#042521'
cardsTextWrapp3.appendChild(cardsTextContainer3)
const cardsSpanContainer3 = document.createElement("span")
cardsSpanContainer3.innerHTML = 'Switzerland'
cardsSpanContainer3.style.fontFamily = 'Inter, sans-serif'
cardsSpanContainer3.style.fontWeight = '300'
cardsSpanContainer3.style.fontSize = '17px'
cardsSpanContainer3.style.color = '#7D7987;'
cardsTextWrapp3.appendChild(cardsSpanContainer3)


const cardsImg3 = document.createElement("img")
cardsImg3.setAttribute("src", "img/z3.png")
cardsImg3.style.width = '100%'
cardsImg3.style.height = '100%'
cardsImg3.style.objectFit = 'contain'
cards3.appendChild(cardsImg3)



const cards4 = document.createElement("div")
cards4.style.maxWidth = '262px'
cards4.style.maxHeight = '335px'
cards4.style.overflow = 'hidden'
cards4.style.borderRadius = '8px'
cards4.style.position = 'relative'
wrapperFeatured.appendChild(cards4)
const cardsTextWrapp4 = document.createElement("div")
cardsTextWrapp4.style.position = 'absolute'
cardsTextWrapp4.style.bottom = '0'
cardsTextWrapp4.style.left = '0'
cardsTextWrapp4.style.background = '#fff'
cardsTextWrapp4.style.maxWidth = '108px'
cardsTextWrapp4.style.borderTopRightRadius = '8px'
cardsTextWrapp4.style.padding = '8px 12px'
cards4.appendChild(cardsTextWrapp4)
const cardsTextContainer4 = document.createElement("div")
cardsTextContainer4.innerHTML = 'Skadar'
cardsTextContainer4.style.fontFamily = 'Inter, sans-serif'
cardsTextContainer4.style.fontWeight = '600'
cardsTextContainer4.style.fontSize = '17px'
cardsTextContainer4.style.color = '#042521'
cardsTextWrapp4.appendChild(cardsTextContainer4)
const cardsSpanContainer4 = document.createElement("span")
cardsSpanContainer4.innerHTML = 'Montenegro'
cardsSpanContainer4.style.fontFamily = 'Inter, sans-serif'
cardsSpanContainer4.style.fontWeight = '300'
cardsSpanContainer4.style.fontSize = '17px'
cardsSpanContainer4.style.color = '#7D7987;'
cardsTextWrapp4.appendChild(cardsSpanContainer4)

const cardsImg4 = document.createElement("img")
cardsImg4.setAttribute("src", "img/z4.png")
cardsImg4.style.width = '100%'
cardsImg4.style.height = '100%'
cardsImg4.style.objectFit = 'contain'
cards4.appendChild(cardsImg4)


/* Section sunny */


const sectionSunny = document.createElement("section")
sectionSunny.style.maxWidth = '1366px'
sectionSunny.style.margin = '0 auto'
sectionSunny.style.padding = '45px 20px'
sectionSunny.style.display = 'flex'
sectionSunny.style.justifyContent = 'space-between'
sectionSunny.style.flexWrap = 'wrap'
document.body.appendChild(sectionSunny)

const sunnyTextWrapp = document.createElement("div")
sunnyTextWrapp.style.maxWidth = '450px'
sectionSunny.appendChild(sunnyTextWrapp)

const sunnyText = document.createElement("p")
sunnyText.innerHTML = 'Guides by Thousand Sunny'
sunnyText.style.fontFamily = 'Playfair Display, sans-serif'
sunnyText.style.fontWeight = '700'
sunnyText.style.fontSize = '36px'
sunnyText.style.color = '#000'
sunnyTextWrapp.appendChild(sunnyText)


const sunnyTextText = document.createElement("p")
sunnyTextText.innerHTML = 'Packed with tips and advice from our\
on-the-ground experts, our city guides app (iOS and Android) is \
the ultimate resource before and during a trip.'
sunnyTextText.style.fontFamily = 'Mulish, sans-serif'
sunnyTextText.style.fontWeight = '300'
sunnyTextText.style.fontSize = '17px'
sunnyTextText.style.color = '#7D7987'
sunnyTextText.style.lineHeight = '30px'
sunnyTextWrapp.appendChild(sunnyTextText)

const sunnyBtn = document.createElement("a")
sunnyBtn.setAttribute("href", "#")
sunnyBtn.innerHTML = 'Download'
sunnyBtn.style.borderRadius = '8px'
sunnyBtn.style.fontFamily = 'Inter, sans-serif'
sunnyBtn.style.fontWeight = '600'
sunnyBtn.style.fontSize = '16px'
sunnyBtn.style.color = '#fff'
sunnyBtn.style.background = '#FB8F1D'
sunnyBtn.style.textDecoration = 'none'
sunnyBtn.style.padding = '14px 44px'
sunnyBtn.style.display = 'inline-block'
sunnyBtn.style.margin = '39px 0 0 0'
sunnyBtn.style.transition = '0.4s'
sunnyBtn.style.border = '1px solid transparent'
sunnyBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = '#fff';
    target.style.color = '#FB8F1D'
    target.style.border = '1px solid #FB8F1D'
};
sunnyBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '#FB8F1D';
    target.style.color = '#fff'
};
sunnyTextWrapp.appendChild(sunnyBtn)


const sunnyWrappImage = document.createElement("div")
sunnyWrappImage.style.maxWidth = '600px'
sunnyWrappImage.style.maxHeight = '542px'
sectionSunny.appendChild(sunnyWrappImage)

const sunnyImage = document.createElement("img")
sunnyImage.setAttribute("src", "img/f3.png")
sunnyImage.style.width = '100%'
sunnyImage.style.height = '100%'
sunnyImage.style.objectFit = 'contain'
sunnyWrappImage.appendChild(sunnyImage)









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