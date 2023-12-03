import * as fs from "fs";
import { day02_part1, day02_part2 } from "./day02";

const input = fs.readFileSync("day02_input", "utf8");
console.log(day02_part1(input, { red: 12, green: 13, blue: 14 }));
console.log(day02_part2(input));
