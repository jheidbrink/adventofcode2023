import {
  NumberRepresentation,
  day03_part1,
  find_numbers,
  next_to_symbol,
  surrounding_fields,
} from "./day03";

const example_input = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
];

describe("day03_part1", () => {
  it("should solve part 1", () => {
    expect(day03_part1(example_input.join("\n"))).toBe(4361);
  });
});

describe("find_numbers", () => {
  it("should find all numbers in a multiline text", () => {
    expect(find_numbers(example_input)).toStrictEqual([
        new NumberRepresentation([0, 0], "467"),
        new NumberRepresentation([5, 0], "114"),
        new NumberRepresentation([2, 2], "35"),
        new NumberRepresentation([6, 2], "633"),
        new NumberRepresentation([0, 4], "617"),
        new NumberRepresentation([7, 5], "58"),
        new NumberRepresentation([2, 6], "592"),
        new NumberRepresentation([6, 7], "755"),
        new NumberRepresentation([1, 9], "664"),
        new NumberRepresentation([5, 9], "598"),
    ]);
  });
});

describe("surrounding_fields", () => {
  it("should return all surrounding fields and also the number itself", () => {
    expect(surrounding_fields(example_input, new NumberRepresentation([0, 0], "467")))
        .toBe([
            "467.",
            "...*",
        ].join(""));
    expect(surrounding_fields(example_input, new NumberRepresentation([5, 0], "114")))
        .toBe([
            ".114.",
            ".....",
        ].join(""));
    expect(surrounding_fields(example_input, new NumberRepresentation([2, 2], "35")))
        .toBe([
            "..*.",
            ".35.",
            "....",
        ].join(""))
  });
});

describe("next_to_symbol", () => {
  it("Should return true iff a number is next to a symbol", () => {
    const input = [
        ".x...x.....",
        "1..23...4.."
    ];
    expect(next_to_symbol(input, new NumberRepresentation([0, 1], "1"))).toBe(true);
    expect(next_to_symbol(input, new NumberRepresentation([3, 1], "23"))).toBe(true);
    expect(next_to_symbol(input, new NumberRepresentation([8, 1], "4"))).toBe(false);

    const more_input = [
        "467..114..",
        "...*......",
        "..35..633."
    ];
    expect(next_to_symbol(more_input, new NumberRepresentation([0, 0], "467")),).toBe(true);
    expect(next_to_symbol(more_input, new NumberRepresentation([5, 0], "114")),).toBe(false);
    expect(next_to_symbol(more_input, new NumberRepresentation([2, 2], "35")),).toBe(true);
    expect(next_to_symbol(more_input, new NumberRepresentation([6, 2], "633")),).toBe(false);
  });
});
