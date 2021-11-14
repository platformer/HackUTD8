chrome.runtime.onMessage.addListener(async function(msg, sender, sendResponse){
    var curTab = sender.tab.id
    await chrome.tabs.duplicate(curTab);
    await chrome.tabs.goBack();
    var ind = curTab.index + 1;
    await chrome.tabs.move(curTab, ind);
}
);