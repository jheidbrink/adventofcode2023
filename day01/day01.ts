
export const day01 = (input: string): number => {
    var result = 0;
    const lines = input.trim().split("\n");
    for (const line of lines) {
        const numbers = line.split("").filter((c) => !isNaN(parseInt(c, 10))).map((c) => parseInt(c, 10));
        result += 10 * numbers[0] + numbers[numbers.length - 1];
    }
    return result
}