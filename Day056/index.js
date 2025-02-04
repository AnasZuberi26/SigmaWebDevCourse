// console.log("I am Conditional Tutorial");

let age = 17;
let grace = 2

if ((age+grace) >= 18) {
  console.log("You can drive");
} else if(age == 0) {
    console.log("Are you kiding?")
}else{
    console.log("You cannot drive");
}

// console.log(age+grace)
// console.log(age-grace)
// console.log(age*grace)
// console.log(age/grace)

// console.log(age**grace)
// console.log(age%grace)
// console.log(age++)
// console.log(age--)
// console.log(++age)
// console.log(--age)

age += grace
// console.log(age)

age -= grace 
// console.log(age)

// console.log("3"==3)
// console.log("3"!=3)
// console.log("3"===3)
// console.log("3"!==3)
// console.log(5>4)
// console.log(5<4)

// console.log(age!=grace && age<=grace)
// console.log(age!=grace || age<=grace)

c = age>grace ?(age+grace) :(age-grace)
console.log("Value of c : ",c)