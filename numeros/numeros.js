var numeros;

for (var i = 1; i <=100; i++) {

  if ((i%3==0) && (i%5==0))
  {
  document.write("fizzbuzz");
  document.write("<br />");
  }
  if (i%3==0)
  {
    document.write("fizz");
    document.write("<br />");
  }

  if (i%5==0)
{
    document.write("buzz");
    document.write("<br />");
  }



 if ((i%3!=0) && (i%5!=0))
  {
    document.write(i);
    document.write("<br />");
  }
}
