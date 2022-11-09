const Manager = require('../lib/Manager');

const testManager = new Manager('JoTest', 3, 'jt@fakemail.com', '203B');

test('testing officeNumber', () => {
    expect(testManager.getOfficeNumber()).toBe('203B')
})

test('testing role', () => {
    expect(testManager.getRole()).toBe('Manager')
})