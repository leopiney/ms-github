chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ audio: "win95", freq: "daily" });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () =>
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "github.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  );
});
