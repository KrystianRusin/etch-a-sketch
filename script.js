window.onload = function() {
    createDiv();   
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