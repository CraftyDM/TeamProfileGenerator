const inquirer = require('inquirer');

const init = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            choices: [
                'Add a Manager',
                'Add an Engineer',
                'Add an Intern',
                'Generate Profiles',
                'Exit'
            ],
            default: 0, 
            name: "base"
        }
    ])
    return answers.base;
}

const collectData = async type => {
    const data = {}
    try {
        const questions = [
            {
                type: 'input',
                message: 'Name',
                name: 'name',
                validate: input => {
                    if (input.length > 0) {
                        return true
                    } else {
                        return 'Enter Valid Information'
                    }
                }
            }, {
                type: 'input',
                message: 'email',
                name: 'email',
                validate: input => {
                    if (input.length > 5) {
                        return true
                    } else {
                        return 'Enter Valid Information'
                    }
                }
            },
            {
                type: 'input',
                message: 'employee id',
                name: 'id'
            }
        ]
        switch (type) {
            case 0:
                questions.push({
                    type: 'input',
                    message: 'Room Number?',
                    name: 'officeNumber',
                    //added to practice use with Regex-test for a digit
                    validate: input => {
                        if (/\d+/.test(input)) {
                            return true
                        } else {
                            return 'Enter Valid Information'
                        }
                    }
                })
                break;

            case 1:
                questions.push({
                    type: 'input',
                    message: 'GitHub?',
                    name: 'github',
                    validate: input => {
                        if (input.length > 5) {
                            return true
                        } else {
                            return 'Enter Valid Information'
                        }
                    }
                })
                break;

            case 2:
                questions.push({
                    type: 'input',
                    message: 'School?',
                    name: 'school',
                    validate: input => {
                        if (input.length > 5) {
                            return true
                        } else {
                            return 'Enter Valid Information'
                        }
                    }
                })
                break;
        }
        const answers = await inquirer.prompt(questions)
        return answers

    } catch (err) {
        console.err(err)
    }
}

module.exports = {init, collectData}