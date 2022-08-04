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

let fontSize = 16; 
let main = document.getElementById("EntireText");

fontBig.addEventListener("click", function(){
    main.style.setProperty("--fontsize", fontSize + "px");
    fontSize++;
})

fontSmall.addEventListener("click", function(){
    main.style.setProperty("--fontsize", fontSize + "px");
    fontSize--;
})