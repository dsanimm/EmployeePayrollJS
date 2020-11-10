
//UC4 calculates the monthly wage
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_DURATION = 4;
const FULL_TIME_DURATION = 8;
const EMP_WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
function getDailyEmployeeHours(empCheck) {
    let dailyHours = 0;
    switch (empCheck) {
        case IS_ABSENT: dailyHours = 0;
            break;
        case IS_PART_TIME: dailyHours = PART_TIME_DURATION;
            break;
        case IS_FULL_TIME: dailyHours = FULL_TIME_DURATION;
            break;
        default: dailyHours = 0;
    }
    return dailyHours;
}
let totalHoursInMonth = 0;
for (i = 0; i < WORKING_DAYS_IN_MONTH; i++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getDailyEmployeeHours(empCheck);
    let dailyWage = dailyHours * EMP_WAGE_PER_HOUR;
    console.log('Employee Daily Wage is : ' + dailyWage);
    totalHoursInMonth += dailyHours;
}
console.log('Employee Total Wage In A Month : ' + totalHoursInMonth * EMP_WAGE_PER_HOUR);

