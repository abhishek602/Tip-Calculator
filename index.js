var amt, tip, people, calculateTip, tipPlace;

calculateTip = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    changeUI();
  });

  
function changeUI() {
  init();

  let r1 = amt.value;
  let p1 = tip.value;
  let p2 = people.value;
  let p3 = tipPlace;

  var totalresult = tipcal(r1, p1, p2);

  p3.textContent = totalresult.toFixed(2);
}


function tipcal(amt, opt, people) {
  var totalPaisa = parseFloat(amt);
  var KitnaTip = parseFloat(opt);
  var totalAdmi = parseInt(people);

  // console.log(totalPaisa, KitnaTip, totalAdmi);

  var result;
  result = (totalPaisa * KitnaTip) / totalAdmi;
  // console.log(result)
  return result;
}


function init() {
  amt = document.getElementById("billamt");

  tip = document.getElementById("serviceQual");

  people = document.getElementById("peopleamt");

  tipPlace = document.getElementById("tip");

  return amt, tip, people, tipPlace;
}
