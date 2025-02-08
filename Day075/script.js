console.log("Anas is a Pakistani")
console.log("Zuberi is a Pakistani")

// setTimeout(() => {
//     console.log("Inside Timeout") 
// }, 2000);

setTimeout(() => {
    console.log("Inside Timeout") 
}, 0);

setTimeout(() => {
    console.log("Inside Timeout-2") 
}, 0);

console.log("The End")

const fn = (params) => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
  console.log(arg)
  fn()
}

 const loadScript = (src,callback) => {
   let sc = document.createElement("script");
   sc.src = src;
   sc.onload = callback("Anas", fn)
   document.head.append(sc)
 }
 
 loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)