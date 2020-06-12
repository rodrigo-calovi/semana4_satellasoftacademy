'use strict'

var maxLength = 150;

function contaCaractere(){
    let text = document.getElementById('txtMensagem');
    let contador = maxLength - text.value.length;


    let caracteres = document.getElementById('caracteres');
    caracteres.innerText = contador;

    if(contador<0){
        caracteres.style.color = 'red';
        text.style.border = '3px solid red';
    }

}