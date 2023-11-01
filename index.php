<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<head>
    <title>Cadastro</title>
</head>

<body>
    <nav class="menu">
        <ul>
            <li><a href="index.php">Cadastro</a></li>
            <li><a href="lista.php">Lista de Alunos</a></li>
        </ul>
    </nav>

    <h2>Cadastar aluno</h2>
    <form action="cadastro.php" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br>

        <label for="ra">RA:</label>
        <input type="number" id="ra" name="ra" required><br>

        <label for="sexo">Sexo:</label><br>
        <input type="radio" id="sexo-masculino" name="sexo" value="Masculino" required>
        <label for="sexo-masculino">Masculino</label><br>
        <input type="radio" id="sexo-feminino" name="sexo" value="Feminino">
        <label for="sexo-feminino">Feminino</label><br>

        <label for="idade">Idade:</label>
        <input type="number" id="idade" name="idade" required><br>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required><br>

        <label for="telefone">Telefone:</label>
        <input type="number" id="telefone" name="telefone" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <input type="submit" value="Cadastrar">
    </form>
</body>

</html>