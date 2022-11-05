const tablePixels = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const pixelsButton = document.querySelector('#generate-board');

document.querySelectorAll('.color')
function colorRandom (){
    let array = ['black']
for (let i = 1; i < document.querySelectorAll('.color').length; i ++){
    let red = Math.abs(Math.random() * 256)
    let green = Math.abs(Math.random() * 256)
    let blue = Math.abs(Math.random() * 256)
    document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
    document.querySelectorAll('.color')[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    array.push(`rgb(${red}, ${green}, ${blue})`)
}
meuStorage(array)
}


document.querySelector('#button-random-color')
let buttonRandom = document.querySelector('#button-random-color')
buttonRandom.addEventListener('click', colorRandom)
const colorPalette = JSON.parse(localStorage.getItem('colorPalette'))
if (colorPalette != null){
    let colorStorage = document.querySelectorAll('.color')
    for (let j = 0; j < colorStorage.length; j++){
            colorStorage[j].style.backgroundColor = colorPalette[j]
        } 
    } else {
        colorRandom();
    }
function meuStorage (array){
    localStorage.setItem('colorPalette', JSON.stringify(array))
}

window.onload = () => {
    tablePixels.style.width = `${5 * 40 }px`;
    for (let index = 0; index < 25; index ++) {
        const pixel = document.createElement('div')
        pixel.className = 'pixel'
        tablePixels.appendChild(pixel);
    }
    document.querySelectorAll('.color')[0].className = 'color selected'
    paintClick();
    const savedColors = JSON.parse(localStorage.getItem('pixelBoard'))    
    if (savedColors != null) {
        applySavedColors();
    }
}

function classSelected (event) {
    for (let k = 0; k < document.querySelectorAll('.color').length; k ++) {
        document.querySelectorAll('.color')[k].classList.remove('selected')
        event.target.className = 'color selected'
    }
}

document.querySelector('#color-palette').addEventListener('click', classSelected);

function colorSelected (event) {
    const toPaintColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = toPaintColor
    storagePixels();
}


function paintClick() {
    const paintablePixel = document.querySelectorAll('.pixel');
    console.log(paintablePixel);
for (let p = 0; p < paintablePixel.length; p ++) {
 paintablePixel[p].addEventListener('click', colorSelected)
}
}

const clearPixels = document.querySelector('#clear-board')
clearPixels.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    for (let c = 0; c < pixels.length; c ++){
        pixels[c].style.backgroundColor = 'white'
    }
    })

function storagePixels () {
    const paintedPixels = document.querySelectorAll('.pixel')
    let savedColors = []
    for (let s = 0; s < paintedPixels.length; s ++) {
        savedColors.push(paintedPixels[s].style.backgroundColor)
    }
    localStorage.setItem('pixelBoard',JSON.stringify(savedColors))
}

function applySavedColors () {
    const applyColors = document.querySelectorAll('.pixel')
    const savedColors = JSON.parse(localStorage.getItem('pixelBoard'))       
    for (let a = 0; a < applyColors.length; a ++){
        applyColors[a].style.backgroundColor = savedColors[a]
        }
}
