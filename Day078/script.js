const msg = [
  "Initializing Hacking",
  "Reading your Files",
  "Password Files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];

async function getStatement(element) {
  let time = Math.ceil(Math.random() * 7);
  return new Promise((resolve) => {
    setTimeout(() => {
      //   console.log(time);
      //   console.log(element);
      resolve(element);
    }, time * 1000);
  });
}

async function main() {
  setInterval(() => {
    let last = document.querySelector(".container").lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 300);

  for (let i = 0; i < msg.length; i++) {
    const element = msg[i];
    state = await getStatement(element);
    console.log(state);

    let p = document.createElement("p");
    p.innerHTML = `${state}`;
    document.querySelector(".container").append(p);
  }
}

main();
