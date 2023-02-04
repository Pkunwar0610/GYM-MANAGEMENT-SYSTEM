var heavyworkout = 2999;
var workout = 2999;
var workoutfitness = 2999;
var duofitness = 2999;
var cardio = 2999;
var total = 0;
var check = 1;
var gw;
var exer;
var perclass;
var adder = document.querySelector("#getme");
adder.addEventListener("click", getMe);
var by = document.querySelector("#out");
by.addEventListener("click", checkOut);
var cme = document.querySelector("#clr");
cme.addEventListener("click", clearMe);

function getMe() {
  exer = document.querySelector("#sf").value;
  perclass = parseFloat(document.querySelector("#entrybox").value);
  gw = document.querySelector("#writeme");
  if (Number.isNaN(perclass) === true) {
    alert("Only Numbers !!! Or The Field is Empty");
    check = 0;
  } else if (perclass < 0) {
    alert("Negative value!! @stupid");
    check = 0;
  } else {
    check = 1;
  }
  if (check == 1) {
    switch (exer) {
      case "heavyworkoutclasses":
        var hwc = heavyworkout * perclass;
        gw.value +=
          "heavyworkoutclasses " + perclass + " class = " + hwc + " rs\r";
        total += hwc;
        perclass.value = "";
        break;

      case "workoutclasses":
        var wc = workout * perclass;
        gw.value += "workoutclasses " + perclass + " class = " + wc + " rs\r";
        total += wc;
        perclass.value = "";
        break;

      case "workoutfitnessclasses":
        var wf = workoutfitness * perclass;
        gw.value +=
          "workoutfitnessclasses " + perclass + " class = " + wf + " rs\r";
        total += wf;
        perclass.value = "";
        break;

      case "duofitnesslasses":
        var df = duofitnes * perclass;
        gw.value +=
          "duofitnessclasses " + perclass + " class = " + df + " rs\r";
        total += df;
        perclass.value = "";
        break;

      case "cardioclasses":
        var cc = cardio * perclass;
        gw.value += "cardioclasses " + perclass + " class = " + cc + " rs\r";
        total += cc;
        perclass.value = "";
        break;
    }
  }
}

function checkOut() {
  gw.value +=
    "--------------------------------------------------------------\r";
  gw.value +=
    "Your Total Bill Is = " + "2999" + " Rs Thanks For Shopping! :)\r";
  gw.value += "paid\r";
  gw.value +=
    "--------------------------------------------------------------\r";
  total = 0;
}
function clearMe() {
  gw.value = "";
}

/*
var straw = 160;
var apple = 200;
var grapes = 170;
var pome = 220;
var gu = 60;
var total = 0;
var check = 1;
var gw;
var sfruit;
var perkg;
var adder = document.querySelector("#getme");
adder.addEventListener("click", getMe);
var by = document.querySelector("#out");
by.addEventListener("click", checkOut);
var cme = document.querySelector("#clr");
cme.addEventListener("click", clearMe);

function getMe() {
  sfruit = document.querySelector("#sf").value;
  perkg = parseFloat(document.querySelector("#entrybox").value);
  gw = document.querySelector("#writeme");
  if (Number.isNaN(perkg) === true) {
    alert("Only Numbers !!! Or The Field is Empty");
    check = 0;
  } else if (perkg < 0) {
    alert("Negative value!! @stupid");
    check = 0;
  } else {
    check = 1;
  }
  if (check == 1) {
    switch (sfruit) {
      case "Strawberry":
        var st = straw * perkg;
        gw.value += "Strawberry " + perkg + " kg = " + st + " rs\r";
        total += st;
        perkg.value = "";
        break;
      case "Apple":
        var at = apple * perkg;
        gw.value += "Apple " + perkg + " kg = " + at + " rs\r";
        total += at;
        perkg.value = "";
        break;
      case "Grapes":
        var gr = grapes * perkg;
        gw.value += "Grapes " + perkg + " Kg  = " + gr + " rs\r";
        total += gr;
        perkg.value = "";
        break;
      case "Guava":
        var ga = gu * perkg;
        gw.value += "Guava " + perkg + " Kg  = " + ga + " RS\r";
        total += ga;
        perkg.value = "";
        break;
      case "Pomegranate":
        var pomy = pome * perkg;
        gw.value += "Pomegranate " + perkg + " Kg  = " + pomy + " rs\r";
        total += pomy;
        perkg.value = "";
        break;
    }
  }
}

function checkOut() {
  gw.value +=
    "--------------------------------------------------------------\r";
  gw.value += "Your Total Bill Is = " + total + " rs Thanks For Shopping! :)\r";
  gw.value +=
    "--------------------------------------------------------------\r";
  total = 0;
}
function clearMe() {
  gw.value = "";
}*/
