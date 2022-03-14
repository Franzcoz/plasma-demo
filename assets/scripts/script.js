// TOGGLE FULLSCREEN FUNCTIONALITY
const togglefullon = document.querySelector('.toggle-on');
const togglefulloff = document.querySelector('.toggle-off');

document.addEventListener('fullscreenchange', ev => {
    ev.preventDefault();
    if (!document.fullscreenElement) {
        togglefullon.setAttribute('class', 'toggle-on shown')
        togglefulloff.setAttribute('class', 'toggle-off hidden')
    } else if (document.fullscreenElement) {
        togglefullon.setAttribute('class', 'toggle-on hidden');
        togglefulloff.setAttribute('class', 'toggle-off shown')
    }
})

togglefullon.addEventListener('click', ev => {
    ev.preventDefault();
    document.querySelector('body').requestFullscreen();
});

togglefulloff.addEventListener('click', ev => {
    ev.preventDefault();
    document.exitFullscreen();
});

// TOGGLE KICK MENU FUNCTIONALITY

const menubtn = document.querySelector('.menu');
const kickmenu = document.querySelector('.kick');

const showmenu = ()=>{
    if (kickmenu.getAttribute('class').split(' ')[1] == 'hidden') {
        kickmenu.setAttribute('class', 'kick shown');
    } else if (kickmenu.getAttribute('class').split(' ')[1] == 'shown') {
        kickmenu.setAttribute('class', 'kick hidden');
    }
}

menubtn.addEventListener('click', ev => {
    ev.preventDefault();
    showmenu();
});

// START APPS EXPERIMENTAL FUNCTIONALITY

const apps = document.querySelectorAll('.app');
const dolphin = document.querySelector('#dolphin');
const discover = document.querySelector('#discover');

const openWindow = (app) => {
    app.setAttribute('class', 'app shown');
};

const closeWindow = (app) => {
    // Close all open windows
    if (app.length) {
        for (ap of app) {
            ap.setAttribute('class', 'app hidden');
        };
    } else { // Close requested app window
        app.setAttribute('class', 'app hidden');
    }
};

/*
open dolphin:

openWindow(dolphin);

closing dolphin:

closeWindow(dolphin);

close all windows:

closeWindow(apps);
*/