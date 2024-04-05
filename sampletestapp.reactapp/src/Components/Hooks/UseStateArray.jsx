import { useState } from "react";

export default function UseStateArray() {
  const [users, setUsers] = useState([
    { id: 1, name: "rahul" },
    { id: 2, name: "sachin" },
  ]);

  const updateUsersList = (name) => {
    setUsers([...users, {
      id: users.length + 1,
      name: name,
    }]);
  };

  return (
    <>
      <p>{JSON.stringify(users)}</p>
      <form>
        <label>
          User Name :
          <input
            type="text"
            name="username"
            onBlur={(e) => updateUsersList(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
