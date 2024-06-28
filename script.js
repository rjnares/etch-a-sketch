const grid = document.querySelector("#grid");

function changeSquareColor(event) {
    event.target.classList.add("color");
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.addEventListener("mouseenter", changeSquareColor);
            row.appendChild(square);
        }

        grid.appendChild(row);
    }
}

function resizeGrid() {
    let newSize = parseInt(prompt("Please enter a new size for the grid between 1 and 100"));

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        return;
    }

    clearGrid();
    createGrid(newSize);
}

function clearGrid() {
    let row = grid.lastElementChild;

    while (row) {
        grid.removeChild(row);
        row = grid.lastElementChild;
    }
}

createGrid(16);