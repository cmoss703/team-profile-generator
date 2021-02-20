const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should create a new Intern", () => {

        const result = new Intern();

        expect(typeof(result)).toBe("object")
    })
});

describe("school", () => {
    it("should assign the school name to the Intern", () => {

        const school = "KU Bootcamp";
        
        const result = new Intern("Christina", 123, "christina@mail.mail", school);

        expect(result.school).toEqual(school);
    })
});

describe("Role", () => {
    it("", () => {

        const role = 'Intern';
        const result = new Intern("Christina", 123, "christina@mail.mail", "KU Bootcamp");

        expect(result.getRole()).toEqual(role)
    })
}) 