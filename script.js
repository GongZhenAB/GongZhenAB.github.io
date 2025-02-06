//音乐
const audio = document.querySelector("audio");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", function () {
  if (!playBtn.classList.contains("play")) {
    musicPlay();
  } else {
    musicPause();
  }

  playBtn.classList.add("animated");
  setTimeout(() => {
    playBtn.classList.remove("animated");
  }, 500);
});

function musicPlay() {
  audio.play();
  playBtn.classList.add("play");

  playBtn.classList.remove("icon-play");
  playBtn.classList.add("icon-pause");
}

function musicPause() {
  audio.pause();
  playBtn.classList.remove("play");

  playBtn.classList.remove("icon-pause");
  playBtn.classList.add("icon-play");
}

// 页面加载时恢复音频播放状态和当前时间
document.addEventListener("DOMContentLoaded", function () {
  // 恢复音频播放状态和当前时间
  const savedTime = localStorage.getItem("audioCurrentTime");
  const isPlaying = localStorage.getItem("audioIsPlaying") === "true";

  if (savedTime !== null) {
    audio.currentTime = parseFloat(savedTime);
  }

  if (isPlaying) {
    musicPlay();
  }

  // 监听音频播放状态和当前时间
  audio.addEventListener("timeupdate", function () {
    localStorage.setItem("audioCurrentTime", audio.currentTime);
  });

  audio.addEventListener("play", function () {
    localStorage.setItem("audioIsPlaying", "true");
  });

  audio.addEventListener("pause", function () {
    localStorage.setItem("audioIsPlaying", "false");
  });
});
