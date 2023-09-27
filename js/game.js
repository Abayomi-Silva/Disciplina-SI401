let jogador = "X";
let jogadorX = "";
let jogadorO = "";
let gameOver = false;

 function startGame() {
     playerXName = document.getElementById("playerX").value || "Jogador X";
     playerOName = document.getElementById("playerO").value || "Jogador O";

     if (playerXName && playerOName) {
         document.querySelector("div:first-of-type").style.display = "none";
         document.querySelector("div:last-of-type").style.display = "block";
         updateStatus();
     }
 }

 function updateStatus() {
     document.getElementById("currentPlayerDisplay").textContent = currentPlayer === "X" ? playerXName : playerOName;
     document.querySelector(".status").textContent = `Vez de ${document.getElementById("currentPlayerDisplay").textContent}`;
 }

 function makeMove(cell) {
     if (!cell.textContent && !gameOver) {
         cell.textContent = currentPlayer;
         checkWinner();
         currentPlayer = currentPlayer === "X" ? "O" : "X";
         updateStatus();
     }
 }

 function checkWinner() {
     const board = document.querySelectorAll(".cell");
     const winningCombos = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
         [0, 4, 8], [2, 4, 6]             // Diagonais
     ];

     for (const combo of winningCombos) {
         const [a, b, c] = combo;
         const cellA = board[a].textContent;
         const cellB = board[b].textContent;
         const cellC = board[c].textContent;

         if (cellA && cellA === cellB && cellA === cellC) {
             gameOver = true;
             const winner = cellA === "X" ? playerXName : playerOName;
             document.querySelector(".status").textContent = `${winner} venceu!`;
             alert(`${winner} venceu!`);
             return;
         }
     }

     // Verifica se há empate
     if ([...board].every(cell => cell.textContent !== "") && !gameOver) {
         gameOver = true;
         document.querySelector(".status").textContent = "Empate!";
         alert("O jogo empatou!");
     }
 }
