let solutionArray = [];

const ginTypes = [
  {
    nr: 1,
    name: "Flat Liner",
    ingrediants: ["neutral", "low", "fruity", "simple", "none"],
    caregory: "bad",
    catchphrase:
      "Please try some adult drinks first. This should never happen again.",
  },
  {
    nr: 2,
    name: "Over the Top",
    ingrediants: ["flavoured", "low", "spicy & herbal", "complex", "none"],
    caregory: "okay",
    catchphrase:
      "Please try some adult drinks first. This should never happen again.",
  },
  {
    nr: 3,
    name: "Always Yes",
    ingrediants: ["neutral", "low", "rooty", "simple", "none"],
    caregory: "okay",
    catchphrase: "Fits in every situation, like bad breath.",
  },
  {
    nr: 4,
    name: "No idea, but yes!",
    ingrediants: ["flavoured", "medium", "fruity", "simple", "barrel aged"],
    caregory: "",
    catchphrase: "Never tasted something like this before, but cool.",
  },
  {
    nr: 5,
    name: "Spicy Desert Monkey",
    ingrediants: ["neutral", "low", "spicy & herbal", "complex", "none"],
    caregory: "good",
    catchphrase: "It's like a party of every spice in the world at once.",
  },
  {
    nr: 6,
    name: "Heavy Metal",
    ingrediants: ["flavoured", "strong", "rooty", "complex", "none"],
    caregory: "okay",
    catchphrase: "Can't stand this for long, but when I survive it, I level up",
  },
  {
    nr: 7,
    name: "Flower Lover",
    ingrediants: ["neutral", "medium", "spicy & herbal", "simple", "none"],
    caregory: "okay",
    catchphrase: "Did you ever eat a flower before? You don't need anymore.",
  },
  {
    nr: 8,
    name: "Hell of a Gin",
    ingrediants: ["flavoured", "strong", "rooty", "complex", "barrel aged"],
    caregory: "bad",
    catchphrase: "Holy Moly! It's like Heavy Metal, without happy ending.",
  },
  {
    nr: 9,
    name: "Best choise out of one",
    ingrediants: ["neutral", "low", "spicy & herbal", "simple", "barrel aged"],
    caregory: "bad",
    catchphrase:
      "Consider to choose something else. Did you try drinking bleach? ",
  },
  {
    nr: 10,
    name: "/*too old*/",
    ingrediants: ["flavoured", "medium", "spicy & herbal", "simple", "none"],
    caregory: "bad",
    catchphrase: "This Gin taste like something Queen Mom would drink.",
  },
  {
    nr: 11,
    name: "Bubble Gum",
    ingrediants: ["neutral", "strong", "fruity", "complex", "none"],
    caregory: "bad",
    catchphrase:
      "You know this candy with a special taste, you swear to god to never eat again? It's like this.",
  },
  {
    nr: 12,
    name: "Gods Ambrosia",
    ingrediants: [
      "flavoured",
      "medium",
      "spicy & herbal",
      "complex",
      "barrel aged",
    ],
    caregory: "good",
    catchphrase:
      "With your golden tongue and depp knowledge you have proven to be a heavenly good.",
  },
  {
    nr: 13,
    name: "Could be Vodka",
    ingrediants: ["neutral", "low", "spicy & herbal", "simple", "none"],
    caregory: "bad",
    catchphrase: "Did you realy try? I mean, come on...",
  },
  {
    nr: 14,
    name: "Normal Gin",
    ingrediants: ["neutral", "medium", "rooty", "simple", "none"],
    caregory: "okay",
    catchphrase: "BORING! Please try again. And again.",
  },
  {
    nr: 15,
    name: "What is this?",
    ingrediants: ["flavoured", "medium", "rooty", "simple", "barrel aged"],
    caregory: "bad",
    catchphrase: "You can drink it, but try first please!",
  },
  {
    nr: 16,
    name: "Going to be extinct",
    ingrediants: ["", "", "", "", ""],
    caregory: "no way",
    catchphrase:
      "I'm not happy with it, but someone has to tell you: you are bad at this.",
  },
];

function arrayMatch(selectedArray, ginTypeArray) {
  let arr = []; // Array to contain match elements
  for (var i = 0; i < selectedArray.length; ++i) {
    for (var j = 0; j < ginTypeArray.length; ++j) {
      if (selectedArray[i] == ginTypeArray[j]) {
        // If element is in both the arrays
        arr.push(selectedArray[i]); // Push to arr array
      }
    }
  }
  return arr; // Return the arr elements
}

let matches = {};
for (let i = 0; i < ginTypes.length; i++) {
  matches[`${ginTypes[i].nr}`] = arrayMatch(
    solutionArray,
    ginTypes[i].ingrediants
  );
}

let bestMatch = [0, []];
for (match in matches) {
  if (matches[match].length > bestMatch[1].length) {
    bestMatch[0] = match - 1;
    bestMatch[1] = matches[match];
  }
}
if (bestMatch[1].length === 5) {
  console.log("good one");
} else {
  console.log("try again");
}

console.log(
  `${ginTypes[bestMatch[0]].name} --> ${ginTypes[bestMatch[0]].catchphrase}`
);

console.log(ginTypes[bestMatch[0]].ingrediants[0]);
//let bestMatch = {};
//for (let i = 0; i < matches.length; i++) {
//  bestMatch.push(matches[i]);
//}
