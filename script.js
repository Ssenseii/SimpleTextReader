let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody ['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

        document.getElementById('progressBar').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processScroll);


// accessibility

function accessibility() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}




// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.header__access-button')) {
//         var dropdowns = document.getElementsByClassName("header__access-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }