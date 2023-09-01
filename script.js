// Projeto 01 - Lâmpada

// const turnOn = document.getElementById ('turnOn');
// const turnOff = document.getElementById ('turnOff');
const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

// turnOn.addEventListener ('click', lampOn);
// turnOff.addEventListener ('click', lampOff);
turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);

// Projeto 02 - Semáforo