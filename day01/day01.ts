
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
        .replace(/one/g, "oonee")
        .replace(/two/g, "ttwoo")
        .replace(/three/g, "tthree")
        .replace(/four/g, "ffourr")
        .replace(/five/g, "ffivee")
        .replace(/six/g, "ssixx")
        .replace(/seven/g, "ssevenn")
        .replace(/eight/g, "eeightt")
        .replace(/nine/g, "nninee")
        .replace(/zero/g, "zzeroo")
        .replace(/one/g, "1")
        .replace(/two/g, "2")
        .replace(/three/g, "3")
        .replace(/four/g, "4")
        .replace(/five/g, "5")
        .replace(/six/g, "6")
        .replace(/seven/g, "7")
        .replace(/eight/g, "8")
        .replace(/nine/g, "9")
        .replace(/zero/g, "0");
    return day01_part1(converted_to_digits)
}
