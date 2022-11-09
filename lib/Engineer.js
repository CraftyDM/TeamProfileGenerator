const Employee = require('./Employee');

class Engineer extends Employee {
    github

    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    
    getGitHub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer