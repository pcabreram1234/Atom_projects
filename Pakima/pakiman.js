class Pakiman
{
  constructor(nombre, vida, ataque)
  {
    this.nombre=nombre;
    this.vida=vida;
    this.ataque=ataque;
    this.imagen=new Image ();
    this.imagen.src=imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }

  mostrar()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong> " + this.nombre + " <strong/>" + " <br/>" );
    document.write( "Vida "+ this.vida + "<br/>");
    document.write("Ataque " + this.ataque + "<hr />");
    document.write("<p>");
    }
}
