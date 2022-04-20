//cauchin tiene 100 de vidas y 30 de ataque
//pokacho tiene 80 de vidas y 50 de ataque
// tocinauro tiene 120 de vida y 40 de ataque
//estos objetos tienen los atributos nombre, vida y ataque

var imagenes=[];
imagenes["Cauchin"]="vaca.png";
imagenes["Pokacho"]="pollo.png";
imagenes["tocinauro"]="cerdo.png";



var cauchin=new Pakiman("Cauchin", 100, 300);
var pokacho=new Pakiman("Pokacho", 80, 50);
var tocinauro= new Pakiman("tocinauro", 120, 40);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
