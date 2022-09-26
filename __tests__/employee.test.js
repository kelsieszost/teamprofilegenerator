
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Person', '1', 'person@gmail.com');

    expect(employee.name).toBe('');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
});