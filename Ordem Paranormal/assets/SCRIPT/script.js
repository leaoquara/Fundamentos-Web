let nome = document.getElementById('nome');
let sugestao = document.getElementById('sugestao');

function enviar(){
    if(nome.value == "" || sugestao.value == ""){
        alert("Todos os campos devem ser preenchidos")
    }else{
        alert("Seu feedback foi enviado")
    }
}