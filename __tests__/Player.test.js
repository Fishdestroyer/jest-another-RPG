
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

test("gets player's stats as and object", ()=> {
    const player = new Player('Jeff');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  test('gets inventory from player or returns false', () => {
    const player = new Player('Jeff');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });