const { getTopLikedTweets } = require("./topTweets.js");
const set1 = require("../tests-cases/set1.json");
const set2 = require("../tests-cases/set2.json");
const set3 = require("../tests-cases/set3.json");
describe("getTopLikedTweets  Loop 1-100, id = 1-> 100 like = 1->100", () => {
  const testSet = [...set1];
  testSet.sort((a, b) => b.likes - a.likes);
  for (let i = 0; i < set1.length; i++) {
    const expected = testSet.slice(0, i + 1);
    test(`should return the top ${i + 1} tweets with the highest likes`, () => {
      const result = getTopLikedTweets(set1, i + 1);
      expect(result).toEqual(expected);
    });
  }
});

describe("getTopLikedTweets  Loop 1-100, id = 1-> 100 like = 1->100", () => {
  const testSet = [...set2];
  testSet.sort((a, b) => b.likes - a.likes);
  for (let i = set2.length - 1; i >= 0; i--) {
    const expected = testSet.slice(0, i + 1);
    test(`should return the top ${
      i + 1
    } tweets with the highest likes expected`, () => {
      const result = getTopLikedTweets(set1, i + 1);
      expect(result).toEqual(expected);
    });
  }
});

describe("getTopLikedTweets  Loop Random, id = 1->100, likes = rand(0, 10000)", () => {
  const testSet = [...set3];
  testSet.sort((a, b) => b.likes - a.likes);

  const randomKs = [30, 90, 20, 13, 2, 4, 6,98,34, 33, 66, 67,89, 40, 50, 14, 56];
  for (let i = 0; i < randomKs.length; i++) {
    const randomK = randomKs[i];
    const expected = testSet.slice(0, randomK);
    console.log("expected ", expected);
    test(`should return the top ${randomK} tweets with the highest likes`, () => {
      const result = getTopLikedTweets(set3, randomK);
      console.log("result ", result);
      expect(result).toEqual(expected);
    });
  }
});
