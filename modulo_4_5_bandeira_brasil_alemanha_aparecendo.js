
    var tela = document.querySelector ("canvas");
    var pincel = tela.getContext("2d");

        pincel.fillStyle = "lightgray";
        pincel.fillRect(0, 0, 900, 600);

    function limpaTela (){

        pincel.clearRect(0, 0, 900, 600);

    }

    function quadradro (x, y, tamX, tamY, cor){

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, tamX, tamY);

    }
    
    function triangulo (){

        pincel.fillStyle = "yellow";
        pincel.beginPath();
        pincel.moveTo(20, 150);
        pincel.lineTo(430, 150);
        pincel.lineTo(225, 30);
        pincel.fill();

        pincel.fillStyle = "yellow";
        pincel.beginPath();
        pincel.moveTo(20, 150);
        pincel.lineTo(430, 150);
        pincel.lineTo(225, 270);
        pincel.fill();

    }

    function circulo (){

        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(225, 150, 80, 0, 2 * Math.PI);
        pincel.fill();
        
        
    }

    function brasil () {

        limpaTela();
        quadradro(0, 0, 450, 300, "green");
        triangulo();
        circulo();
      
    }

    function alemanha () {

        limpaTela();
        quadradro(450, 300, 450, 300, "black" );
        quadradro(450, 400, 450, 100, "red" );
        quadradro(450, 500, 450, 100, "yellow" );
        
    
    }
  
    var mostraBrasil = true;

    function trocaBandeira() {

        if(mostraBrasil) {
            brasil();
        } else {
            alemanha();
        }
        mostraBrasil = !mostraBrasil;
        }

setInterval(trocaBandeira, 2000); // a cada 2 segundos, chama trocaBandeira 
  