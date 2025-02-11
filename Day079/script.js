let a = prompt("Enter 1st number : ");
let b = prompt("Enter 2nd number : ");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}

console.log("The sum is", parseInt(a) + parseInt(b));

function main() {
  let x = 1;
  try {
    console.log("The sum is", (parseInt(a) + parseInt(b)) * x);
    return true;
  } catch (error) {
    console.log("Error Here!");
    //   console.log(error.name);
    //   console.log(error.message);
    //   console.log(error.stack);
    return false;
  } finally {
    console.log("Files are being close and db conection is being closed");
  }
}

let c = main();
