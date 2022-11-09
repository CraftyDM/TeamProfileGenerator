const Employee = require('../lib/Employee');

const testEmployee = new Employee('JoTest', 3, 'jt@fakemail.com');

test('testing constructor', () => {
    const dummyEmployee = new Employee('JoTest', 3, 'jt@fakemail.com');
    expect(dummyEmployee.getName()).not.toBeNull()
});

test('testing name', () => {
    expect(testEmployee.getName()).toBe('JoTest')
})

test('testing id', () => {
    expect(testEmployee.getId()).toEqual(3)
})

test('testing email', () => {
    expect(testEmployee.getEmail()).toBe('jt@fakemail.com')
})