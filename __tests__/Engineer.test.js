const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("should create a new Engineer", () => {

        const result = new Engineer();

        expect(typeof(result)).toBe("object")
    })
});

describe("github", () => {
    it("should assign the github name to the Engineer", () => {

        const github = "cmoss703";
        
        const result = new Engineer("Christina", 123, "christina@mail.mail", github);

        expect(result.github).toEqual(github);
    })
});

describe("Role", () => {
    it("", () => {

        const role = 'Engineer';
        const result = new Engineer("Christina", 123, "christina@mail.mail", "cmoss703");

        expect(result.getRole()).toEqual(role)
    })
}) 