chrome.runtime.onMessage.addListener(dupTab);

async function dupTab(e)
{
    console.log("clicked!")
    // let curTab = await chrome.tabs.getCurrent();
    // await chrome.tabs.duplicate(curTab["id"]);
    // await chrome.tabs.goBack();
    // var ind = curTab.index + 1;
    // await chrome.tabs.move(curTab, ind);
}