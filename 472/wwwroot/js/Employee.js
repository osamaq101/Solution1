class Employee {

    #fullName;
    #salary = 0;

    static #counter = 0;

    constructor(name, salary, dob) {
        this.#fullName = name;
        this.#salary = salary;
        this.dob = dob;
        Employee.#incCounter++;
    }

    static #incCounter() {
        Employee.#counter++;
    }




}