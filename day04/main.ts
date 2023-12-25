import * as fs from "fs";
import { day04_part1, day04_part2 } from "./day04";

const input = fs.readFileSync("input.txt", "utf8");
console.log(day04_part1(input))
console.log(day04_part2(input))