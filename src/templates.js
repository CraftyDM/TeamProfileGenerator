const fs = require('fs/promises');
const path = require('path')

const insertHeader = async title => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>`
};

const generateBody = async (managers, engineers, interns) => {
    let body = '<body>'

    body += await generateManagers(managers);
    body += await generateEngineers(engineers);
    body += await generateInterns(interns);

    body +=  '</body></html>'
}

const generateManagers = async managers => {
    let cards = ''
    for (const manager of managers) {
        let card = `
        <div class="card">
        <div class="card-title"></div>
        <div class="card-body">
            <div class="row">Name: ${manager.getName()} </div>
            <div class="row">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
            <div class="row">Room Number: ${manager.getRoomNumber()}</div>
        </div>
    </div>`
    }
    return cards
}

const generateEngineers = async engineers => {
    let cards = ''
    for (const engineer of engineers) {
        let card = `
        <div class="card">
        <div class="card-title"></div>
        <div class="card-body">
            <div class="row">Name: ${engineer.getName()} </div>
            <div class="row">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
            <div class="row">Github: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></div>
        </div>
    </div>`
    }
    return cards
}

const generateInterns = async interns => {
    let cards = ''
    for (const intern of interns) {
        let card = `
        <div class="card">
        <div class="card-title"></div>
        <div class="card-body">
            <div class="row">Name: ${intern.getName()} </div>
            <div class="row">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
            <div class="row">School: ${intern.getSchool()}</div>
        </div>
    </div>`
    }
    return cards
}

const createHTML = async (title, managers, engineers, interns) => {
    const data = (await insertHeader(title)).concat((await generateBody()))


}