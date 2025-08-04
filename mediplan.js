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