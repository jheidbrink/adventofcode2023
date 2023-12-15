import * as fs from "fs";
import { day01_part1, day01_part2 } from "./day01";

const input = fs.readFileSync("day01_input", "utf8");
console.log(day01_part1(input));
console.log(day01_part2(input));
