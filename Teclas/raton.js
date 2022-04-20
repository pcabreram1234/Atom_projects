document.addEventListener("mousemove", dibujarMouse);
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

function dibujarMouse (evento)

{
  var colorcito="brown";
  var movimiento=5;

switch (evento.keyCode)
 {
   case MouseEvent.movementy--:
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
