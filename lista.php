<?php
session_start();
?>
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<head>
    <title>Lista de Alunos</title>
</head>

<body>
    <nav class="menu">
        <ul>
            <li><a href="index.php">Cadastro</a></li>
            <li><a href="lista.php">Lista de Alunos</a></li>
        </ul>
    </nav>

    <h2>Lista de Alunos</h2>
    <table border="1">
        <tr>
            <th>Nome</th>
            <th>RA</th>
            <th>Sexo</th>
            <th>Idade</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
        </tr>
        <?php
        if (isset($_SESSION['alunos']) && !empty($_SESSION['alunos'])) {
            ksort($_SESSION['alunos']); // Ordena por RA

            foreach ($_SESSION['alunos'] as $aluno) {
                echo "<tr>";
                echo "<td>{$aluno['nome']}</td>";
                echo "<td>{$aluno['ra']}</td>";
                echo "<td>{$aluno['sexo']}</td>";
                echo "<td>{$aluno['idade']}</td>";
                echo "<td>{$aluno['endereco']}</td>";
                echo "<td>{$aluno['telefone']}</td>";
                echo "<td>{$aluno['email']}</td>";
                echo "</tr>";
            }
        }
        ?>
    </table>
</body>

</html>