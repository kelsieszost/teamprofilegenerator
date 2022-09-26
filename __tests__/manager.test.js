const Manager = require('../lib/manager.js');

test('creates manager object', () => {
    const manager = new Manager('', '', '', '');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});