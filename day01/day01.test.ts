import { day01 } from "./day01";

describe("day01", () => {
    it("should solve the puzzle", () => {
        const input = `
        1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet
        `;
        expect(day01(input)).toBe(142);
    });
});