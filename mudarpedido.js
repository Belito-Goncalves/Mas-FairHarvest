// seu-script.js
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se há pedidos armazenados localmente
    const pedidosArmazenados = localStorage.getItem("pedidos");

    if (pedidosArmazenados) {
        const listaPedidos = document.getElementById("lista-pedidos");

        // Adiciona os pedidos à lista na página
        JSON.parse(pedidosArmazenados).forEach(pedido => {
            const listItem = document.createElement("li");
            listItem.textContent = pedido;
            listaPedidos.appendChild(listItem);
        });
    }
});

// Função para ser chamada quando um novo pedido é feito
function adicionarNovoPedido(mensagem) {
    // Armazena temporariamente os pedidos localmente
    const pedidosArmazenados = localStorage.getItem("pedidos");
    const pedidos = pedidosArmazenados ? JSON.parse(pedidosArmazenados) : [];

    // Adiciona o novo pedido à lista
    pedidos.push(mensagem);

    // Atualiza o armazenamento local
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    // Atualiza a lista na página
    const listaPedidos = document.getElementById("lista-pedidos");
    const novoItem = document.createElement("li");
    novoItem.textContent = mensagem;
    listaPedidos.appendChild(novoItem);
}
