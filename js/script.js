    'use strict'

 
       document.getElementById('form').addEventListener('submit', (event) => {
            let valida = validaForm();
            
            if(!valida)
                event.preventDefault();
       });   
      
 
    function validaForm(){


        let tamNome = document.getElementById('txtNome');
        if(tamNome.value.length <3 || tamNome.value.length > 50){
            return false;
        }

        let tamEmail = document.getElementById('txtEmail');
        if(tamEmail.value.length < 5 || tamEmail.value.length > 100 ){
            return false;
        }

        let verEmail = document.getElementById('txtEmail').value;
        if(verEmail.indexOf("@") < 0 ){
            return false;
        }

        let verPass1 = document.getElementById('txtSenha');
        let verPass2 = document.getElementById('txtSenha2');
        if(verPass1.value.length < 7 || verPass1.value.length > 50 ){
            return false;
        }
        
        if(verPass2.value.length < 7 || verPass2.value.length > 50 ){
            return false;
        } 
        
        if(verPass1.value != verPass2.value){
            return false;
        } 

        //console.log(document.getElementById('slSexo').value);
        
        console.log(document.getElementById('dtData').value);

        
        console.log(document.getElementById('txtArea').value);
    
        return true;
        
    }