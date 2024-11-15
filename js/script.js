
function mascara_tel(obj){
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9){
        obj.value += "-"
    }
}

function mascara_cpf(obj){

    if(obj.value.length == 3){
        obj.value += "."
    }
    else if(obj.value.length == 7){
        obj.value += "."
    }
    else if(obj.value.length == 11){
        obj.value += "-"
    }
}

function salto(campo,digito){
    if(campo == "cpf"){
        if(digito.length>13){
            document.orcamento.telefone.focus();
        }
    }

    if(campo == "telefone"){
        if(digito.length>13){
            document.orcamento.pagamento.focus();
        }
    }
}





function confirmar() {
    confirm('Deseja enviar o formulário?');
}









function soma(valor,selecionado) {
    let total = document.getElementById('total').value;
    
    if(selecionado){
        total = Number(total) + Number(valor);
    }
    else{
        total = Number(total) - Number(valor);
    }

    document.getElementById('total').value = total;
}  


function trocar(desc) {
  document.getElementById('desc').value = desc;

  
}


function validarFormulario(event) {
    // Verificar se os campos obrigatórios estão preenchidos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereço').value;
  
    if (nome === '' || telefone === '' || endereco === '') {
      alert('Por favor, preencha todos os campos obrigatórios!');
      event.preventDefault();
    }
  
    // Verificar se pelo menos um sabor foi selecionado
    const sabores = document.querySelectorAll('input[type="checkbox"]:checked');
    if (sabores.length === 0) {
      alert('Por favor, selecione pelo menos um sabor!');
      event.preventDefault();
    }
  
    // Verificar se o total é maior que zero
    const total = document.getElementById('total').value;
    if (total <= 0) {
      alert('O total deve ser maior que zero!');
      event.preventDefault();
    }
  }
  
  // Adicionar evento de submit ao formulário
  document.querySelector('form[name="sorv"]').addEventListener('submit', validarFormulario); 
