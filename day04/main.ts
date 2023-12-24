import * as fs from "fs";
import { day04_part1 } from "./day04";

const input = fs.readFileSync("input.txt", "utf8");
console.log(day04_part1(input))