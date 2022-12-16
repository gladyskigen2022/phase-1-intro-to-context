// Your code here
//payroll system
function createEmployeeRecord([firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents]){
   let employee = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
   } 
   return employee;
}

function createEmployeeRecords(Rows){
    return Rows.map(createEmployeeRecord)
}

function createTimeInEvent(employeeRecord, dateStamp){
    const date = dateStamp.split(" ")[0];
    const time = dateStamp.split(" ")[1];
    const checkIn = {
        type: "TimeIn",
        hour: parseInt(time),
        date: date
    }
    employeeRecord.timeInEvents.push(checkIn);
    return employeeRecord;

}
function createTimeOutEvent(employeeRecord, dateStamp){
    const date = dateStamp.split(" ")[0];
    const time = dateStamp.split(" ")[1];
    const checkOut = {
        type: "TimeOut",
        hour: parseInt(time),
        date: date
    }
    employeeRecord.timeOutEvents.push(checkOut);
    return employeeRecord;

}

const hoursWorkedOnDate= (employeeRecord, date ="all") =>{
    function timeCards(arrayOfTimePunches,date){
const arrayOfTimes =[];
const decrement =(previousVal,currentVal) => previousVal + currentVal;

for (let punch of arrayOfTimePunches)
        if (date = "all"){
            arrayOfTimes.push(punch.hour)
        }
        else {
           ( punch.date ===date? arrayOfTimes.push(punch.hour) : null);
        }
        const sumOfTime = arrayOfTimes.reduce(decrement);
        return sumOfTime;
   }

   
   const sumOfTimeIns =timeCards(employeeRecord.timeInEvents, date)
   const sumOfTimeOuts = timeCards(employeeRecord.timeOutEvents, date)
   const hoursWorked = sumOfTimeOuts - sumOfTimeIns;
   return (hoursWorked)/100;
}

const wagesEarnedOnDate = (employeeRecord, date ="all") => {
    return employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, date);
}

function allWagesFor(employeeRecord){
    return wagesEarnedOnDate(employeeRecord)
}

function calculatePayroll(arrayOfEmployeeRecords){
    let grandTotalOwed = 0;
    for (let currentEmply of arrayOfEmployeeRecords){
        grandTotalOwed += allWagesFor(currentEmply)
    }
    return grandTotalOwed;
}