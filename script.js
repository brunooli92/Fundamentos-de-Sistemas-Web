/* Script para validação e interatividade do Pet Shop Miau.
    Requisito: Funções em JavaScript e validação de formulário.
*/

function agendarServico(event) {
    // Impede o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    // Captura dos dados principais
    let nomeCliente = document.getElementById("nomeCliente").value;
    let nomePet = document.getElementById("nomePet").value;
    let dataHora = document.getElementById("dataHora").value;
    
    // Verificação de Checkbox (Pelo menos um serviço deve ser marcado)
    let banho = document.getElementById("servicoBanho").checked;
    let tosa = document.getElementById("servicoTosa").checked;

    if (!banho && !tosa) {
        alert("Por favor, selecione pelo menos um serviço (Banho ou Tosa).");
        return false;
    }

    // Função Temporal/Dinâmica simples: Formatar a data para exibição no alerta
    let dataFormatada = new Date(dataHora).toLocaleString('pt-BR');

    // Feedback visual para o usuário
    alert("Obrigado, " + nomeCliente + "!\n\n" +
          "O agendamento para o pet " + nomePet + " foi realizado com sucesso.\n" +
          "Data prevista: " + dataFormatada + "\n" +
          "Entraremos em contato para confirmar.");
    
    // Resetar o formulário após sucesso (opcional)
    document.getElementById("formAgendamento").reset();
}
