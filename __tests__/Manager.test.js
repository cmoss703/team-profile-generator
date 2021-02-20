const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should create a new Manager", () => {

        const result = new Manager();

        expect(typeof(result)).toBe("object")
    })
});

describe("officeNumber", () => {
    it("should assign an office number to the manager", () => {

        const officeNumber = "1200";
        
        const result = new Manager("Joseph", 123, "joseph@joseph.mail", officeNumber);

        expect(result.officeNumber).toEqual(officeNumber);
    })
});

describe("Role", () => {
    it("", () => {

        const role = 'Manager';
        const result = new Manager("Joseph", 123, "joseph@mail.mail", 444);

        expect(result.getRole()).toEqual(role)
    })
}) 