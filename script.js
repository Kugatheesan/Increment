// Select sliders and table container
const columnRange = document.getElementById("columnRange");
const rowRange = document.getElementById("rowRange");
const tableContainer = document.getElementById("tableContainer");

const columnValue = document.getElementById("columnValue");
const rowValue = document.getElementById("rowValue");

// Update range value display
columnRange.addEventListener("input", () => {
    columnValue.textContent = columnRange.value;
    createTable(parseInt(columnRange.value), parseInt(rowRange.value));
});

rowRange.addEventListener("input", () => {
    rowValue.textContent = rowRange.value;
    createTable(parseInt(columnRange.value), parseInt(rowRange.value));
});

// Function to create table dynamically
function createTable(columns, rows) {
    let tableHTML = "<table>";
    let cellNumber = 1;

    for (let i = 0; i < rows; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < columns; j++) {
            tableHTML += `<td>${cellNumber}</td>`;
            cellNumber++;
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
}

// Initial table state
createTable(parseInt(columnRange.value), parseInt(rowRange.value));
