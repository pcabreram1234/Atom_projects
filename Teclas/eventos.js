var teclas={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};
document.addEventListener("keydown", dibujarteclado);
var cuadrito=document.getElementById("dib_flecha");
var papel=cuadrito.getContext("2d");
var x=100;
var y=100;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

function dibujarLinea (color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=2.5;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }

function dibujarteclado (evento)

{
  var colorcito="brown";
  var movimiento=5;
if (evento.keyCode<38, evento.keyCode>40) {
  alert ("Teclas erroneas");
  return;
}

switch (evento.keyCode)
 {
   case teclas.UP:
dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
y=y-movimiento;
   break;

  case teclas.DOWN:
  dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
  y=y+movimiento;
    break;

    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
    x=x-movimiento;
    break;

    case teclas.RIGTH:
    dibujarLinea(colorcito, x, y, x+movimiento, y, papel );
    x=x+movimiento;
    break;
  default:

}

}
