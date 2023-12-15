import { day02_part1, day02_part2, parse_draw, parse_game } from "./day02";

describe("parse_draw", () => {
  it("should parse a draw", () => {
    expect(parse_draw("4 red, 2 green, 6 blue")).toEqual({
      red: 4,
      green: 2,
      blue: 6,
    });
    expect(parse_draw("3 red, 4 blue")).toEqual({ red: 3, green: 0, blue: 4 });
  });
});

describe("parse_game", () => {
  it("should parse a line into a game object", () => {
    const input = "Game 31: 4 red, 2 green, 6 blue; 1 red; 2 red, 5 blue";
    expect(parse_game(input)).toEqual({
      id: 31,
      draws: [
        { red: 4, green: 2, blue: 6 },
        { red: 1, green: 0, blue: 0 },
        { red: 2, green: 0, blue: 5 },
      ],
    });
  });
});

describe("day02_part1", () => {
  it("should sum the IDs of all valid games", () => {
    const input = `
            Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
            Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
            Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
            Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
            Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
    expect(day02_part1(input, { red: 12, green: 13, blue: 14 })).toBe(8);
  });
});

describe("day02_part2", () => {
  it("should solve part 2", () => {
    const input = `
            Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
            Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
            Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
            Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
            Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
    expect(day02_part2(input)).toBe(2286);
  });
});
