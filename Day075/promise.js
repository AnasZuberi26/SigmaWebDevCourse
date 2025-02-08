console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Done");
    resolve("Anas");
  }, 3000);
});

prom1.then((a) => {
  console.log(a);
});
