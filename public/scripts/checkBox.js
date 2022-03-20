const url = window.location.href
const startPos = url.lastIndexOf("/")
const title = url.substring(startPos + 1);

let inputs = document.getElementsByTagName('input');
let checkBoxes = document.querySelectorAll("input[type='checkbox']");
let amount = checkBoxes.length;

Array.from(checkBoxes).forEach(function (value, i){
    value.addEventListener("change", function (){
        changedCheckbox(this, i)
    })
})

const changedCheckbox = (ele, index) => {
    if(ele.checked){
        localStorage.setItem(title+"-"+index, "checked");
    }else{
        localStorage.setItem(title+"-"+index, "unchecked");
    }
    addClass(ele);
    countCheckboxes();
}

const setCheckbox = () => {
    Array.from(checkBoxes).forEach(function (value, i){
        if(localStorage.getItem(title+"-"+i) === "checked"){
            value.checked = true;
            addClass(value)
        }
    })
}

const countCheckboxes = () => {
    let counter = 0;
    Array.from(checkBoxes).forEach(function (value, i){
        if(value.checked){
            counter ++;
        }
    })

    if(counter === amount && localStorage.getItem(title+"-congrats") === null){
        localStorage.setItem(title+"-congrats", "fired")
        party.confetti(document.body, {
            count: party.variation.range(40, 80)
        });
    }
}

const addClass = (ele) => {
    ele.nextSibling.classList.toggle("cross-out")
}

setCheckbox();
