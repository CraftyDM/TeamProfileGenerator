const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs/promises');

const createHTML = require('./src/templates');
const { init, collectData } = require('./src/inquirer');
const outputPath = `${__dirname}/dist/profile.html`;


const teamDescription = { managers: [], engineers: [], interns: [] };

async function Init() {
  let choice = "";
  while (choice != "Exit") {
    choice = await init();
    console.log(choice);
    switch (choice) {
      case 'Add a Manager':
        var { name, email, officeNumber, id } = await collectData(0);
        teamDescription.managers.push(new Manager(name, id, email, officeNumber))
        break;
      case 'Add an Engineer':
        var { name, email, github, id } = await collectData(1);
        teamDescription.engineers.push(new Engineer(name, id, email, github))
        break;
      case 'Add an Intern':
        var { name, email, school, id } = await collectData(2);
        teamDescription.interns.push(new Intern(name, id, email, school))
        break;
      case 'Generate Profiles':
        await htmlBuilder();
        break;
    }
  }
};

async function htmlBuilder() {
  //added try/catch later 
  try {
    console.log("Team created!")
    await createHTML("New Team Profiles", teamDescription.managers, teamDescription.engineers, teamDescription.interns)
    
    
  } catch (err) {
    console.error(err)
  };


};




Init();