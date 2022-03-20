const darkModeToggle = document.getElementById("darkModeToggle");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const html = document.querySelector('html');

let darkMode = localStorage.getItem("darkMode");


const switchIcon = () => {
    sun.classList.toggle("enabled");
    moon.classList.toggle("enabled");
}

const enableDarkMode = () =>{
    html.classList.toggle('dark');

    localStorage.setItem("darkMode", "enabled");
    darkMode = "enabled";
}

const disableDarkMode = () =>{
    html.classList.toggle('dark');

    localStorage.setItem("darkMode", "disabled");
    darkMode = "disabled";
}

darkModeToggle.addEventListener('click', () => {
    if(darkMode === "enabled"){
        disableDarkMode();
        switchIcon();
    }else{
        enableDarkMode()
        switchIcon();
    }
})

if(darkMode === "enabled"){
    html.classList.add('dark');
    sun.classList.toggle("enabled");
    moon.classList.toggle("enabled");
}