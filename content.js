document.addEventListener('click', handleClick);

async function handleClick(e)
{
    if (e.ctrlKey)
    {
        let curTab = await chrome.tabs.getCurrent();
        chrome.runtime.sendMessage({"tabid": curTab});
    }
}