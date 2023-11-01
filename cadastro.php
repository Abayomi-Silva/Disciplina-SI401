<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $aluno = [
        'nome' => $_POST['nome'],
        'ra' => $_POST['ra'],
        'sexo' => $_POST['sexo'],
        'idade' => $_POST['idade'],
        'endereco' => $_POST['endereco'],
        'telefone' => $_POST['telefone'],
        'email' => $_POST['email']
    ];

    if (!isset($_SESSION['alunos'])) {
        $_SESSION['alunos'] = [];
    }

    $_SESSION['alunos'][$aluno['ra']] = $aluno;

    header('Location: index.php');
}