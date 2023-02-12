const Employee = require('../lib/Employee');


describe("Employee class", () => {
	it("it should create an object with employee value pairs.", () => {
		// arrange
		const employee = new Employee("bob", 1, "bob@email.com");
		// assert
		expect(employee).toEqual({
			name: "bob",
			id: 1,
			email: "bob@email.com",
		})
	})
});

describe("getEmail ()", () => {
	it("it should return employees email.", () => {
		// arrange
		const employee = new Employee("bob", 1, "bob@email.com");
		// assert
		expect(employee.getEmail()).toEqual(
		`<a href="mailto:bob@email.com">bob@email.com</a>`
		)
	})
});