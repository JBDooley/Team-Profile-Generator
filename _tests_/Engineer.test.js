const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
	it("it should create an object with engineer value pairs.", () => {
		const engineer = new Engineer("bob", 1, "bob@email.com", "bobby");
		expect(engineer).toEqual({
			name: "bob",
			id: 1,
			email: "bob@email.com",
			github: "bobby",
		})
	})
});

describe("getGitHub()", () => {
	it("it should return engineers GitHub.", () => {
		const engineer = new Engineer("bob", 1, "bob@email.com", "bobby");
		expect(engineer.getGitHub()).toEqual(
			`<a href="https://github.com/bobby" target="_blank">bobby<a>`
		)
	})
});
