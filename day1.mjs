import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString();
const cleanInput = input.replace(/\n/g, " ");
const elves = cleanInput.split("  ");

const sumArray = (arr) => {
  let total = 0;
  for (const number of arr) {
    total += parseInt(number);
  }
  return total;
};

const overallTotal = [];

for (const elf of elves) {
  const numberArray = elf.split(" ");
  const thisElfsTotal = sumArray(numberArray);
  if (!isNaN(thisElfsTotal)) overallTotal.push(thisElfsTotal);
}

overallTotal.sort((a, b) => a - b).reverse();

console.log(overallTotal[0] + overallTotal[1] + overallTotal[2]);
