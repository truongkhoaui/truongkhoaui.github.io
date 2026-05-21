const switchMode = document.querySelector('.button-switch');
const socialIcons = document.querySelectorAll('.socials img')
const text = document.querySelectorAll("h1, p, a");

switchMode.addEventListener('click', () => {

    if (document.body.style.backgroundColor === "rgb(30, 30, 30)") {

        document.body.style.backgroundColor = "rgb(200, 200, 200)";
        document.body.style.backgroundImage = "url('wallpaper/light.png')"
        text.forEach(element => {
            element.style.color = "black";
        });
        switchMode.style.border = "solid 4px black";
        switchMode.querySelector('.button-switch-icon').src = "icons/modes/dark.png"

        socialIcons.forEach(icon => {
            icon.style.filter = "invert(1)";
        });

    }

    else if (document.body.style.backgroundColor === "rgb(200, 200, 200)") {

        document.body.style.backgroundColor = "rgb(30, 30, 30)";
        document.body.style.backgroundImage = "url('wallpaper/dark.png')"
        text.forEach(element => {
            element.style.color = "white";
        });
        switchMode.style.border = "solid 4px white";
        switchMode.querySelector('.button-switch-icon').src = "icons/modes/light.png"

        socialIcons.forEach(icon => {
            icon.style.filter = "invert(0)";
        });

    }




});
