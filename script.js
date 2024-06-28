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

createGrid(16);