var vp=document.getElementById('villa');
var papel=vp.getContext("2d");


var fondo={
  url:"tile.png",
  cargaOk:false
};

var vaca={
  url:"vaca.png",
  cargaOk:false
};

var pollo={
  url:"pollo.png",
  cargaOk:false
};

var cerdo={
  url:"cerdo.png",
  cargaOk:false
};

fondo.objeto = new Image();
fondo.objeto.src=fondo.url;
fondo.objeto.addEventListener("load", cargarfondo);


vaca.objeto= new Image();
vaca.objeto.src=vaca.url;
vaca.objeto.addEventListener("load", cargarvaca);


pollo.objeto= new Image();
pollo.objeto.src=pollo.url;
pollo.objeto.addEventListener("load", cargarpollo);


cerdo.objeto= new Image();
cerdo.objeto.src=cerdo.url;
cerdo.objeto.addEventListener("load", cargarcerdo);


function cargarfondo()
{
fondo.cargaOk=true;
dibujar();
}

function cargarvaca()
{
vaca.cargaOk=true;
dibujar();
}

function cargarpollo()
{
pollo.cargaOk=true;
dibujar();
}

function cargarcerdo()
{
cerdo.cargaOk=true;
dibujar();
}

function dibujar()
{

  if(fondo.cargaOk==true)
  {
  papel.drawImage(fondo.objeto,0,0);
  }

  if (vaca.cargaOk==true)
  {
    var cantidad=aleatorio(0,5);
    console.log(cantidad);
    for (var v=0; v<cantidad; v++)
    {
      var x=aleatorio(0, 10)*60;
      var y=aleatorio(0, 10)*60;
      papel.drawImage(vaca.objeto,x,y);
    }
}

    if(pollo.cargaOk==true)
    {
      var cantidad=aleatorio(0,5);
      console.log(cantidad);
      for (var v=0; v<cantidad; v++)
      {
        var x=aleatorio(0, 5)*60;
        var y=aleatorio(0, 5)*60;
        papel.drawImage(pollo.objeto,x,y);
      }
}

    if(cerdo.cargaOk==true)
    {
      var cantidad=aleatorio(0,5);
      console.log(cantidad);
      for (var c=0; c<cantidad; c++)
      {
        var x=aleatorio(0, 60)*10;
        var y=aleatorio(0, 60)*10;
        papel.drawImage(cerdo.objeto,x,y);
    }
}

}

function aleatorio(min,maxi)
{
  var resultado;
  var res_anterior=0;
  resultado=Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}
