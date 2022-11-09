const Engineer = require('../lib/Engineer');
console.log(Engineer)
const testEngineer = new Engineer('JoTest', 3, 'jt@fakemail.com', 'HackerJT');

test('testing github', () => {
    expect(testEngineer.getGitHub()).toBe('HackerJT')
})

test('testing role', () => {
    expect(testEngineer.getRole()).toBe('Engineer')
})