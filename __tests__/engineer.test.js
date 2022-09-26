const Engineer = require('../lib/engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('', '', '', '');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
}); 