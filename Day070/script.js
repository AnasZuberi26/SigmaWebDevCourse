console.log(document.body.querySelectorAll(".box"));

document.body.querySelectorAll(".box").forEach((element) => {
  backgroundColor = ["aliceblue", "antiquewhite", "azure", "bisque", "beige"];
  color = ["red", "green", "blue", "blueviolet", "teal"];
  b_Index = generateRandom();
  c_Index = generateRandom();
  element.style.backgroundColor = backgroundColor[b_Index];
  element.style.color = color[c_Index];
});

function generateRandom() {
  index = Math.floor(Math.random() * 5);
  //   console.log(index);
  return index;
}
