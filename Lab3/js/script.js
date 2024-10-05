const form = document.getElementById('form');
const table = document.getElementById('table-friends');

const nameInput = document.getElementById('nameInput')
const tgInput = document.getElementById('telegramInput')
const phoneInput = document.getElementById('phoneInput')
const error = document.getElementById('error')

const slider = document.getElementById('slider__inner');
const buttonPrev = document.getElementById('btn_prev');
const buttonNext = document.getElementById('btn_next');

let currentPicture = 0;
slider.style.right = "0px";


buttonPrev.addEventListener("click", (event) => {
    currentPicture = (currentPicture + 6 - 1) % 6;
    moveToPic(currentPicture);
})
buttonNext.addEventListener("click", (event) => {
    currentPicture = (currentPicture + 1) % 6;
    moveToPic(currentPicture);
})

function moveToPic(numberOfPic){
    console.log(numberOfPic);
    slider.style.right = `${currentPicture * 500}px`;
}
function isValidPhone(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}
const checkValid = (item) => {
    return Boolean(item.length);
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    error.innerText = "";
    let newName = nameInput.value;
    let tgLink = tgInput.value;
    let tgParsed = tgLink.split('/');
    let tgId = "@" + tgParsed[tgParsed.length-1];
    let phone = phoneInput.value;

    if(!checkValid(newName)){
        error.innerText = "Поле ФИО не заполнено!";
        return;
    }
    if(!checkValid(tgLink)){
        error.innerText = "Поле ТГ не заполнено!";
        return;
    }
    if(!checkValid(phone)){
        error.innerText = "Поле Номер не заполнено!";
        return;
    }

    if (!isValidPhone(phone)){
        error.innerText = "Неправильный формат номер"
        return;
    };
    if (newName && tgLink && phone){
        table.innerHTML += "            <tr>\n" +
            `                <td><p>${newName}</p></td>\n` +
            `                <td><p><a target=\"_blank\" href=\"${tgLink}\">${tgId}</a></p></td>\n` +
            `                <td><p><a target=\"_blank\" href=\"tel:${phone}\">${phone}</a></p></td>\n` +
            "            </tr>"
    }

})