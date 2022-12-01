const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  // Map the elements of the array tutorials into the array newTitle
  let newTitle = tutorials.map(function (string) {
    // split array tutorials into an array of substrings and map the results into a new array.
    let case1 = string.split(" ");
    // Title case every word in the case1 array using a .map() method
    let case2 = case1.map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    });
    // Join all uppercased words into one string
    let case3 = case2.join(" ");
    return case3;
  });
  return newTitle;
};
console.log(titleCased());
