import { useEffect } from "react";

export default function ArrayFunctions() {
  function forEachElementInArray() {
    console.log(`---*** forEach ***---`);
    let scores = [12, 55, 70];
    scores.forEach((score, index, array) => {
      console.log(`${index} ${score}`);
    });
  }

  function MapElementInArray() {
    console.log(`---*** map ***---`);
    let scores = [12, 55, 70];
    var mappedArray = scores.map((score, index) => {
      return { index, score };
    });
    console.log(mappedArray);
  }

  function FilterElementInArray() {
    console.log(`---*** filter ***---`);
    let scores = [12, 55, 70];
    var filterededArray = scores.filter((value, index) => {
      return value % 2 === 0;
    });
    console.log(filterededArray);
  }

  function ReduceElementsInArray() {
    console.log(`---*** reduce ***---`);
    let scores = [12, 55, 70];
    var total = scores.reduce(function (sum, element) {
      return sum + element;
    }, 0);
    console.log(total);
  }

  function FindElementsInArray() {
    console.log(`---*** find ***---`);
    let scores = [12, 55, 70];
    var findResult = scores.find(function (element) {
      return element % 2 === 0;
    }, 0);
    console.log(findResult);
  }

  function FindIndexElementsInArray() {
    console.log(`---*** findIndex ***---`);
    let scores = [13, 12, 55, 70];
    var findIndexResult = scores.findIndex(function (element) {
      return element % 2 === 0;
    }, 0);
    console.log(findIndexResult);
  }

  function SomeElementsInArray() {
    console.log(`---*** some ***---`);
    let scores = [2, 5, 8, 1, 4];
    var someResult = scores.some(function (element) {
      return element % 2 === 0;
    }, 0);
    console.log(someResult);
  }

  function EveryElementsInArray() {
    console.log(`---*** every ***---`);
    let scores = [2, 5, 8, 1, 4];
    var everyResult = scores.every(function (element) {
      return element % 2 === 0;
    }, 0);
    console.log(everyResult);
  }

  useEffect(function () {
    forEachElementInArray();
    MapElementInArray();
    FilterElementInArray();
    ReduceElementsInArray();
    FindElementsInArray();
    FindIndexElementsInArray();
    SomeElementsInArray();
    EveryElementsInArray();
  }, []);

  return <></>;
}
