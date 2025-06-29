/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// 1. Create a single employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// 2. Create multiple employee records
function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

// 3. Add a timeIn event
function createTimeInEvent(dateTime) {
  const [date, hour] = dateTime.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    date,
    hour: parseInt(hour, 10)
  });
  return this;
}

// 4. Add a timeOut event
function createTimeOutEvent(dateTime) {
  const [date, hour] = dateTime.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    date,
    hour: parseInt(hour, 10)
  });
  return this;
}

// 5. Calculate hours worked on a given date
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date);
  const timeOut = this.timeOutEvents.find(e => e.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// 6. Calculate wages earned on a date
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// ✅ 7. Provided: Calculate all wages for an employee
const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d);
  }.bind(this), 0); // bind `this` to ensure context is preserved

  return payable;
};

// 8. Find employee by first name
function findEmployeeByFirstName(collection, firstName) {
  return collection.find(emp => emp.firstName === firstName);
}

// 9. Calculate total payroll for all employees
function calculatePayroll(employees) {
  return employees.reduce((total, emp) => total + allWagesFor.call(emp), 0);
}
