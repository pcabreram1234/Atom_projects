
var text=document.getElementById("txt_lineas");
var boton=document.getElementById('botoncito');
boton.addEventListener("click", dibujoporclick);

var d=document.getElementById("dibujito");
var ancho=d.width;
var lienzo=d.getContext("2d");


function dibujarLinea (color,xinicial,yinicial,xfinal,yfinal)
{

  console.log("lienzo");
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }


function dibujoporclick()
{
var linea=parseInt(text.value);
var l=0;
var yi, xf;
var espacio=ancho/linea;
for (l=0; l<linea; l++)
{
  yi=espacio * l;
  xf=espacio*(l+1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  console.log ("linea" +l);
}

for (l=0; l<linea; l++)
{
  yi=espacio * l;
  xf=espacio*(l+1);
  dibujarLinea("red",300, yi, xf, 0);
  console.log ("linea" +l);
}
dibujarLinea("#AFA",ancho-1,ancho-1,ancho-1,1);
dibujarLinea("#AFA",1,1,ancho-1,1);
}
