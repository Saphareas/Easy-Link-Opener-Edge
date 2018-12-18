function onCreated() {
    return
}

function handleOnClick() {
    //alert("Click!")
    console.log("Click!")
}

browser.menus.create({
    id: "open-tab",
    title: browser.i18n.getMessage("openInNewTab"),
    contexts: ["selection"],
    enabled: false
}, onCreated);

browser.menus.create({
    id: "open-window",
    title: browser.i18n.getMessage("openInNewWindow"),
    contexts: ["selection"],
    enabled: false
}, onCreated);

browser.menus.create({
    id: "open-private",
    title: browser.i18n.getMessage("openInNewPrivateWindow"),
    contexts: ["selection"],
    enabled: false
}, onCreated);

browser.menus.onClicked.addListener(function(info, tab) {
    let sel = info.selectionText;
    switch (info.menuItemId) {
      case "open-tab":
        browser.tabs.create({ active: true, url: sel }); break;
      case "open-window":
        browser.windows.create({ url: sel }); break;
      case "open-private":
        browser.windows.create({ url: sel, incognito: true }); break;
    }
});

browser.runtime.onMessage.addListener(function(msg) {
    console.debug(msg);
    if (msg.isValidURL) {
        browser.menus.update("open-tab", {enabled: true});
        browser.menus.update("open-window", {enabled: true});
        browser.menus.update("open-private", {enabled: true});
    } else {
        browser.menus.update("open-tab", {enabled: false});
        browser.menus.update("open-window", {enabled: false});
        browser.menus.update("open-private", {enabled: false});
    }
    browser.menus.refresh();
});
