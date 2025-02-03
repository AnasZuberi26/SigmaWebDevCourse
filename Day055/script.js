console.log("Hey! This is tutorial 55");

var a1 = 5;
var b = 6;

console.log(a1 + b);
console.log(a1 + b + 9);

var c = "Anas";

console.log(c);
console.log(typeof a1, typeof b, typeof c);

// var is globally scope while const and let are block scope
// var can be updated and re-declared within its scope
// let can be updated but not re-declared
// const can neither updated nor re-declared

let a = 5;
console.log(a);
a = a + 1;
{
  //   console.log(a);
  let a = 66;
  console.log(a);
}
console.log(a);

{
  console.log(a1);
  var a1 = 55;
  console.log(a1);
}
console.log(a1);

let x = "Anas Munir";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
  Age: 23,
  name: "Anas",
  isSingle: true,
  "job role": "Web Developer",
};
console.log(o);

o.salary = "50k";
console.log(o);

o.salary = "80k";
console.log(o);

// Quick Quiz
nameOfStudent = "Anas Munir";
phoneNumber = "0318-8694142";
marksOfQuiz = 96;

console.log("Name   : ", nameOfStudent);
console.log("Ph NO. : ", phoneNumber);
console.log("Marks  : ", marksOfQuiz);
