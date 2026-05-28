<?php
// Suprimir warnings do PHP para não quebrar o JSON
error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);

// ============================================================
//  listar.php – Busca os usuários cadastrados no banco
//  Desafio 4: Exibir lista de usuários
// ============================================================

header("Content-Type: application/json");

// ── Conexão com o banco ────────────────────────────────────
$conexao = new mysqli("localhost", "root", "", "cadastro");

// Se houver erro na conexão, retorna um array vazio
if ($conexao->connect_error) {
    echo json_encode([]);
    exit;
}

$conexao->set_charset("utf8mb4");

// Busca todos os usuários, ordenando do mais recente para o mais antigo
$sql = "SELECT id, nome, email, telefone, idade FROM usuarios ORDER BY id DESC";
$resultado = $conexao->query($sql);

$usuarios = [];

if ($resultado && $resultado->num_rows > 0) {
    while($linha = $resultado->fetch_assoc()) {
        $usuarios[] = $linha;
    }
}

// Retorna os dados em formato JSON para o JavaScript
echo json_encode($usuarios);

$conexao->close();
?>
