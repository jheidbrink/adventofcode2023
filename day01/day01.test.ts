import { day01_part1, day01_part2 } from "./day01";

describe("day01_part1", () => {
  it("should solve the puzzle", () => {
    const input = `
        1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet
        `;
    expect(day01_part1(input)).toBe(142);
  });
});

describe("day01_part1", () => {
  it("should solve the puzzle", () => {
    const input = `
        two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen
        `;
    expect(day01_part2(input)).toBe(281);
  });
});
