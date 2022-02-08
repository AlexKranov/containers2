import Character from "../character";
import Team from "../Team";
import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("добавление персонажа в команду", () => {
  const alex = new Daemon("Alexey", "Daemon");
  const team = new Team();
  team.add(alex);
  expect(team.members.has(alex)).toBe(true);
});

test("невозможность повторного добавления персонажа", () => {
  const ivan = new Magician("Ivan", "Magician");
  const team = new Team();
  team.add(ivan);
  expect(() => {
    team.add(ivan);
  }).toThrow("Такой персонаж уже есть");
});

test("добавление нескольких персонажей в команду", () => {
  const nikita = new Bowman("Nikita", "Bowman");
  const masha = new Swordsman("Masha", "Swordsman");

  const team = new Team();
  team.addAll(nikita, masha);
  expect(team.members.size).toBe(2);
});

test("addAll - отсутвие ошибки дублирования персонажей", () => {
  const alex = new Bowman("Valera", "Bowman");
  const vika = new Swordsman("Vika", "Swordsman");

  const team = new Team();
  team.addAll(alex, vika);
  expect(() => {
    team.addAll(alex, vika);
  });
  expect(team.members.size).toBe(2);
});

test("преобразование в массив", () => {
  const alex = new Undead("Alexey", "Undead");
  const vika = new Zombie("Vika", "Zombie");

  const team = new Team();
  team.addAll(alex, vika);
  const received = team.toArray();
  const result = [
    {
      name: "Alexey",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      deffence: 25,
    },
    {
      name: "Vika",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      deffence: 10,
    },
  ];
  expect(received).toEqual(result);
});