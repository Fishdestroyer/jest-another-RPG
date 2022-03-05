
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');
console.log(new Potion());

const Player = require('../lib/Player');
//const potion = require('../lib/Potion');


test('creates a player object', () => {
    const player = new Player('Jeff');

    expect(player.name).toBe('Jeff');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});