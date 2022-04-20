var teclas={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};

document.addEventListener("keydown", dibujarcerdotecla);
var cuadrito=document.getElementById("areadibujo");
var papel=cuadrito.getContext("2d");
var x=400;
var y=400;

var cerdo={
  url:"cerdo.png",
  cargaOk:false
};


function dibujarcerdotecla(evento)
{
  papel.drawImage(cerdo.objeto,x,y)
  var movimiento=50;
  if (evento.keyCode<38, evento.keyCode>40) {
    alert ("Teclas erroneas");
    return;
  }

  switch (evento.keyCode)
  {
    case teclas.UP:
        papel.drawImage(cerdo.objeto,x,y-50);
        y=y-50
      break;

      case teclas.DOWN:
      papel.drawImage(cerdo.objeto,x,y+50);
      y=y+50;
      break;

    case teclas.LEFT:
    papel.drawImage(cerdo.objeto,x-50,y);
    x=x-50;
    break;

    case teclas.RIGTH:
    papel.drawImage(cerdo.objeto,x+50,y);
    x=x+50;
    break;
    default:

  }
}

cerdo.objeto= new Image();
cerdo.objeto.src=cerdo.url;
cerdo.objeto.addEventListener("load",dibujarcerdotecla);
cerdo.objeto.drawImage=(cerdo.url,x,y);

var cuadrito=document.getElementById("areadibujo");
var papel=cuadrito.getContext("2d");
