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