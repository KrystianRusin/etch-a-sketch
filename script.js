let color = 'rgb(165, 165, 165)'

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
    for(let i = 0; i < 16; i++){
        let row = document.createElement('div')
        row.className = "row"
        for(let j = 1; j<= 16; j++){
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            row.appendChild(cell)
        }
        container.appendChild(row)
    }
}

const clear = document.getElementById("clear-btn")
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.gridsquare');
    cells.forEach(cell => cell.style.backgroundColor = 'white')
});

const colorSelect = document.getElementById("color-select");
colorSelect.addEventListener('change', () => {
    color = colorSelect.value
})
