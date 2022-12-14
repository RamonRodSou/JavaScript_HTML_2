
/*

O desafio agora é o seguinte. Se andarmos com o ponteiro do mouse sobre a tela enquanto o 
botão esquerdo é pressionado, vamos desenhar um círculo. Isso significa que enquanto não 
soltarmos o botão esquerdo, desenharemos um círculo ao lado do outro, que na verdade dará 
um efeito que estamos passando um pincel na tela. Se soltarmos o botão esquerdo, o ato de 
mover o mouse sob a tela não deverá desenhar nada. No final, queremos um efeito parecido 
com ferramentas como Paint Brush ou Photoshop, que permite o usuário desenhar na tela.

O evento do JavaScript que permite capturar o movimento do mouse, e logo sua coordenada, 
é o ** onmousemove **, contudo esse evento não é capaz de saber se o botão do mouse está clicando ou não. 
E agora?

Existem os eventos, ** onmousedown e onmouseup.** O primeiro é disparado toda vez que o botão esquerdo 
do mouse é pressionado e o segundo quando ele é solto. Sendo assim, de alguma maneira, nossa função 
desenhaCirculo só pode desenhar na tela se o botão estiver pressionado, se não estiver, nada acontecerá.

E agora, como resolver? DICA: as funções passadas para onmousedown e onmouseup podem alterar o valor 
de uma variável, que será usada por desenhaCirculo para saber se ele desenhará ou não um círculo. 
Complicou? Nada que um momento de reflexão não resolva.

-------------------------------------FUNÇÕES SEM NOME----------------------------------------

Como as duas funções não possuem mais um nome, são chamadas de funções anônimas. Isso mesmo, 
uma função anônima é aquela que não possui um nome e nosso código dá um erro porque se elas não 
possuem nome, como iremos chamá-las ou atribuí-las aos eventos onmousedown e onmouseup, certo?

Então, como iremos passar um código para tela.onmousedown e tela.onmouseup, se não temos mais o nome 
da função? É aqui que eu quero pedir a sua atenção. Uma função anônima não pode existir solta, porque 
como não tem um nome, ninguém será capaz de chamá-la, mas podemos atribuir a função anônima diretamente 
a uma variável ou a uma propriedade, como tela.onmousedown e tela.onmouseup. Confira no código abaixo:

-----------------------------------------------------------------------------------------------------

A função de aumentar e diminuiu encontra-se com um BUG que AUMENTA AO MAXIMO e DIMINIU AO MAXIMO de 
uma só vez.

*/


    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
        pincel.fillStyle = 'grey';
        pincel.fillRect(0, 0, 600, 400);

    var cores = ['blue', 'red', 'green']
    var indiceCorAtual = 0; // começa com blue
    var raio = 10;  
    var desenha = false;

    function mudaCor() {

        indiceCorAtual++;

            if (indiceCorAtual >= cores.length) {

                indiceCorAtual = 0; // volta para a primeira cor, azul

                }

            return false; // para não exibir o menu padrão do canvas

    }

    tela.onmousemove = function(evento) {

        if (desenha){
            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;
                        
                if (evento.shiftKey && evento.altKey) {

                    alert('Só aperte uma tecla por vez, por favor!');

                } else if(evento.shiftKey && raio + 10 <= 40) {
                    
                    raio = raio + 10;

                    } 
                    
                else if(evento.altKey && raio - 5 >= 10) {
                        raio = raio - 5;

                    }

            pincel.fillStyle = cores[indiceCorAtual];
            pincel.beginPath();
            pincel.arc(x, y, raio , 0, 2 * 3.14);
            pincel.fill();
        }
        console.log(x + ',' + y);

    }
           
    tela.onmousedown = function() {

        desenha = true;
    }

    tela.onmouseup = function() {

        desenha = false;
    }
    
    tela.oncontextmenu = mudaCor;

