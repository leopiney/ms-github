const selectAudio = document.getElementById("selectAudio");
const selectFreq = document.getElementById("selectFreq");

chrome.storage.sync.get(["audio", "freq"], data => {
  for (const option of selectAudio.options) {
    if (option.value === data.audio) option.setAttribute("selected", true);
    else option.removeAttribute("selected");
  }

  for (const option of selectFreq.options) {
    if (option.value === data.freq) option.setAttribute("selected", true);
    else option.removeAttribute("selected");
  }
});

selectAudio.onchange = () => {
  const audio = selectAudio.value;
  chrome.storage.sync.set({ audio });
};

selectFreq.onchange = () => {
  const freq = selectFreq.value;
  chrome.storage.sync.set({ freq });
};
