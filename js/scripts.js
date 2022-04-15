function generateFields(quantity) {
  document.getElementById("level_selection").style.display = "none";
  var el = document.getElementById("display");
  var str = "<div class='inputs'>";

  for (i = 0; i < 5; i++) {
    str += "<div class='disabled_inputs' id='user_attemps_" + i + "'>";
    for (j = 0; j < quantity; j++) {
      str += "<input id='input_" + j + "' type='text' disabled />";
    }
    str += "</div>";
    console.log(i);
  }

  for (i = 0; i < quantity; i++) {
    str += "<input id='input_" + i + "' type='text' />";
  }

  str += "</div>";
  str +=
    "<div class='check_button'><button type='button' onclick=''>Sprawdź</button></div>";
  el.innerHTML = str;
}
