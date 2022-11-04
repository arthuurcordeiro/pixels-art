

document.querySelectorAll('.color')
for (let i = 1; i < document.querySelectorAll('.color').length; i ++){
    let red = Math.abs(Math.random() * 256)
    let green = Math.abs(Math.random() * 256)
    let blue = Math.abs(Math.random() * 256)
    document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
        document.querySelectorAll('.color')[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
