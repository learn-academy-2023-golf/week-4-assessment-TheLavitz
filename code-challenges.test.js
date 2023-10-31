// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shortShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ];
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("Removes the first item from the array", () => {
    expect(shortShuffle(colors1)).toEqual(
      expect.not.arrayContaining(["purple"])
    );
    expect(shortShuffle(colors2)).toEqual(
      expect.not.arrayContaining(["chartreuse"])
    );
  });
  it("Shuffles the remaining items", () => {
    expect(shortShuffle(colors1)).not.toEqual([
      "blue",
      "green",
      "yellow",
      "pink",
    ]);
    expect(shortShuffle(colors2)).not.toEqual([
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ]);
  });
});

// b) Create the function that makes the test pass.

// Pseudo code:
// Declare a function called shortShuffle
// Input: An array
// Input: An array
// Use .shift() to remove the first value at the 0 index of the array
// Use a Fisher-Yates shuffle to rearrange the rest of the values in the array

const shortShuffle = (array) => {
  array.shift();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("votesDifference", () => {
  const votes1 = { upVotes: 13, downVotes: 2 };
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 };
  // Expected output: -31
  it("Takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(votesDifference(votes1)).toEqual(11);
    expect(votesDifference(votes2)).toEqual(-31);
  });
});

// b) Create the function that makes the test pass.

// Pseudo code:
// Declare a function called votesDifference
// Input: an object
// Output: a number
// Use dot notation to access the values stored at the correct keys and subtract downVotes from upVotes

const votesDifference = (object) => {
  return object.upVotes - object.downVotes;
};
