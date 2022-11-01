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
            default: 0
        }
    ])

}

const collectData = async type => {
    const data = {}
    try {
        const questions = [
            {
                type: 'input',
                message: 'Name',
                validate: input => {
                    if (input.length < 1) {
                        return true
                    } else {
                        return 'Enter Valid Information'
                    }
                }
            }, {
                type: 'input',
                message: 'email',
                validate: input => {
                    if (input.length < 1) {
                        return true
                    } else {
                        return 'Enter Valid Information'
                    }
                }
            }
        ]
        switch (type) {
            case 0:
                questions.push({
                    type: 'input',
                    message: 'Room Number?',
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
                    validate: input => {
                        if (input.length < 1) {
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
                    validate: input => {
                        if (input.length < 1) {
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