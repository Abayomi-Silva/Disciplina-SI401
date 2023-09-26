let jogador = "X";
let jogadorX = "";
let jogadorO = "";
let gameOver = false;

function comecar() {
    jogadorX = document.getElementById("playerX").value;
    jogadorO = document.getElementById("playerO").value;
    if (jogadorX && jogadorO) {
        document.querySelector("div:last-of-type").style.display = "block";
        vezJogar();
    }
}
function vezJogar() {
    document.getElementById("vezJogador").textContent = jogador === "X" ? jogadorX : jogadorO;
    document.getElementById(".status").textContent = `Vez de ${document.getElementById("vezJogador").textContent}`;
}
function jogar(cell) {
    if (!cell.textContent && !gameOver) {
        cell.textContent = jogador;
        vencedor();
        jogador = jogador === "X" ? "O" : "X";
        vezJogar();
    }
}
function vencedor() {
    const board = document.querySelectorAll(".cell");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
        ];
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        const cellA = board[a].textContent;
        const cellB = board[b].textContent;
        const cellC = board[c].textContent;
        if (cellA && cellA === cellB && cellA === cellC) {
            gameOver = true;
            const winner = cellA === "X" ? jogadorX : jogadorO;
            document.querySelector(".status").textContent = `${winner} venceu!`;
            alert(`${winner} venceu!`);
            return;
        }
    }
    if ([...board].every(cell => cell.textContent !== "") && !gameOver) {
        gameOver = true;
        document.querySelector(".status").textContent = "Empate!";
        alert("O jogo empatou!");
    }
}
