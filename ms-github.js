chrome.storage.sync.get(null, data => {
  const now = new Date();
  const { audio, freq, lastPlayed } = data;

  if (
    freq === "always" ||
    (freq === "daily" && !lastPlayed) ||
    (freq === "daily" && (now - new Date(lastPlayed)) / 3.6e6 > 24) ||
    (freq === "hourly" && !lastPlayed) ||
    (freq === "hourly" && (now - new Date(lastPlayed)) / 3.6e6 > 1)
  ) {
    new Audio(chrome.runtime.getURL(`audio/${audio}.mp3`)).play();
    chrome.storage.sync.set({ lastPlayed: now.getTime() });
  }
});
