class EmployeePayrollData {
    //Properties
    id;
    salary;
    gender;
    startDate;

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

    //Methods
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "Undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id : " + this.id + " Name : " + this.name + " Salary : "
            + this.salary + " Gender : " + this.gender + " Start Date : " + empDate;
    }
}

let empData = new EmployeePayrollData(1, "Deepanshu", 10000);
console.log(empData.toString());
try {
    empData.name = "Deepanshu Singh";
    console.log(empData.toString());
} catch (e) {
    console.log(e);
}
let empData2 = new EmployeePayrollData(2, "Kiran", 60000, "M", new Date());
console.log(empData2.toString());