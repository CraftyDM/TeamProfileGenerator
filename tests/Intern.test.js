const Intern = require('../lib/Intern');

const testIntern = new Intern('JoTest', 3, 'jt@fakemail.com', 'Fake University');

test('testing school', () => {
    expect(testIntern.getSchool()).toBe('Fake University')
})

test('testing role', () => {
    expect(testIntern.getRole()).toBe('Intern')
})