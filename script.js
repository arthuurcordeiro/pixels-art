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