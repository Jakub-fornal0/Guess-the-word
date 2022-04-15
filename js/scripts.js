function generateLength4() {
  var letter4 = ["KURA", "PORA", "PTAK", "KLUB", "KOZA"];
  var word = letter4[Math.floor(Math.random() * 5)];
  return word;
}
function generateLength5() {
  var letter5 = ["OLIWA", "POETA", "TRAWA", "TWARZ", "ROWER"];
  var word = letter5[Math.floor(Math.random() * 5)];
  return word;
}
function generateLength6() {
  var letter6 = ["LAWETA", "ZALETA", "WIZYTA", "RAZOWY", "ROZETA"];
  var word = letter6[Math.floor(Math.random() * 5)];
  return word;
}

function checkWord(quantity) {
  if (quantity === 4) {
    var word = generateLength4();
  } else if (quantity === 5) {
    var word = generateLength5();
  } else {
    var word = generateLength6();
  }
  var correct = false;
  var attempNumber = 0;
  var button = document.getElementById("check_bttn");
  console.log(word);
  button.addEventListener("click", function () {
    if (attempNumber < 5) {
      var inputLetters = [];
      for (z = 0; z < word.length; z++) {
        inputLetters.push(document.getElementById("input_" + z).value);
      }
      //input number
      for (i = 0; i < word.length; i++) {
        //letter in word number
        for (j = 0; j < word.length; j++) {
          if (inputLetters[i].toUpperCase() === word.charAt(j).toUpperCase()) {
            document.getElementById(
              "input_" + attempNumber + "_" + i
            ).style.background = "#ffff33";
          }
        }
      }

      for (i = 0; i < word.length; i++) {
        if (inputLetters[i].toUpperCase() === word.charAt(i).toUpperCase()) {
          document.getElementById(
            "input_" + attempNumber + "_" + i
          ).style.background = "#378805";
        }
      }

      for (i = 0; i < word.length; i++) {
        if (inputLetters[i].toUpperCase() === "") {
          document.getElementById(
            "input_" + attempNumber + "_" + i
          ).style.background = "#f28080";
        }
      }

      var insertWord = "";

      for (b = 0; b < word.length; b++) {
        document.getElementById("input_" + attempNumber + "_" + b).value =
          document.getElementById("input_" + b).value.toUpperCase();

        document.getElementById("input_" + b).value = "";

        insertWord += document.getElementById(
          "input_" + attempNumber + "_" + b
        ).value;
      }
      if (insertWord === word) {
        correct = true;
        var el = document.getElementById("display");
        var str = "<div class='result'>";
        str += "<h1>Gratulacje, znaleziono szukane słowo!</h1><br />";
        str += "<h2>" + word + "</h2><br />";
        str += "<h2><a href='index.html'>Zagraj ponownie</a></h2>";
        str += "</div>";
        el.innerHTML = str;
      }

      attempNumber += 1;
      if (attempNumber === 5 && correct === false) {
        var el = document.getElementById("display");
        var str = "<div class='result'>";
        str += "<h1>Niestety, nie udało się...</h1><br />";
        str += "<h2>Szukane słowo: " + word + "</h2><br />";
        str += "<h2><a href='index.html'>Zagraj ponownie</a></h2>";
        str += "</div>";
        el.innerHTML = str;
      }
    }
  });
}

function generateFields(quantity) {
  document.getElementById("level_selection").style.display = "none";
  var el = document.getElementById("display");
  var str = "<div class='inputs'>";

  for (i = 0; i < 5; i++) {
    str += "<div class='disabled_inputs' id='user_attemps_" + i + "'>";
    for (j = 0; j < quantity; j++) {
      str += "<input id='input_" + i + "_" + j + "' type='text' disabled />";
    }
    str += "</div>";
  }

  for (i = 0; i < quantity; i++) {
    str +=
      "<input style='text-transform:uppercase' class='go_to_next' id='input_" +
      i +
      "' type='text' maxlength='1' />";
  }

  str += "</div>";
  str +=
    "<div class='check_button'><button type='button' id='check_bttn'>Sprawdź</button></div>";
  el.innerHTML = str;
  var elts = document.getElementsByClassName("go_to_next");
  Array.from(elts).forEach(function (elt) {
    elt.addEventListener("keyup", function (event) {
      if (elt.value.length == 1) {
        elt.nextElementSibling.focus();
      }
    });
  });

  if (quantity === 4) {
    checkWord(4);
  } else if (quantity === 5) {
    checkWord(5);
  } else {
    checkWord(6);
  }
}
