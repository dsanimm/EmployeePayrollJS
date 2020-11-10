//UC2 calculates the daily wage
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_DURATION = 4;
const FULL_TIME_DURATION = 8;
const EMP_WAGE_PER_HOUR = 20;
empCheck = Math.floor(Math.random() * 10) % 3;
let dailyHours = 0;
let dailyWage = 0;
switch (empCheck) {
    case IS_ABSENT: dailyHours = 0;
        break;
    case IS_PART_TIME: dailyHours = PART_TIME_DURATION;
        break;
    case IS_FULL_TIME: dailyHours = FULL_TIME_DURATION;
        break;
    default: dailyHours = 0;
}
dailyWage = dailyHours * EMP_WAGE_PER_HOUR;
console.log('Employee Daily Wage is : ' + dailyWage);