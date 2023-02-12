const Manager = require('../lib/Manager');

describe("Manager class", () => {
	it("it should create an object with manager value pairs.", () => {
		// arrange
		const manager = new Manager("bob", 1, "bob@email.com", "999-999-9999");
		// assert
		expect(manager).toEqual({
			name: "bob",
			id: 1,
			email: "bob@email.com",
			officeNumber: "999-999-9999",
		})
	})
});