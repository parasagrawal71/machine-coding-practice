function createRow(chessboardEle, rowIndex) {
  const rowEle = document.createElement("div");
  rowEle.classList.add(`row-${rowIndex}`);
  chessboardEle.appendChild(rowEle);
  return rowEle;
}

function createCell(rowEle, rowIndex, colIndex, isBlack) {
  const cellEle = document.createElement("div");
  cellEle.classList.add(`row-${rowIndex}-cell-${colIndex}`);
  cellEle.classList.add(isBlack ? "black" : "white");
  rowEle.appendChild(cellEle);

  //   cellEle.addEventListener("mouseover", () => {
  //     cellEle.classList.add("lightblue");
  //   });
  //   cellEle.addEventListener("mouseout", () => {
  //     cellEle.classList.remove("lightblue");
  //   });
  return cellEle;
}

function onHoverOfCell(event) {
  //   console.log(`event: `, event);
  event.stopPropagation();
  const allCells = document.querySelectorAll("[class*='cell-']");
  allCells.forEach((ele) => {
    ele.classList.remove("lightblue");
    ele.classList.remove("blue");
  });

  const className = event.target.className;
  if (className && className.includes("cell-")) {
    const cell = document.getElementsByClassName(className)[0];
    const rowIndex = className.split(" ")[0].split("-")[1];
    const colIndex = className.split(" ")[0].split("-")[3];
    findDiagonals(Number(rowIndex), Number(colIndex));
    cell.classList.add("lightblue");
  }
}

function findDiagonals(rowIndex, colIndex) {
  console.log(`rowIndex: ${rowIndex}; colIndex: ${colIndex}`);
  let row = rowIndex;
  let col = colIndex;
  const allDiagonalsClass = [];

  // Left up
  while (row > -1 && col > -1) {
    const isSameCell = row === rowIndex && col === colIndex;
    !isSameCell && allDiagonalsClass.push(`row-${row}-cell-${col}`);
    --row;
    --col;
  }

  // Left down
  //   console.log(`rowIndex: ${rowIndex}; colIndex: ${colIndex}`);
  row = rowIndex;
  col = colIndex;
  while (row < 8 && col > -1) {
    const isSameCell = row === rowIndex && col === colIndex;
    !isSameCell && allDiagonalsClass.push(`row-${row}-cell-${col}`);
    row++;
    col--;
  }

  // Right up
  //   console.log(`rowIndex: ${rowIndex}; colIndex: ${colIndex}`);
  row = rowIndex;
  col = colIndex;
  while (row > -1 && col < 8) {
    const isSameCell = row === rowIndex && col === colIndex;
    !isSameCell && allDiagonalsClass.push(`row-${row}-cell-${col}`);
    row--;
    col++;
  }

  // Right down
  //   console.log(`rowIndex: ${rowIndex}; colIndex: ${colIndex}`);
  row = rowIndex;
  col = colIndex;
  while (row < 8 && col < 8) {
    const isSameCell = row === rowIndex && col === colIndex;
    !isSameCell && allDiagonalsClass.push(`row-${row}-cell-${col}`);
    row++;
    col++;
  }

  console.log(`allDiagonalsClass: `, allDiagonalsClass);
  allDiagonalsClass.forEach((className) => {
    const cell = document.getElementsByClassName(className)[0];
    cell.classList.add("blue");
  });
}

(function createChessboard() {
  const chessboard = document.getElementById("chessboard");
  chessboard.addEventListener("mouseover", onHoverOfCell);
  let type = "odd";
  for (let row = 0; row < 8; row++) {
    const rowEle = createRow(chessboard, row);
    for (let col = 0; col < 8; col++) {
      createCell(rowEle, row, col, type === "odd" ? col % 2 !== 0 : col % 2 === 0);
    }
    type = type === "odd" ? "even" : "odd";
  }
})();
