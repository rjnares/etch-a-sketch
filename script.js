const grid = document.querySelector("#grid");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            row.appendChild(square);
        }

        grid.appendChild(row);
    }
}

createGrid(16);