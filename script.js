const grid = document.querySelector("#grid");
const hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let currentOpacity = 0;

function changeSquareColor(event) {
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor((Math.random() * hexCharacters.length));
        newColor += hexCharacters[randomIndex];
    }

    event.target.style.backgroundColor = newColor;
    event.target.style.opacity = currentOpacity;

    if (currentOpacity === 1) return;
    currentOpacity = (currentOpacity * 10 + 1) / 10;
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
    currentOpacity = 0;
    let row = grid.lastElementChild;

    while (row) {
        grid.removeChild(row);
        row = grid.lastElementChild;
    }
}

createGrid(16);