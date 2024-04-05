import { useState, createContext } from "react";
import UseContextHookFirstLevelChild from "./UseContextHookChildFirstLevel";

export const UserContext = createContext(null);

export default function UseContextHookParent() {
  const [user, setUser] = useState({
    name: "john",
    age: 18,
  });

  const incrementUserAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const userContextObject = { ...user, addAge: incrementUserAge };

  return (
    <>
      <h2>Use Context Hook Parent</h2>
      <p>{JSON.stringify(user)}</p>
      <p>{JSON.stringify(userContextObject)}</p>
      <button onClick={incrementUserAge}>+ + +</button>
      <UserContext.Provider value={userContextObject}>
        <hr />
        <UseContextHookFirstLevelChild />
      </UserContext.Provider>
    </>
  );
}
