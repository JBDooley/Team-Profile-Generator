const Employee = require("./Employee")

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGitHub() {
        const gitHubLink = `<a href="https://github.com/${this.github}" target="_blank">${this.github}<a>`;
        return gitHubLink;
    }

    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer