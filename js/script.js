let pierwszyLiczba = "";
let drugiLiczba = "";
let operator = "";
let wynik;

function dodajCyfre(element) {
  if (operator === "") {
    pierwszyLiczba = element.textContent;
  } else {
    drugiLiczba += element.textContent;
  }
  aktualizujWynik();
}

function dodajOperator(element) {
  if (pierwszyLiczba === "") {
    return;
  }
  operator = element.textContent;
  aktualizujWynik();
}

function oblicz() {
  if (drugiLiczba === "" || operator === "") {
    return;
  }

  if (operator === "/" && drugiLiczba === "0") {
    alert("Nie można dzielić przez 0!");
    return;
  }

  pierwszyLiczba = parseFloat(pierwszyLiczba);
  drugiLiczba = parseFloat(drugiLiczba);

  switch (operator) {
    case "+":
      wynik = pierwszyLiczba + drugiLiczba;
      break;
    case "-":
      wynik = pierwszyLiczba - drugiLiczba;
      break;
    case "*":
      wynik = pierwszyLiczba * drugiLiczba;
      break;
    case "/":
      wynik = pierwszyLiczba / drugiLiczba;
      break;
  }

  wynik = wynik.toString();
  pierwszyLiczba = wynik;
  drugiLiczba = "";
  operator = "";
  aktualizujWynik();
}

function kasuj() {
  pierwszyLiczba = "";
  drugiLiczba = "";
  operator = "";
  aktualizujWynik();
}

function aktualizujWynik() {
  let wynikElement = document.getElementById("wynik");
  wynikElement.value = pierwszyLiczba;
  if (operator !== "") {
    wynikElement.value += " " + operator + " " + drugiLiczba;
  }
}
