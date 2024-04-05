import { useContext } from "react";
import { UserContext } from "./UseContextHookParent";

export default function UseContextHookChildSecondLevel() {
  let user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h5>Use Context Hook Child Second Level</h5>
      <center>
        <table>
          <tbody>
            <tr>
              <td>Username : </td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Age : </td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button onClick={user.addAge}>+ + +</button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );
}
