chrome.runtime.onMessage.addListener(async function (msg, sender, sendResponse) {
    var curTab = sender.tab.id
    chrome.tabs.duplicate(curTab);
    chrome.tabs.goBack(curTab);
}
);