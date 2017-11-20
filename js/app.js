window.addEventListener('load', function() {
  /* llamando a los id para los eventos*/ 
  var area = document.getElementById('textarea');
  var boton = document.getElementById('save');
  var lista = document.getElementById('container-links');
  var formu = document.getElementById('ancla');// al que aplico el click
  var conte = document.getElementById('conte');// el que quiero mostrar
  var bot = document.getElementsByTagName('button');
  var tex = document.getElementById('textarea');
      
  
  boton.addEventListener('click', function(event) {
    if (area.value) {
      var tex = document.createElement('textarea');
      var li = document.createElement('li');
      var link = document.createElement('p');
      var bot = document.createElement('button');
      bot.style = 'width:50px';
      link.textContent = area.value;
      bot.textContent = 'Añadir';
      li.appendChild(link);
      lista.appendChild(li);
      li.appendChild(tex);
      li.appendChild(bot);
      area.value = '';
    }
  });
  // bot.addEventListener('click', enviar);//
  /* function enviar() {
    if (tex.value)
    
      var n = document.createElement('li');
    var m = document.createElement('p');
    m.textContent = tex.value;
   
    n.appendChild(m);
    li.appendChild(li);
    
    tex.value = '';
  }*/

  formu.addEventListener('click', vale);
  function vale() {
    conte.style.display = 'block';
    formu.style.display = 'none';
  };
});