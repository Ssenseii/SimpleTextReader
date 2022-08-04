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
