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
        type: "timeIn",
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
        type: "timeOut",
        hour: parseInt(time),
        date: date
    }
    employeeRecord.timeOutEvents.push(checkOut);
    return employeeRecord;

}