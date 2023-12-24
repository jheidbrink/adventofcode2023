import { day04_part1, intersection } from "./day04";

const example_input = [
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
].join("\n");

describe("day04_part1", () => {
    it("should solve part 1", () => {
        expect(day04_part1(example_input)).toBe(13);
    });
});

describe("intersection", () => {
    it("should find the intersection of two sets", () => {
        expect(intersection(new Set([1, 2, 3]), new Set([2, 3, 4]))).toStrictEqual(new Set([2, 3]));
    });
});