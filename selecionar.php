<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost; dbname=carro;', 'root', '');

    $stmt = $pdo->prepare('SELECT * FROM comments');
    $stmt->execute();

    if ($stmt->rowCount() >= 0) {
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    } else {
        echo json_encode('Nenhum comentário encontrado');
    }