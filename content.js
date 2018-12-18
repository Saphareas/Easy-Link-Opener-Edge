function onContextShown() {
    let sel = window.getSelection();
    browser.runtime.sendMessage({isValidURL: isValidURL(sel.toString()), selection: sel.toString()});
}

function isValidURL(str) {
    const pattern = new RegExp("^https?://([a-z]([a-z0-9])*\.)?[a-z]([a-z0-9])*\.[a-z]{2,}(/\S*)*","i");
    return pattern.test(str);
}

document.body.oncontextmenu = onContextShown;
