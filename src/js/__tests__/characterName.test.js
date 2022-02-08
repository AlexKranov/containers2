import Character from "../character";

test("Количество символов в имени менее 2", () => {
  expect(() => {
    const result = new Character("a", "Swordsman");
    return result;
  }).toThrow();
});

test("Количество символов в имени более 10", () => {
  expect(() => {
    const result = new Character("aaaaaaaaaaaa", "Swordsman");
    return result;
  }).toThrow();
});

test("Имя не является строкой", () => {
  expect(() => {
    const result = new Character(555555, "Swordsman");
    return result;
  }).toThrow();
});