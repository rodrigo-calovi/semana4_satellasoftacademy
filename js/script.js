    'use strict'

    let corretos = [];
    let errados = [];
    var obj = [];
   

    document.addEventListener('DOMContentLoaded', function () {

        document.getElementById('form').addEventListener('submit', (event) => {

            obj = {
                    nome: document.getElementById('txtNome'),
                    email: document.getElementById('txtEmail'),
                    password1: document.getElementById('txtSenha'),
                    password2: document.getElementById('txtSenha2'),
                    sexo: document.getElementById('slSexo'),
                    data: document.getElementById('dtData'),
                    areaTexto: document.getElementById('txtArea')
                
            };

            
            formulario();
            
            if(!validar()){
                event.preventDefault();
            } else {
                
            }

        });

    });

    function formulario(){

        let msg = [ 
            "Informe a data de nascimento válida;",
            "Sexo deve ser Feminino ou Masculino;",
            "Senhas deve ser iguais;",
            "Informe um e-mail válido;",
            "Preencha corretamente seu nome;"
        ];
        console.log(msg.length);

        if(obj.nome.value.length < 3 || obj.nome.value.length > 50) {
            obj.nome.style.border = '2px solid red';
            errados.push(msg.pop());
            //event.preventDefault();
        } else {
            obj.nome.style.border = '2px solid #BDBDBD';
            corretos.push(msg.pop());
        }

        let temArroba;

        let verEmail = document.getElementById('txtEmail').value;
        if(verEmail.indexOf("@") > 0 && verEmail.indexOf(".") > 0 ){
            temArroba = true;
        } else {
            temArroba = false;
        }

        if(temArroba && (obj.email.value.length > 5 && obj.email.value.length < 100)) {
            obj.email.style.border = '2px solid #BDBDBD';
            corretos.push(msg.pop());
        } else {
            obj.email.style.border = '2px solid red';
            errados.push(msg.pop());
            //event.preventDefault();
        }

        if((obj.password1.value != obj.password2.value) || (obj.password1.value.length < 7 || obj.password1.value.length > 50)){
            obj.password2.style.border = '2px solid red';
            errados.push(msg.pop());
            //event.preventDefault();
        } else {
            obj.password2.style.border = '2px solid #BDBDBD';
            corretos.push(msg.pop());
        }
        
        if(obj.sexo.value == 'F' || obj.sexo.value == 'M'){
             obj.sexo.style.border = '2px solid #BDBDBD';
             corretos.push(msg.pop());
        } else  {
            obj.sexo.style.border = '2px solid red';
            errados.push(msg.pop());
            //event.preventDefault();
        }

        let dataSplit = obj.data.value.split("-");
        let ano = dataSplit[0];
        let mes = dataSplit[1];
        let dia = dataSplit[2];

        if((dia >= 1 && dia <= 31) && (mes >= 1 && mes <= 12) && (ano >= 1940 && ano <= 2020) && dataSplit != "") {
          obj.data.style.border = '2px solid #BDBDBD';
          corretos.push(msg.pop());
        } else {
           obj.data.style.border = '2px solid red';
           errados.push(msg.pop());
          // event.preventDefault();
        }
      
        
         listagem();
        
    }


    function listagem1(item) {
        document.getElementById("mensagens").innerHTML += "<li class='correto'> " + item + "</li>";
    }

    function listagem2(item) {
        document.getElementById("mensagens").innerHTML += "<li class='erro'>  " + item + "</li>";
    }

    function listagem(){

        document.getElementById("mensagens").innerHTML += "<ul>";
        corretos.forEach(listagem1);
        document.getElementById("mensagens").innerHTML += "</ul>";

        document.getElementById("mensagens").innerHTML += "<ul>";
        errados.forEach(listagem2);
        document.getElementById("mensagens").innerHTML += "</ul>";
        
    }

    function validar(){
        if(errados.length == 0){
            return true;
        }
        return false;
    }

