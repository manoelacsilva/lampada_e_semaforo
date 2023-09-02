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
    ifLampBroken();
    turnOnOff.disabled = true;
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


function ifLampBroken() {
    if (isLampBroken) {
        turnOnOff.textContent = 'Quebrou :(';
    }
} 

// turnOn.addEventListener ('click', lampOn);
// turnOff.addEventListener ('click', lampOff);
turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);

// Projeto 02 - Semáforo

const sem = document.getElementById ('sem');
const buttons = document.getElementById ('buttons');
const resetButton = document.getElementById ('reset');
let colorIndex = 0;
let intervalId = null;
let isLightOn = false;

const trafficLight = (event) => {
    stopAutomatic();
    turnOnn[event.target.id]();
    updateResetButtonState();
}

const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

//    if (colorIndex < 2) {
//        colorIndex++
//    } else {
//        colorIndex = 0;
//    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOnn[color]();
    nextIndex();
    updateResetButtonState();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOnn = {
    'red': () => { 
        sem.src = './img/vermelho.png';
        isLightOn = true;
    },
    'yellow': () => {
        sem.src = './img/amarelo.png';
        isLightOn = true;
    },
    'green': () => {
        sem.src = './img/verde.png';
        isLightOn = true;
    },
    'automatic': () => {
        intervalId = setInterval(changeColor, 700);
        isLightOn = true;
    },
    'reset': () => {
        sem.src = './img/desligado.png';
        isLightOn = false;
    }
}

function resetSem() {
    if (isLightOn) {
        turnOnn['reset']();
        updateResetButtonState();
    }
}

function updateResetButtonState() {
    if (!isLightOn) {
        resetButton.disabled = true; // Desabilita o botão
    } else {
        resetButton.disabled = false; // Habilita o botão
    }
}

updateResetButtonState();

buttons.addEventListener('click', trafficLight);
resetButton.addEventListener('click', resetSem);
