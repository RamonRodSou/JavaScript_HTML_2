
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0,0,600,400);

    pincel.fillStyle ='black';
    pincel.beginPath();
    pincel.moveTo(50, 50);
    pincel.lineTo(50, 400);
    pincel.lineTo(400, 400);
    pincel.fill();

    pincel.fillStyle ='white';
    pincel.beginPath();
    pincel.moveTo(100, 175);
    pincel.lineTo(100, 350);
    pincel.lineTo(275, 350);
    pincel.fill();

    pincel.fillStyle ='black';
    pincel.beginPath();
    pincel.moveTo(60, 40);
    pincel.lineTo(400, 40);
    pincel.lineTo(400, 380);
    pincel.fill();

    pincel.fillStyle ='white';
    pincel.beginPath();
    pincel.moveTo(185, 90);
    pincel.lineTo(355, 90);
    pincel.lineTo(355, 265);
    pincel.fill();
