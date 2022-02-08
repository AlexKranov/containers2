import Character from "../character";
import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("Заданный персонаж не существует", () => {
  expect(() => {
    const result = new Character("xxx", "Howkey");
    return result;
  }).toThrow();
});

test("creation Bowman", () => {
  const recieved = new Bowman("Alexey", "Bowman");
  expect(recieved).toEqual({
    name: "Alexey",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test("creation Daemon", () => {
  const recieved = new Daemon("Alexey", "Daemon");
  expect(recieved).toEqual({
    name: "Alexey",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test("creation Magician", () => {
  const recieved = new Magician("Alexey", "Magician");
  expect(recieved).toEqual({
    name: "Alexey",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test("creation Swordsman", () => {
  const recieved = new Swordsman("Alexey", "Swordsman");
  expect(recieved).toEqual({
    name: "Alexey",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test("creation Undead", () => {
  const recieved = new Undead("Alexey", "Undead");
  expect(recieved).toEqual({
    name: "Alexey",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
test("creation Zombie", () => {
  const recieved = new Zombie("Alexey", "Zombie");
  expect(recieved).toEqual({
    name: "Alexey",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});