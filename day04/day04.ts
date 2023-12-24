function reflectiveToString(obj: any): string {
  const props = Object.getOwnPropertyNames(obj)
    .map((prop) => `${prop}: ${obj[prop]}`)
    .join(", ");
  return `{ ${props} }`;
}

export class Card {
    constructor(public winningNumbers: Set<number>, public numbersYouHave: Set<number>) { }

    toString() {
        return reflectiveToString(this);
    }
}

export const intersection = (a: Set<number>, b: Set<number>): Set<number> => {
    return new Set([...a].filter(x => b.has(x)));
}

export const day04_part1 = (input: string): number => {
    const lines = inputLines(input)
    const cards = lines.map((line) => parse_card(line));
    const values = cards.map(cardValue)
    return values.reduce((a, b) => a + b, 0);
}

const inputLines = (input: string): string[] => {
    return input.trim().split("\n").map((line) => line.trim());
}

const cardValue = (card: Card): number => {
    const winningNumbersYouHave = intersection(card.winningNumbers, card.numbersYouHave);
    switch (winningNumbersYouHave.size)
        {
            case 0:
                return 0;
            case 1:
                return 1;
            // catch-all case
            default:
                return 2**(winningNumbersYouHave.size - 1);
        }
}

const parse_card = (line: string): Card => {
    const [name, numbers] = line.split(":");
    const _cardNumber = parseInt(name.split(" ")[1]);
    //console.log(_cardNumber)
    const [winningRepr, numbersYouHaveRepr] = numbers.split("|");
    const winningNumbers = new Set(
        winningRepr
        .trim()
        .split(" ")
        .map((numberRepr) => parseInt(numberRepr.trim()))
        .filter((number) => !isNaN(number))
    );
    //console.log(winningNumbers)
    const numbersYouHave = new Set(numbersYouHaveRepr.trim().split(" ").map((numberRepr) => parseInt(numberRepr.trim())));
    //console.log(numbersYouHave)
    return new Card(winningNumbers, numbersYouHave)
}