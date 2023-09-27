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
    const vezJogadorElement = document.getElementById("vezJogador");
    const statusElement = document.querySelector(".status");
    
    if (vezJogadorElement && statusElement) {
        vezJogadorElement.textContent = jogador === "X" ? jogadorX : jogadorO;
        
    }
}
function jogar(blocos) {
    if (!blocos.textContent && !gameOver) {
        blocos.textContent = jogador;
        vencedor();
        jogador = jogador === "X" ? "O" : "X";
        vezJogar();
    }
}
function vencedor() {
    const board = document.querySelectorAll(".blocos");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
        ];
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        const blocosA = board[a].textContent;
        const blocosB = board[b].textContent;
        const blocosC = board[c].textContent;
        if (blocosA && blocosA === blocosB && blocosA === blocosC) {
            gameOver = true;
            const winner = blocosA === "X" ? jogadorX : jogadorO;
            document.querySelector(".status").textContent = `${winner} venceu!`;
            alert(`${winner} venceu!`);
            return;
        }
    }
    if ([...board].every(blocos => blocos.textContent !== "") && !gameOver) {
        gameOver = true;
        document.querySelector(".status").textContent = "Empate!";
        alert("O jogo empatou!");
    }
}