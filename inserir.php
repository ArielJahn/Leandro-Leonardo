<?php
    header('Content-Type: application/json');

    $name = $_POST['name'];
    $plaque = $_POST['plaque'];
    $local = $_POST['local'];
    $km = $_POST['km'];
    $litros = $_POST['litros'];
    $value = $_POST['value'];

    
    $pdo = new PDO('mysql:host=localhost; dbname=carro;', 'root', '');

    $stmt = $pdo->prepare('INSERT INTO comments (name, plaque, local, km, litros, value, media, valueperkm, totalvalue) VALUES (:name, :plaque, :local, :km, :litros, :value, :media, :valueperkm, :totalvalue)');
    $stmt->bindValue(':name', $name);
    $stmt->bindValue(':plaque', $plaque);
    $stmt->bindValue(':local', $local);
    $stmt->bindValue(':km', $km);
    $stmt->bindValue(':litros', $litros);
    $stmt->bindValue(':value', $value);
    $stmt->bindValue(':media', $km/$litros);
    $stmt->bindValue(':valueperkm', $value/($km/$litros));
    $stmt->bindValue(':totalvalue', $value * $litros);
    $stmt->execute();

    if ($stmt->rowCount() >= 1) {
        echo json_encode('Comentário Salvo com Sucesso');
    } else {
        echo json_encode('Falha ao salvar comentário');
    }

?>
