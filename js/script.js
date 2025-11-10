function init() {

  var button = document.getElementById('entrybutton');

  function myFunction() {
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Fatima Patel: " + textbox.value);
  }

  button.addEventListener('click', myFunction);
}

window.addEventListener('load', init);
