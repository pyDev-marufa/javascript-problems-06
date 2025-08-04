/** Problem -01 (Divide the Asset) */

var area = 800;

var equallyDivAsset = area / 2;
console.log(equallyDivAsset);

// ..........................................................................



/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money>= 25000){
    console.log("Laptop")
}
else if( money>= 10000){
    console.log("Cycle")
}
else{
    console.log("Chocolate")
}

// ..........................................................................



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
var day = 1;

while (day <= lastDay) {
    if (day % 3 === 0) {
        console.log(day + " - medicine");
    } else {
    console.log(day + " - rest");
    }
    day++;
}

// ..........................................................................



/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
if (fileName[0]=== "#" || fileName.includes(".pdf") || fileName.includes(".docx")){
    console.log("Store")

}
else{
    console.log('Delete')
}


// ..........................................................................


/** Problem 05 - ( PH Email Generator )  */

var student= { name: "jhankar" , roll: 1014 ,department: "cse" };

var phMail = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(phMail)


// ..........................................................................


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


// ..........................................................................