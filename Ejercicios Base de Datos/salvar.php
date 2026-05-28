<?php
// Suprimir warnings do PHP para não quebrar o JSON
error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);

// ============================================================
//  salvar.php – Insere usuário no banco de dados
//  Desafio 1: inclui telefone e idade
// ============================================================

header("Content-Type: application/json");

// ── Conexão com o banco ────────────────────────────────────
$conexao = new mysqli("localhost", "root", "", "cadastro");

if ($conexao->connect_error) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Falha na conexão: " . $conexao->connect_error
    ]);
    exit;
}

$conexao->set_charset("utf8mb4");

// ── Ler JSON do corpo da requisição ───────────────────────
$dados = json_decode(file_get_contents("php://input"), true);

$nome = trim($dados["nome"] ?? "");
$email = trim($dados["email"] ?? "");
$telefone = trim($dados["telefone"] ?? "");
$idade = isset($dados["idade"]) && $dados["idade"] !== "" ? (int) $dados["idade"] : null;

// ── Validação mínima no backend ────────────────────────────
if (empty($nome) || empty($email)) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Nome e e-mail são obrigatórios."
    ]);
    exit;
}

// ── Prepared statement (segurança contra SQL Injection) ────
$stmt = $conexao->prepare(
    "INSERT INTO usuarios (nome, email, telefone, idade) VALUES (?, ?, ?, ?)"
);
$stmt->bind_param("sssi", $nome, $email, $telefone, $idade);

if ($stmt->execute()) {
    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Usuário cadastrado com sucesso!"
    ]);
} else {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao cadastrar: " . $stmt->error
    ]);
}

$stmt->close();
$conexao->close();
