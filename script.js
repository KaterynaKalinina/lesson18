// function Employee(salary) {
//     this.level = 1,
//     this.salary = salary;
// };

// Employee.prototype.upgrade = function() {
//     this.salary = this.salary + this.salary * (this.level++ / 10);
// };

// function Manager() {
//     Employee.call(this, 500);
// };
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;



// function Developer() {
//     Employee.call(this, 1000);
// };
// Developer.prototype = Object.create(Employee.prototype);
// Developer.prototype.constructor = Developer;


// const e = new Manager();
// e.upgrade();
// e.upgrade();
// e.upgrade();
// e.upgrade();
// e.upgrade();

// console.log(e);

// const a = new Developer();
// a.upgrade();
// a.upgrade();
// a.upgrade();
// a.upgrade();
// a.upgrade();

// console.log(a);