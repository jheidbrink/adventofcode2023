export class Coordinates {
    constructor(public x: number, public y: number) {}
    
    toString() {
        return reflectiveToString(this);
    }
}

export class NumberRepresentation {
  constructor(
    public coordinates: Coordinates,
    public representation: string,
  ) {}

  toString() {
    return reflectiveToString(this);
  }
}

const max = (x: number, y: number): number => {
  //return (x > y) ? x | y // TODO: how to ternary?
  if (x > y) {
    return x;
  }
  return y;
};

const min = (x: number, y: number) => {
  if (x < y) {
    return x;
  }
  return y;
};

function reflectiveToString(obj: any): string {
  const props = Object.getOwnPropertyNames(obj)
    .map((prop) => `${prop}: ${obj[prop]}`)
    .join(", ");
  return `{ ${props} }`;
}

export const surrounding_fields = (
  input_lines: string[],
  number: NumberRepresentation,
): string => {
  // return all characters that are in the surrounding fields of the number
  // concatenate to one string
  var result = "";
  const x_min = max(0, number.coordinates.x - 1);
  const x_max = min(
    input_lines[0].length - 1,
    number.coordinates.x + number.representation.length,
  );
  const y_min = max(0, number.coordinates.y - 1);
  const y_max = min(
    input_lines.length - 1,
    number.coordinates.y + 1
  );
  for (var i_y = y_min; i_y <= y_max; i_y++) {
    result += input_lines[i_y].slice(x_min, x_max + 1);
  }
  return result;
};

export const find_numbers = (
  input_string: string[],
): NumberRepresentation[] => {
  // find all numbers in the input string
  // return a list of NumberRepresentations
  var result: NumberRepresentation[] = [];
  input_string.forEach((line, i_y, _all_lines) => {
    var current_number = new NumberRepresentation(new Coordinates(0, 0), "");
    line.split("").forEach((c, i_x, _all) => {
      if (c in "0123456789".split("")) {
        if (current_number.representation.length == 0) {
          current_number.coordinates = new Coordinates(i_x, i_y);
        }
        current_number.representation += c;
      } else {
        if (current_number.representation.length > 0) {
          result.push(current_number);
          current_number = new NumberRepresentation(new Coordinates(0, 0), "");
        }
      }
    });
    // at end of line, push number
    if (current_number.representation.length > 0) {
      result.push(current_number);
      current_number = new NumberRepresentation(new Coordinates(0, 0), "");
    }
  });
  return result;
};

export const find_stars = (input: string[]): Coordinates[] => {
    var result: Coordinates[] = [];
    input.forEach((line, i_y, _all_lines) => {
        line.split("").forEach((c, i_x, _all) => {
        if (c == "*") {
            result.push(new Coordinates(i_x, i_y));
        }
        });
    });
    return result;
}

export const adjacent_numbers = (coordinates: Coordinates, numbers: NumberRepresentation[]): NumberRepresentation[] => {
    return numbers
        .filter((number) => {
            return (
                coordinates.x >= number.coordinates.x  - 1 &&
                coordinates.x <= number.coordinates.x + number.representation.length &&
                coordinates.y >= number.coordinates.y - 1 &&
                coordinates.y <= number.coordinates.y + 1
            )
        })
}

export const next_to_symbol = (
  input_string: string[],
  number: NumberRepresentation,
): boolean => {
  const symbols_in_surrounding_fields = surrounding_fields(input_string, number)
    .replace(new RegExp("\\.", "g"), "")
    .replace(new RegExp("0", "g"), "")
    .replace(new RegExp("1", "g"), "")
    .replace(new RegExp("2", "g"), "")
    .replace(new RegExp("3", "g"), "")
    .replace(new RegExp("4", "g"), "")
    .replace(new RegExp("5", "g"), "")
    .replace(new RegExp("6", "g"), "")
    .replace(new RegExp("7", "g"), "")
    .replace(new RegExp("8", "g"), "")
    .replace(new RegExp("9", "g"), "");
  return symbols_in_surrounding_fields.length > 0;
};

export const day03_part1 = (input: string): number => {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const numbers = find_numbers(lines);
  const numbers_with_symbol_next_to_them = numbers.filter((number) =>
    next_to_symbol(lines, number),
  );
  return numbers_with_symbol_next_to_them
    .map((number) => numerical(lines, number))
    .reduce((a, b) => a + b, 0);
};

export const day03_part2 = (input: string): number => {
    const lines = input.trim().split("\n").map((line) => line.trim());
    const stars = find_stars(lines)
    const numbers = find_numbers(lines)
    var result = 0;
    stars.forEach((star, i, _all_stars) => {
        const adj_numbers = adjacent_numbers(star, numbers)
        if (adj_numbers.length == 2) {
            result += numerical(lines, adj_numbers[0]) * numerical(lines, adj_numbers[1])
        }
    });
    return result
}

export const numerical = (
  input: string[],
  number: NumberRepresentation,
): number => {
  return parseInt(
    input[number.coordinates.y].slice(
      number.coordinates.x,
      number.coordinates.x + number.representation.length,
    ),
  );
};
