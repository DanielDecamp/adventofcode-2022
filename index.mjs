import InputLoader from "./InputLoader.mjs";

const combos = [
  { name: "Rock", key: "A", losesTo: "B", value: 1 },
  { name: "Paper", key: "B", losesTo: "C", value: 2 },
  { name: "Scissors", key: "C", losesTo: "A", value: 3 },
];

const run = async () => {
  const data = await InputLoader.LoadInput("./input.txt", ",", ",");

  let totalScore = 0;

  for (const match of data) {
    const terms = match.split(" ");
    const termOne = terms[0];
    let termTwo = terms[1];

    if (termTwo === "X") {
      // We need to lose

      for (const matchType of combos) {
        const { losesTo, value } = matchType;

        if (termOne === losesTo) {
          totalScore += value;
        }
      }
    }

    if (termTwo === "Y") {
      // Draw
      for (const matchType of combos) {
        const { key, value } = matchType;

        if (termOne === key) {
          totalScore += value;
        }
      }
      totalScore += 3;
    }

    if (termTwo === "Z") {
      // Win
      let winner = null;
      for (const matchType of combos) {
        const { key, losesTo } = matchType;

        if (termOne === key) {
          winner = losesTo;
        }
      }

      for (const matchType of combos) {
        const { key, value } = matchType;

        if (winner === key) {
          totalScore += value;
        }
      }

      totalScore += 6;
    }
  }

  console.log(totalScore);
};

run();
