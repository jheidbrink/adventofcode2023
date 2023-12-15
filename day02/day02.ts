export type Draw = {
  red: number;
  green: number;
  blue: number;
};

export type Game = {
  id: number;
  draws: Draw[];
};

export const parse_draw = (draw_repr: string): Draw => {
  // from "4 red, 2 green, 6 blue" to {red: 4, green: 2, blue: 6}
  // from "3 red, 4 blue" to {red: 3, green: 0, blue: 4}
  var draw: Draw = { red: 0, green: 0, blue: 0 };
  for (const item of draw_repr.trim().split(",")) {
    const [amount, color] = item.trim().split(" ");
    if (color == "red") {
      draw.red = parseInt(amount);
    } else if (color == "green") {
      draw.green = parseInt(amount);
    } else if (color == "blue") {
      draw.blue = parseInt(amount);
    } else {
      throw new Error("Unknown color: " + color + " from item " + item);
    }
  }
  return draw;
};

export const parse_game = (line: string): Game => {
  const [game_description, rest] = line.split(":");
  const game_id = parseInt(game_description.trim().split(" ")[1]);
  if (isNaN(game_id)) {
    throw Error("Game ID is NaN: " + game_id + " from line " + line);
  }
  return { id: game_id, draws: rest.trim().split(";").map(parse_draw) };
};

export const day02_part1 = (input: string, bag_contents: Draw): number => {
  const games = input.trim().split("\n").map(parse_game);
  var result = 0;
  return games
    .map((game) => (is_valid_game(game, bag_contents) ? game.id : 0))
    .reduce((a, b) => a + b, 0);
};

export const is_valid_game = (game: Game, bag_contents: Draw): boolean => {
  return game.draws.every((draw) => is_valid_draw(draw, bag_contents));
};

export const is_valid_draw = (draw: Draw, bag_contents: Draw): boolean => {
  return (
    draw.red <= bag_contents.red &&
    draw.green <= bag_contents.green &&
    draw.blue <= bag_contents.blue
  );
};

export const day02_part2 = (input: string): number => {
  const games = input.trim().split("\n").map(parse_game);
  return games
    .map((game) => fewest_number_of_cubes_in_bag(game.draws))
    .map(power)
    .reduce((a, b) => a + b, 0);
};

export const fewest_number_of_cubes_in_bag = (draws: Draw[]): Draw => {
  const maxForEachColor = (drawA: Draw, drawB: Draw): Draw => {
    return {
      red: Math.max(drawA.red, drawB.red),
      green: Math.max(drawA.green, drawB.green),
      blue: Math.max(drawA.blue, drawB.blue),
    };
  };
  return draws.reduce(maxForEachColor, { red: 0, green: 0, blue: 0 });
};

export const power = (draw: Draw): number => {
  return draw.red * draw.green * draw.blue;
};
