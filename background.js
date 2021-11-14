chrome.runtime.onMessage.addListener(dupTab);

async function dupTab(e)
{
    console.log(e);
    var curTab = e["tabid"];
    chrome.tabs.duplicate(curTab);
    chrome.tabs.goBack();
    var ind = curTab.index + 1;
    chrome.tabs.move(curTab, ind);
}