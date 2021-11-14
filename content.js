document.addEventListener('click', handleClick);

async function handleClick(e)
{
    if (e.ctrlKey)
    {
        console.log("clicked!");
        chrome.runtime.sendMessage({});
    }
}