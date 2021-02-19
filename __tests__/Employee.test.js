const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should create a new employee", () => {

        const result = new Employee();

        expect(typeof(result)).toBe("object")
    })
});

describe("name", () => {
    it("should assign a name to the employee", () => {

        const name = "Joseph";
        
        const result = new Employee(name);

        expect(result.name).toEqual(name);
    })
});

describe("id", () => {
    it("should assign an id to the employee", () => {

        const id = 132;
        
        const result = new Employee("Joseph", id);

        expect(result.id).toEqual(id);
    })
});

describe("email", () => {
    it("should assign a name to the employee", () => {

        const name = "Joseph";
        
        const result = new Employee("fakename", 123, email);

        expect(result.name).toEqual(name);
    })
});

describe("Role", () => {
    it("", () => {

        const role = 'Employee';
        const result = new Employee("Joseph", 123, "joseph@mail.mail")

        expect(result.getRole()).toEqual(role)
    })
}) 