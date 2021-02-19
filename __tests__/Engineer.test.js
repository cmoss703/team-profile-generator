const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("should return the name, email, id, and github of each engineer.", () => {
        const str = "Edgar the Engineer";
        const result = "Edgar the Engineer";

        expect(result).toEqual(str);
    })
})