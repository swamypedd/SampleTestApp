import { useState } from "react";

export default function UseStateObject() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>useState with objects</h3>
      <p>{JSON.stringify(user)}</p>
      <form>
        <label>
          User Name :
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          First Name :
          <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Last Name :
          <input type="text" name="lastName" onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
