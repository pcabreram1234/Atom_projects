var d=document.getElementById('Dibujito');
var lienzo=d.getContext("2d");

dibujarlinea("blue", 10, 300, 220, 10);

function dibujarlinea (color, xinicial, yinicial, xfinal,  yfinal)
{
  lienzo.beginpath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
