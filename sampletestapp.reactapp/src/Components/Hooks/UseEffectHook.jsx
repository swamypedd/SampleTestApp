import { useEffect, useState } from "react";

export default function UseEffectHook() {
  var [counter, setCounter] = useState(0);

  //No second arg, runs on every render
  useEffect(function () {
    console.log("First render and rerender");
  });

  //Empty array second arg, runs on first render
  useEffect(function () {
    console.log("First render only");
  }, []);

  //State passed as second arg, runs on first render and when dependent state and props are changed.
  useEffect(
    function () {
      console.log("First render and when state and props change");
    },
    [counter]
  );

  return (
    <>
      <h4>Counter Value : {counter}</h4>
      <button
        onClick={function () {
          setCounter(counter + 1);
        }}
      >
        Add One More
      </button>
      <UseEffectHookChild counter={counter} />
    </>
  );
}

function UseEffectHookChild({ counter }) {
  useEffect(
    function () {
      console.log(
        "Child Component First render and when state and props change"
      );
    },
    [counter]
  );

  return (
    <>
      <p>UseEffectHookChild : {counter}</p>
      {counter % 2 === 0 ? <UseEffectHookUnmountChild /> : <></>}
    </>
  );
}

function UseEffectHookUnmountChild() {
  useEffect(function () {
    console.log(`UseStateHookUnmountChild Mounting`);

    return () => {
      console.log(`UseStateHookUnmountChild Unmounting`);
    }

  });

  return <>Counter is even number</>;
}
