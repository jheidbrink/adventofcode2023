
export const day01_part1 = (input: string): number => {
    var result = 0;
    const lines = input.trim().split("\n");
    for (const line of lines) {
        const numbers = line.split("").filter((c) => !isNaN(parseInt(c, 10))).map((c) => parseInt(c, 10));
        result += 10 * numbers[0] + numbers[numbers.length - 1];
    }
    return result
}

export const day01_part2 = (input: string): number => {
    const converted_to_digits = input
        .replace(/one/g, "o1e")
        .replace(/two/g, "t2o")
        .replace(/three/g, "t3e")
        .replace(/four/g, "f4r")
        .replace(/five/g, "f5e")
        .replace(/six/g, "s6x")
        .replace(/seven/g, "s7n")
        .replace(/eight/g, "e8t")
        .replace(/nine/g, "n9e")
        .replace(/zero/g, "z0o")
    return day01_part1(converted_to_digits)
}
