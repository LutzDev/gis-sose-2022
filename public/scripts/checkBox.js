console.log(window.location.href)

const url = window.location.href
const startPos = url.lastIndexOf("/")
const title = url.substring(startPos + 1);

let inputs = document.getElementsByTagName('input');
let checkBoxes = document.querySelectorAll("input[type='checkbox']");

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
}

const setCheckbox = () => {
    Array.from(checkBoxes).forEach(function (value, i){
        if(localStorage.getItem(title+"-"+i) === "checked"){
            value.checked = true;
            addClass(value)
        }
    })
}

const addClass = (ele) => {
    ele.nextSibling.classList.toggle("cross-out")
}

setCheckbox();

