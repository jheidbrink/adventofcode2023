import * as fs from "fs";
import { day03_part1 } from "./day03";

const input = fs.readFileSync("input.txt", "utf8");
console.log(`day03_part1: ${day03_part1(input)}`);