export default function CopyShallowDeep() {
  /* Primitive types are always deep copied */
  console.log("Primitive types are always deep copied");
  var userOriginal = "john";
  var userCopy = userOriginal;
  console.log(`User: ${userOriginal} \t UserCopy: ${userCopy}`);
  userCopy = "peter";
  console.log(`User: ${userOriginal} \t UserCopy: ${userCopy}`);

  console.log("************************");

  /* object types are always shallow copied, if assigned directly */
  console.log("object types are always shallow copied, if assigned directly");
  var userObj = { name: "john", age: 20 };
  var userObjCopy = userObj;
  console.log(userObj);
  console.log(userObjCopy);
  userObjCopy.name = "peter";
  userObj.age = 25;
  console.log(userObj);
  console.log(userObjCopy);

  console.log("************************");

  /* object types can be shallow copied using the JSON.stringify() */
  console.log("object types can be shallow copied using the JSON.stringify()");
  var userObject = { name: "john", age: 20 };
  var userObjectCopy = JSON.parse(JSON.stringify(userObject));
  console.log(userObject);
  console.log(userObjectCopy);
  userObject.name = "peter";
  userObjectCopy.age = 25;
  console.log(userObject);
  console.log(userObjectCopy);

  console.log("************************");

  /* object types can be shallow copied using the object.assign */
  console.log("object types can be shallow copied using the object.assign");



  // const userObjConstant = { name: "john", age: 20 };
  // var userObjConstantCopy = userObjConstant;

  // console.log(userObjConstant);
  // console.log(userObjConstantCopy);

  // userObjConstant.name = "gross";
  // userObjConstant.age = 35;

  // console.log(userObjConstant);
  // console.log(userObjConstantCopy);

  // userObjConstantCopy.name = "carter";
  // userObjConstantCopy.age = 45;

  // console.log(userObjConstant);
  // console.log(userObjConstantCopy);

  // userObjConstant.name = "hugo";
  // userObjConstant.age = 15;

  // console.log(userObjConstant);
  // console.log(userObjConstantCopy);

  return <h4>Shallow vs Deep Copy</h4>;
}
