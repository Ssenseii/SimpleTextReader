let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody ['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

        document.getElementById('progressBar').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processScroll);

let accessBar = document.getElementById("accessBar");
let accessBtn = document.getElementById("accessBtn");
let closeBtn = document.getElementById("closeBtn");

accessBtn.addEventListener("click", function(){
    accessBar.classList.add("reveal");
    accessBar.classList.remove("hideBar");

    setTimeout(() => {
        accessBar.style.display = "flex";
        accessBtn.style.display = "none";
        closeBtn.style.display = "block";
    }, 300);
})

closeBtn.addEventListener("click", function(){
    accessBar.classList.add("hideBar");
    accessBar.classList.remove("reveal");

    setTimeout(() => {
        accessBar.style.display = "none";
        accessBtn.style.display = "block";
        closeBtn.style.display = "none";
    }, 200);
})


/// access buttons
let fontSmall = document.getElementById("fontSmall");
let fontBig = document.getElementById("fontBig");
let BGblack = document.getElementById("BGblack");
let BGwhite = document.getElementById("BGwhite");
let BGskin = document.getElementById("BGskin");
let BGgray = document.getElementById("BGgray");
let lineHeightSmall = document.getElementById("lineHeightSmall");
let lineHeightBig = document.getElementById("lineHeightBig");
let font_TNR = document.getElementById("font_TNR");
let font_U = document.getElementById("font_U");
let font_M = document.getElementById("font_M");
let font_PS = document.getElementById("font_PS");

let background = document.getElementById("background");
let headerTitle = document.getElementById("headerTitle");
let main = document.getElementById("EntireText");

let fontSize = 24; 
let lineheight = 1.5;
const TimesNewRoman = "Times New Roman";
const Mont = "'Montserrat', sans-serif";
const Ush = "'Uchen', serif";
const PS = "'Public Sans', sans-serif";


fontBig.addEventListener("click", function(){
    main.style.setProperty("--fontsize", fontSize + "px");
    fontSize = fontSize + 2;
})

fontSmall.addEventListener("click", function(){
    main.style.setProperty("--fontsize", fontSize + "px");
    fontSize = fontSize - 2;
})

BGblack.addEventListener("click", function(){
    background.style.backgroundColor = "#000";
    main.style.color = "#fff"
    headerTitle.style.color = "#fff"
})

BGwhite.addEventListener("click", function(){
    background.style.backgroundColor = "#fff";
    main.style.color = "#000"
    headerTitle.style.color = "#000"
})

BGgray.addEventListener("click", function(){
    background.style.backgroundColor = "#777";
    main.style.color = "#fff"
    headerTitle.style.color = "#fff"
})

BGskin.addEventListener("click", function(){
    background.style.backgroundColor = "#eccf8b";
    main.style.color = "#000"
    headerTitle.style.color = "#000"
})

lineHeightSmall.addEventListener("click", function () {
    main.style.setProperty("--lineheight", lineheight);
    lineheight = lineheight - 0.2;
})

lineHeightBig.addEventListener("click", function () {
    main.style.setProperty("--lineheight", lineheight);
    lineheight = lineheight + 0.2;
})

font_TNR.addEventListener("click", function(){
    main.style.setProperty("--fontfamily", TimesNewRoman);
})

font_U.addEventListener("click", function(){
    main.style.setProperty("--fontfamily", Ush);
})

font_M.addEventListener("click", function(){
    main.style.setProperty("--fontfamily", Mont);
})

font_PS.addEventListener("click", function(){
    main.style.setProperty("--fontfamily", PS);
})


