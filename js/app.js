window.addEventListener('load', function() {
  /* llamando a los id para los eventos*/ 
  var area = document.getElementById('textarea');
  var boton = document.getElementById('save');
  var lista = document.getElementById('container-links');
  var formu = document.getElementById('ancla');// al que aplico el click
  var conte = document.getElementById('conte');// el que quiero mostrar
      
  
  boton.addEventListener('click', function(event) {
    if (area.value) {
      var li = document.createElement('li');
      var link = document.createElement('p');
      link.textContent = area.value;
      li.appendChild(link);
      lista.appendChild(li);
      area.value = '';
    }
  });

  formu.addEventListener('click', vale);
  function vale() {
    conte.style.display ='block';
  };
});