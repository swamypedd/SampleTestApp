import UseContextHookChildSecondLevel from "./UseContextHookChildSecondLevel";

export default function UseContextHookFirstLevelChild() {
  const ModifyUser = () => {};

  return (
    <>
      <h3>Use Context Hook Child First Level</h3>
      <hr />
      <UseContextHookChildSecondLevel />
    </>
  );
}
