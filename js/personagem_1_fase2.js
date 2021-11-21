var resposta

        function pertunta() {

        while(resposta != 1 || resposta != 2 || resposta != 2 ) {

        resposta = prompt("Digite o número correspondente ao país de destino")

        if (resposta == 3){
            window.location.href='./personagem_1_fase2.html'
            break
        }
        else if (resposta == 1){

            window.location.href='./game_over.html'
            break
        }
		else if (resposta == 2){

           window.location.href='./game_over.html'
            break
        }
        else{
            alert('Digite 1, 2 ou 3')
           break

        }
    }



    }