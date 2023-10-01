const voiceSearch = document.querySelector(".voice-search");
const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
const result = document.querySelector(".result");

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "vi-VI";
recognition.continuous = false;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  recognition.start();
  action.innerHTML = "Hãy nói điều bạn đang muốn";
});

recognition.onspeechend = () => {
  recognition.stop();
};

recognition.onerror = () => {
  console.error(err);
};

recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  const text = transcript.toLowerCase().replaceAll(".", "");
  action.innerHTML = "Đã nói xong. Hy vọng kết quả như ý bạn";
  // if (text) {
  //   result.innerText = `Đang thực hiện: ${text}`;
  // } else {
  //   result.innerText = "Không thực hiện được";
  // }
  console.log(text);
  if (text === "google") {
    window.open("https://google.com");
  } else if (text === "facebook") {
    window.open("https://facebook.com");
  } else if (text === "youtube") {
    window.open("https://youtube.com");
  } else if (text === "google drive") {
    window.open("https://drive.google.com");
  } else if (text === "google maps" || text === "bản đồ") {
    window.open("https://maps.google.com");
  }
  if (
    text.includes("chỉ đường") ||
    text.includes("tới") ||
    text.includes("đường tới") ||
    text.includes("chỉ đường tới")
  ) {
    const mapsUrl = text
      .replace("chỉ đường", "")
      .replace("chỉ đường tới", "")
      .replace("đường tới", "")
      .replace("tới", "")
      .trim();
    window.open(`https://www.google.com/maps/search/${mapsUrl}`);
  } else if (
    transcript.includes("bài hát") ||
    transcript.includes("mở bài hát") ||
    transcript.includes("nghe bài")
  ) {
    const songsUrl = text
      .replace("mở bài hát", "")
      .replace("bài hát", "")
      .replace("nghe bài", "")
      .trim();

    const url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${songsUrl}`;
    window.open(url.trim());
  }
};
