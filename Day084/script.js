console.log("Let's write javascript");

async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/Day084/songs/");
  let response = await a.text();
  //   console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}

async function main() {
  let songs = await getSongs();
  console.log(songs);

  //   Play the first song
  var audio = new Audio(songs[0]);
  audio.play();
}

main();
