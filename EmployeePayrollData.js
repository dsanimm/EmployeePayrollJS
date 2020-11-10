class EmployeePayrollData {
    //Constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //Getters & Setters
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is in Incorrect Format';
        }
    }
    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*');
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw 'id is in Incorrect Format';
        }
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*');
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        } else {
            throw 'Salary is in Incorrect Format';
        }
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp('[MF]');
        if (genderRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw 'Gender is in Incorrect Format';
        }
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate < new Date("November 10, 2020 12:00:00")) {
            this._startDate = startDate;
        } else {
            throw 'Date is in Incorrect Format';
        }
    }

    //Methods
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "Undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id : " + this.id + " Name : " + this.name + " Salary : "
            + this.salary + " Gender : " + this.gender + " Start Date : " + empDate;
    }
}

let empData = new EmployeePayrollData(1, "Deepanshu", 10000, "M", new Date("May 13, 1998 12:00:00"));
console.log(empData.toString());
try {
    empData.name = "Deepanshu";
    empData.id = 1;
    empData.salary = 100000;
    empData.gender = "M";
    empData.startDate = new Date();
    console.log(empData.toString());
} catch (e) {
    console.log(e);
}
let empData2 = new EmployeePayrollData(2, "Kiran", 60000, "F", new Date());
console.log(empData2.toString());