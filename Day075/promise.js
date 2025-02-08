console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
  4;
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was supporting you");
  } else {
    setTimeout(() => {
      console.log("Done");
      resolve("Anas");
    }, 3000);
  }
});

prom1.then((a) => {
  console.log(a);
});
