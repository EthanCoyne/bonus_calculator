
var atticus = {
  employeeName: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3,
};
var jem = {
  employeeName: 'Jem',
  employeeNumber: '62347',
  annualSalary: '63500',
  reviewRating: 4,
};
var boo = {
  employeeName: 'Boo',
  employeeNumber: '11435',
  annualSalary: '54000',
  reviewRating: 3,
};
var scout = {
  employeeName: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5,
};
var robert = {
  employeeName: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 1,
};
var mayella = {
  employeeName: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 2,
};

var employees = [atticus, jem, boo, scout, robert, mayella];

//code starts here

var calculator = function(arg) {
  var rating = arg.reviewRating;
  var empNum = arg.employeeNumber;
  var empSal = parseInt(arg.annualSalary);
  //console.log(rating);
  //console.log(empNum);
  //console.log(empSal);
  var bonusPercentage = 0
  switch (rating) {
    case 1:
    case 2:
      bonusPercentage =  0;
      break;
    case 3:
      bonusPercentage =  4;
      break;
    case 4:
      bonusPercentage =  6;
      break;
    case 5:
      bonusPercentage =  10;
      break;
    default:
      console.log("error");
  }
//console.log(bonusPercentage);
  if (empNum.length == 4) {
      bonusPercentage += 5;
  }
//console.log(bonusPercentage);
  if (empSal > 65000) {
    bonusPercentage -= 1;
  }
//console.log(bonusPercentage);
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  return bonusPercentage;
  //console.log(bonusPercentage)
}


for (var i = 0; i < employees.length; i++) {
  var emp = employees[i];
  //console.log("********" + emp.employeeName + "**************");
  var bonPer = calculator(emp);
  //console.log(bonPer);
  var bonus = ((bonPer / 100) * parseInt(emp.annualSalary));
  //console.log(bonus);
  var newSal = bonus + parseInt(emp.annualSalary);
  //console.log(newSal);
  var bonRound = Math.round(bonus);
  //console.log(bonRound);
  var person = new Employee(emp.employeeName, bonPer, newSal, bonRound);
  console.log(person);
}

function Employee(name, bonPer, newSal, bonRound) {
  this.name = name;
  this.bonusPercent = bonPer;
  this.newSalary = newSal;
  this.bonusRound = bonRound;
}
