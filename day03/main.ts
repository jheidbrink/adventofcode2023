import * as fs from "fs";
import { day03_part1, day03_part2 } from "./day03";

const input = fs.readFileSync("input.txt", "utf8");
console.log(`day03_part1: ${day03_part1(input)}`);
console.log(`day03_part2: ${day03_part2(input)}`);