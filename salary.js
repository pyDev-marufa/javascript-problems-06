/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var currentSal = startingSalary;
var increamentRate = 5 / 100;


for (var i = 0; i < experience; i++) {
    var annualIncrease = currentSal * increamentRate;
    currentSal = currentSal + annualIncrease;
}

var twoDeciCurrentSal = currentSal.toFixed(2);
console.log(twoDeciCurrentSal);