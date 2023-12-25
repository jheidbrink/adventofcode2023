function reflectiveToString(obj: any): string {
  const props = Object.getOwnPropertyNames(obj)
    .map((prop) => `${prop}: ${obj[prop]}`)
    .join(", ");
  return `{ ${props} }`;
}

export class Numbers extends Set<number> {
    constructor(iterable?: Iterable<number>) {
        super(iterable);
    }
    
    toString() {
        return Array.from(this).join(", ");
    }
}

export class N {
    constructor(public value: number) { }

    toString() {
        return reflectiveToString(this);
    }

    times(callback: () => undefined) {
        for (var i = 0; i < this.value; i++) {
            callback();
        }
    }
}

export class Card {
    constructor(public winningNumbers: Numbers, public numbersYouHave: Numbers) { }

    toString() {
        return reflectiveToString(this);
    }

    winningNumbersYouHave(): Numbers {
        return intersection(this.winningNumbers, this.numbersYouHave);
    }

    value(): number {
        switch (this.winningNumbersYouHave().size)
        {
            case 0:
                return 0;
            case 1:
                return 1;
            // catch-all case
            default:
                return 2**(this.winningNumbersYouHave().size - 1);
        }
    }
}

export const intersection = (a: Numbers, b: Numbers): Numbers => {
    return new Numbers([...a].filter(x => b.has(x)));
}

export const day04_part1 = (input: string): number => {
    const lines = inputLines(input)
    const cards = lines.map((line) => parse_card(line));
    const values = cards.map(card => card.value())
    return values.reduce((a, b) => a + b, 0);
}

export const day04_part2 = (input: string): number => {
    const lines = inputLines(input)
    const cards = lines.map(line => parse_card(line));
    var cardStack = Array(cards.length).fill(1);
    var result = 0;
    cards.forEach((card, index) => {
        const multiplier = cardStack[index];
        new N(multiplier).times(() => {
            result += 1;
            if (card.winningNumbersYouHave().size > 0) {
                for (var i = 1; i < card.winningNumbersYouHave().size + 1; i++) {
                    cardStack[index + i] += 1
                }
            }
        })
    })
    return result;
}

const inputLines = (input: string): string[] => {
    return input.trim().split("\n").map((line) => line.trim());
}

const parse_card = (line: string): Card => {
    const [name, numbers] = line.split(":");
    const _cardNumber = parseInt(name.split(" ")[1]);
    //console.log(_cardNumber)
    const [winningRepr, numbersYouHaveRepr] = numbers.split("|");
    const winningNumbers = new Numbers(
        winningRepr
        .trim()
        .split(" ")
        .map((numberRepr) => parseInt(numberRepr.trim()))
        .filter((number) => !isNaN(number))
    );
    //console.log(winningNumbers)
    const numbersYouHave = new Numbers(
        numbersYouHaveRepr
        .trim()
        .split(" ")
        .map((numberRepr) => parseInt(numberRepr.trim()))
        .filter((number) => !isNaN(number))
    );
    //console.log(numbersYouHave)
    return new Card(winningNumbers, numbersYouHave)
}