// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // // const moreNumbers = Array(5, 2);
// // // console.log(moreNumbers);

// // // const yetMoreNumbers = Array.of(1, 2);
// // // console.log(yetMoreNumbers);

// // const listItems = document.querySelectorAll("li");
// // console.log(listItems);

// // const arrayListItems = Array.from(listItems);
// // console.log(arrayListItems);

// // const hobbies = ["Cooking", "Sports"];
// // const personalData = [30, "Max", { moreDetail: [] }];

// // const analyticsData = [
// //   [1, 1.6],
// //   [-5.4, 2.1],
// // ];

// // for (const data of analyticsData) {
// //   for (const dataPoint of data) {
// //     console.log(dataPoint);
// //   }
// // }

// // console.log(personalData[1]);

// // const hobbies = ["Sports", "Cooking"];
// // hobbies.push("Reading");
// // hobbies.unshift("Coding");
// // const poppedValue = hobbies.pop();
// // hobbies.shift();
// // console.log(hobbies);

// // hobbies[1] = "Coding";
// // // hobbies[5] = 'Reading'; // rarely used
// // console.log(hobbies, hobbies[4]);

// // hobbies.splice(1, 0, "Good Food");
// // console.log(hobbies);

// // const removedElements = hobbies.splice(-2, 1);
// // console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResult = testResults.slice(2);
// const storedResult = testResults.concat([3.99, 21]);

// testResults.push(5.91);

// console.log(storedResult, testResults);
// console.log(testResults.indexOf(1.5));

// const personData = [{ name: "Max" }, { name: "Mikkel" }];
// console.log(personData.indexOf({ name: "Mikkel" }));

// const mikkel = personData.find((person, idx, persons) => {
//   return person.name === "Mikkel";
// });

// mikkel.name = "Franziska";

// console.log(mikkel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.99];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrice: price * 1(1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.99];
const tax = 0.19;

const taxAdjustedPrices  = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);
