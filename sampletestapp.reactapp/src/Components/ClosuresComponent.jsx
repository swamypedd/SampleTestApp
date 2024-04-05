import { useEffect } from "react";

export default function ClosuresComponent() {
  useEffect(function () {
    let innerFunc = outerFunction();
    console.log(`innerFunc : ${innerFunc}`);
    innerFunc();
  }, []);

  function outerFunction() {
    let outerVariable = "I am from the outer function";
    console.log(`Outer : ${outerVariable}`);
    function innerFunction() {
      console.log(`Inner : ${outerVariable}`); // Accessing outerVariable from the outer scope
    }

    return innerFunction;
  }

  return <></>;
}
