//* Adding Audios
let aud1 = new Audio("audio/01 - Khamoshiyan - DownloadMing.SE.mp3");
let aud2 = new Audio(
  "audio/02 Main Dhoondne Ko Zamaane Mein - Heartless (Arijit Singh).mp3"
);
let aud3 = new Audio("audio/01 Sanam Re (Title Song) Arijit Singh 190Kbps.mp3");
let aud4 = new Audio("audio/01 Tera Fitoor - Genius.mp3");
let aud5 = new Audio("audio/01 Zaalima - Raees (Arijit Singh) 190kbps.mp3");

let arr = {
  aud1: aud1,
  aud2: aud2,
  aud3: aud3,
  aud4: aud4,
  aud5: aud5,
};

//* Media Bar JS
function toggleBtn() {
  let play = document.getElementById("playbtn");
  let pause = document.getElementById("pausebtn");
  if (play.style.display != "none") {
    pause.style.display = "block";
    play.style.display = "none";
  } else {
    play.style.display = "block";
    pause.style.display = "none";
  }
}

//* Animated Bars
function Playbars() {
  let panel = document.getElementById("ctPanel");
  let spotify = document.getElementById("spotifylogo");
  let bars = document.getElementById("effect");
  if (spotify.style.display != "none") {
    spotify.style.display = "none";
    bars.style.display = "block";
  }
  if ((panel.style.display = "none")) {
    panel.style.display = "flex";
  } else {
    panel.style.display = "none";
  }
}
function Stopbars() {
  let spotify = document.getElementById("spotifylogo");
  let bars = document.getElementById("effect");
  if ((spotify.style.display = "none")) {
    spotify.style.display = "block";
    bars.style.display = "none";
    arr.aud1.pause();
    arr.aud2.pause();
    arr.aud3.pause();
    arr.aud4.pause();
    arr.aud5.pause();
  }
}

//* Playing Songs
function song1() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  arr.aud1.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Khamoshiyaan";
  arr.aud2.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud5.pause();
}
function song2() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  arr.aud2.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Mai Dhoondne";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud5.pause();
}
function song3() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  arr.aud3.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Sanam Re";
  arr.aud1.pause();
  arr.aud2.pause();
  arr.aud4.pause();
  arr.aud5.pause();
}
function song4() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  arr.aud4.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Tera Fitoor";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud2.pause();
  arr.aud5.pause();
}
function song5() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  arr.aud5.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Zaalima";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}

//* Skip-next JS
function skipN1() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud2.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Mai Dhoondne";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud5.pause();
}
function skipN2() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud3.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Sanam Re";
  arr.aud1.pause();
  arr.aud5.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}
function skipN3() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud4.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Tera Fitoor";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud5.pause();
  arr.aud2.pause();
}
function skipN4() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud5.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Zaalima";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}
function skipN5() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud1.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Khamoshiyaan";
  arr.aud5.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}

//* Skip Back JS
function skipB1() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud5.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Zaalima";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}
function skipB2() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud1.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Khamoshiyaan";
  arr.aud5.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}
function skipB3() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud2.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Mai Dhoondne";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud4.pause();
  arr.aud5.pause();
}
function skipB4() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud3.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Sanam Re";
  arr.aud1.pause();
  arr.aud5.pause();
  arr.aud4.pause();
  arr.aud2.pause();
}
function skipB5() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "none";
  pause.style.display = "inline-block";
  aud4.play();
  let name = document.getElementById("songName");
  name.innerText = "Now playing - Tera Fitoor";
  arr.aud1.pause();
  arr.aud3.pause();
  arr.aud5.pause();
  arr.aud2.pause();
}

//* Pausing Audios Using pause button

function songPause1() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "inline-block";
  pause.style.display = "none";
  let name = document.getElementById("songName");
  name.innerText = "Song Paused";
  arr.aud1.pause();
}
function songPause2() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "inline-block";
  pause.style.display = "none";
  let name = document.getElementById("songName");
  name.innerText = "Song Paused";
  arr.aud2.pause();
}
function songPause3() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "inline-block";
  pause.style.display = "none";
  let name = document.getElementById("songName");
  name.innerText = "Song Paused";
  arr.aud3.pause();
}
function songPause4() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "inline-block";
  pause.style.display = "none";
  let name = document.getElementById("songName");
  name.innerText = "Song Paused";
  arr.aud4.pause();
}
function songPause5() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  play.style.display = "inline-block";
  pause.style.display = "none";
  let name = document.getElementById("songName");
  name.innerText = "Song Paused";
  arr.aud5.pause();
}

//*Control Panel Functions

function newPlay() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  if ((pause.style.display = "none")) {
    play.style.display = "none";
    pause.style.display = "inline-block";
    arr.aud1.play();
    let name = document.getElementById("songName");
    name.innerText = "Now playing - Khamoshiyan";
  }
}

function newPause() {
  let play = document.getElementById("PLAY");
  let pause = document.getElementById("PAUSE");
  if ((play.style.display = "none")) {
    pause.style.display = "none";
    play.style.display = "inline";
    arr.aud1.pause();
    arr.aud2.pause();
    arr.aud3.pause();
    arr.aud4.pause();
    arr.aud5.pause();
    let name = document.getElementById("songName");
    name.innerText = "Song Paused";
  }
}

//* Volume Properties
let vol = document.getElementById("volume");
let mute = document.getElementById("mute");
function volCtrl() {
  if ((vol.style.display = "none")) {
    mute.style.display = "none";
    vol.style.display = "inline-block";
    aud1.volume = 0;
    aud2.volume = 0;
    aud3.volume = 0;
    aud4.volume = 0;
    aud5.volume = 0;
  }
}

function volCtrl2() {
  if (vol.style.display != "none") {
    mute.style.display = "inline-block";
    vol.style.display = "none";
    aud1.volume = 1;
    aud2.volume = 1;
    aud3.volume = 1;
    aud4.volume = 1;
    aud5.volume = 1;
  }
}

//! Stop Btn
let play = document.getElementById("PLAY");
let pause = document.getElementById("PAUSE");
let stop = document.getElementById("stop");
let spotify = document.getElementById("spotifylogo");
let bars = document.getElementById("effect");
function stopSongs() {
  aud1.pause();
  aud1.currentTime = 0;
  aud2.pause();
  aud2.currentTime = 0;
  aud3.pause();
  aud3.currentTime = 0;
  aud4.pause();
  aud4.currentTime = 0;
  aud5.pause();
  aud5.currentTime = 0;
  if ((spotify.style.display = "none")) {
    spotify.style.display = "block";
    bars.style.display = "none";
  }
  let name = document.getElementById("songName");
  name.innerText = "Music Player Stopped!!";
  if ((pause.style.display = "inline-block")) {
    pause.style.display = "none";
    play.style.display = "inline-block";
  }
}
