
    /*
    Nesse tipo de triângulo, basta saber os pontos A e C para descobrir o B! 
    Repare que o X do A também é o X do B, e o Y do C também é o Y do B. 
    Ficou confuso? Veja essa

      function desenhaEsquadro(xa, ya, xc, yc, cor) {
        
            pincel.fillStyle = cor
            pincel.beginPath();
            pincel.moveTo(xa, ya);
            pincel.lineTo(xa, yc);
            pincel.lineTo(xc, yc);
            pincel.fill();
            pincel.fillStyle = 'white'
            pincel.beginPath();
            pincel.moveTo((6 * xa + xc) / 7, (9 * ya + 5 * yc) / 14);
            pincel.lineTo((6 * xa + xc) / 7, (ya + 6 * yc) / 7);
            pincel.lineTo((5 * xa + 9 * xc) / 14, (ya + 6 * yc) / 7);
            pincel.fill();
  }
  desenhaEsquadro(50, 50, 400, 400, 'black');

    */

    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

        pincel.fillStyle = "lightgrey";
        pincel.fillRect(0,0,600,600);


    function triangulo(aB, bC, aX, cX, cor){
                      (xa, ya, xc, yc, cor)

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.moveTo(aB, aX);
        pincel.lineTo(aB, bC);
        pincel.lineTo(cX, bC);
        pincel.fill();

}

    triangulo(50, 400, 50, 400, "black");
    triangulo(100, 350, 175, 275, "white");
