const Intern = require('../lib/Intern');

describe("Intern class", () => {
	it("it should create an object with intern value pairs.", () => {
		const intern = new Intern("bob", 1, "bob@email.com", "hogwarts");
		expect(intern).toEqual({
			name: "bob",
			id: 1,
			email: "bob@email.com",
			school: "hogwarts",
		})
	})
});