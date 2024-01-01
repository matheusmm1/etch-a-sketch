let container = document.getElementById('container');

for (i = 0; i < 256; i++) {
    let myDivs = container.appendChild(document.createElement('div'));
    myDivs.setAttribute('style', 'background-color: black; width: 20px; height: 20px; margin: 1px');
}

container.setAttribute('style', 'display: flex; width: 370px; flex-wrap: wrap; justify-content: center; align-items: center');
document.body.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 100vh; margin: auto');
