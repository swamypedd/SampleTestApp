import { useEffect } from "react";

export default function TestComponent() {
  useEffect(function () {
    const obj1 = { a: 1, b: 2, e: 5 };
    const obj2 = { c: 3, d: 4, e: 6 };

    const mergedObj = { ...obj1, ...obj2 };
    console.log({ ...obj1, ...obj2 });
    console.log({ ...obj2, ...obj1 });

  }, []);

  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
}
