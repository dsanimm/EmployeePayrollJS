//UC6 calculates the monthly wage and storing it in array
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_DURATION = 4;
const FULL_TIME_DURATION = 8;
const EMP_WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
const WORKING_HOURS_IN_MONTH = 160;
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
function calculateWage(empHrs) {
    return empHrs * EMP_WAGE_PER_HOUR;
}
let totalHoursInMonth = 0;
let totalWorkingDays = 0;
let dailyWageArr = new Array();
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalHoursInMonth < WORKING_HOURS_IN_MONTH) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getDailyEmployeeHours(empCheck);
    let dailyWage = calculateWage(dailyHours);
    dailyWageArr.push(dailyWage);
    totalHoursInMonth += dailyHours;
}
console.log('Employee Total Wage In A Month : ' + totalHoursInMonth * EMP_WAGE_PER_HOUR + ' Working Days : ' + totalWorkingDays);
console.log(dailyWageArr);

//UC7A
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
dailyWageArr.forEach(sum);
console.log('Total Wage Calculated Using For Each : ' + totalEmpWage);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log('Total Wage Calculated Using Reduce : ' + dailyWageArr.reduce(totalWages, 0));

//UC7B
let dayCounter = 0;
function mapDayWithDailyWage(dailyWage) {
    dayCounter++;
    return dayCounter + " = " + dailyWage;
}
let mapDayWithDailyWageArr = dailyWageArr.map(mapDayWithDailyWage);
console.log('Day With Daily Wage Map ');
console.log(mapDayWithDailyWageArr);

//UC7C
function isFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageMapArr = mapDayWithDailyWageArr.filter(isFullTimeWage);
console.log('Days When Full Time Wage is Earned : ');
console.log(fullDayWageMapArr);

//UC7D
console.log('The Day When Full Time Wage is First Earned : ' + mapDayWithDailyWageArr.find(isFullTimeWage));

//UC7E
console.log('Is Full Time Wage For All Day Truely Contains Full Time Wage : ' + fullDayWageMapArr.every(isFullTimeWage));

//UC7F
function isPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log('Is Employee Earned Any Part Time Wage : ' + mapDayWithDailyWageArr.some(isPartTimeWage));

//UC7G
function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0) {
        return numberOfDays + 1;
    }
    return numberOfDays;
}
console.log('The Number Of Days Employee Worked Part Time or Full Time : ' + dailyWageArr.reduce(totalDaysWorked, 0));
