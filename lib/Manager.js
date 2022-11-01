const Employee = require('./Employee');

class Manager extends Employee {
    officeNumber
    getRole() {
        return 'Manager'
    }
};

module.exports = Manager