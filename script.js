let color = 'rgb(165, 165, 165)'
let size = 16;

window.onload = function() {
    createDiv();
    draw();
}

const draw = () => {
    const cells = document.querySelectorAll('.gridsquare')
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = color
    }))
}

const createDiv = () => {
    let container = document.getElementById('draw-container')
    for(let i = 0; i < size; i++){
        let row = document.createElement('div')
        row.className = "row"
        for(let j = 1; j<= size; j++){
            let cell = document.createElement("div");
            cell.style.width = (512/size) - 2 + "px"
            cell.style.height = (512/size) - 2 + "px"
            cell.className = "gridsquare";
            row.appendChild(cell)
        }
        container.appendChild(row)
    }
}

const sizeSelect = document.getElementById("size-select")
sizeSelect.addEventListener("click", () => {
    size = prompt("Please enter a size betweenn 1-64")
    if(size > 64){
        alert("Cannot set size over 64")
        size = 64
    }
    if (size < 1) {
        alert("Cannot set size smaller than 1")
    }
    const container = document.getElementById('draw-container');
    while(container.firstChild){
        container.removeChild(container.lastChild)
    }
    createDiv();
    draw();
})

const clear = document.getElementById("clear-btn")
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.gridsquare');
    cells.forEach(cell => cell.style.backgroundColor = 'white')
});

const colorSelect = document.getElementById("color-select");
colorSelect.addEventListener('change', () => {
    color = colorSelect.value
})
