// ============================================================
//  script.js – Cadastro de Usuários
//  Inclui: Desafio 2 (limpar form), Desafio 3 (validação),
//          Desafio 4 (exibir lista)
// ============================================================

document.getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // ── Ler valores dos campos ──────────────────────────────
    const nome     = document.getElementById("nome").value.trim();
    const email    = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idade    = document.getElementById("idade").value.trim();

    // ── Desafio 3: Validar campos vazios ───────────────────
    const valido = validarCampos(nome, email, telefone, idade);
    if (!valido) return;

    // ── Desabilitar botão durante a requisição ──────────────
    const btn = document.getElementById("btn-salvar");
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⏳</span> Salvando...';

    // ── Enviar dados para o PHP ─────────────────────────────
    fetch("salvar.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone, idade })
    })
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados.sucesso) {
          exibirMensagem("✅ " + dados.mensagem, "sucesso");

          // Desafio 2: Limpar formulário após salvar
          document.getElementById("formulario").reset();
          limparErros();

          // Desafio 4: Recarregar lista
          carregarUsuarios();
        } else {
          exibirMensagem("❌ " + dados.mensagem, "erro-msg");
        }
      })
      .catch(err => {
        exibirMensagem("❌ Erro de conexão com o servidor.", "erro-msg");
        console.error(err);
      })
      .finally(() => {
        btn.disabled = false;
        btn.innerHTML = '<span class="btn-icon">💾</span> Salvar Cadastro';
      });
  });

// ============================================================
//  Desafio 3 – Validação de campos
// ============================================================
function validarCampos(nome, email, telefone, idade) {
  let valido = true;
  limparErros();

  if (!nome) {
    mostrarErro("nome", "O nome é obrigatório.");
    valido = false;
  } else if (nome.length < 3) {
    mostrarErro("nome", "O nome deve ter pelo menos 3 caracteres.");
    valido = false;
  }

  if (!email) {
    mostrarErro("email", "O e-mail é obrigatório.");
    valido = false;
  } else if (!emailValido(email)) {
    mostrarErro("email", "Informe um e-mail válido.");
    valido = false;
  }

  if (!telefone) {
    mostrarErro("telefone", "O telefone é obrigatório.");
    valido = false;
  }

  if (!idade) {
    mostrarErro("idade", "A idade é obrigatória.");
    valido = false;
  } else if (isNaN(idade) || Number(idade) < 1 || Number(idade) > 120) {
    mostrarErro("idade", "Informe uma idade válida (1-120).");
    valido = false;
  }

  return valido;
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarErro(campo, mensagem) {
  const input = document.getElementById(campo);
  const erro  = document.getElementById("erro-" + campo);
  if (input) input.classList.add("invalido");
  if (erro)  erro.textContent = mensagem;
}

function limparErros() {
  ["nome", "email", "telefone", "idade"].forEach(campo => {
    const input = document.getElementById(campo);
    const erro  = document.getElementById("erro-" + campo);
    if (input) input.classList.remove("invalido");
    if (erro)  erro.textContent = "";
  });
}

// ============================================================
//  Feedback visual de mensagem
// ============================================================
function exibirMensagem(texto, tipo) {
  const msg = document.getElementById("mensagem");
  msg.textContent  = texto;
  msg.className    = "visivel " + tipo;

  // Ocultar automaticamente após 4 segundos
  setTimeout(() => {
    msg.className = "";
  }, 4000);
}

// ============================================================
//  Desafio 4 – Exibir lista de usuários cadastrados
// ============================================================
function carregarUsuarios() {
  fetch("listar.php")
    .then(res => res.json())
    .then(usuarios => {
      const secao = document.getElementById("secao-lista");
      const lista  = document.getElementById("lista-usuarios");

      secao.style.display = "block";
      lista.innerHTML = "";

      if (!usuarios || usuarios.length === 0) {
        lista.innerHTML = '<p class="lista-vazia">Nenhum usuário cadastrado ainda.</p>';
        return;
      }

      usuarios.forEach(u => {
        const item = document.createElement("div");
        item.className = "usuario-item";
        item.innerHTML = `
          <div class="usuario-avatar">👤</div>
          <div class="usuario-nome">${escaparHTML(u.nome)}</div>
          <div class="usuario-detalhe">
            <span>${escaparHTML(u.email)}</span>
            ${u.telefone ? `<span>${escaparHTML(u.telefone)}</span>` : ""}
            ${u.idade    ? `<span>${escaparHTML(u.idade)} anos</span>` : ""}
          </div>
        `;
        lista.appendChild(item);
      });
    })
    .catch(() => {
      // Silencioso – servidor pode não estar rodando durante desenvolvimento
    });
}

// Segurança: evita XSS ao exibir dados do servidor
function escaparHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str ?? "");
  return div.innerHTML;
}

// Carregar lista ao iniciar a página
carregarUsuarios();
