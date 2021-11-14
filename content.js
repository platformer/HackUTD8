document.addEventListener('click', handleClick);

async function handleClick(e)
{
    if (e.ctrlKey)
    {
        curTab = await chrome.tabs.getCurrentTab();
        chrome.tabs.duplicate(curTab);
        chrome.tabs.goBack();
        curTab = await chrome.tabs.getCurrentTab();
        ind = curTab.index - 1.
        chrome.tabs.move(curTab, ind)
    }
}