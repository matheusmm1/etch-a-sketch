let container = document.getElementById('container');
let squaresPerSide = 30;
function newGrid () {
    for(j = 0; j < squaresPerSide; j++) {
        if(squaresPerSide > 100) {
            squaresPerSide = prompt('Values cannot exceed 100, sorry! Try another number.');
            if (squaresPerSide == null || squaresPerSide == '') {
                squaresPerSide = 30;
                newGrid()
            }
        }
        const row = container.appendChild(document.createElement('div'));
        for (i = 0; i < squaresPerSide; i++) {
            let squares = container.appendChild(document.createElement('div'));
            squares.setAttribute('style', 'background-color: grey; width: 7px; height: 7px; margin: 1px');
            squares.addEventListener("mouseover", function() {
                squares.style.backgroundColor = 'black'
            })
            row.appendChild(squares);
        }
    }
}
container.setAttribute('style', 'display: flex; width: 960px; flex-wrap: wrap; justify-content: center; align-items: center');
document.body.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 100vh; margin: auto');
newGrid();
let resizeButton = document.getElementById('resizeGrid');

function wipeAndResize() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    squaresPerSide = prompt('Choose a number up to 100 to make a grid with that many squares on each side.')
    if (squaresPerSide == null || squaresPerSide == '') {
        squaresPerSide = 30
        return newGrid()
    } else {
        return newGrid()}
    
}
resizeButton.addEventListener('click', wipeAndResize)

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for ( i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  
}

let randomColorsButton = document.getElementById('randomColor');
document.getElementById('buttons').setAttribute('style', 'display: flex; flex-direction: column; gap: 10px')
randomColorsButton.addEventListener('click', function () {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    squaresPerSide = prompt('Choose a number up to 100 to make a grid with that many squares on each side.')
    for(j = 0; j < squaresPerSide; j++) {
        if(squaresPerSide > 100) {
            squaresPerSide = prompt('Values cannot exceed 100, sorry! Try another number.');
            if (squaresPerSide == null || squaresPerSide == '') {
                squaresPerSide = 30;
                newGrid()
            } else {newGrid()}
        }
        const row = container.appendChild(document.createElement('div'));
        for (i = 0; i < squaresPerSide; i++) {
            let squares = container.appendChild(document.createElement('div'));
            squares.setAttribute('style', 'background-color: grey; width: 7px; height: 7px; margin: 1px');
            squares.addEventListener("mouseover", function() {
                squares.style.backgroundColor = randomColor()
            })
            row.appendChild(squares);
        }
    }
})


