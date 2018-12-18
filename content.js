/**
 * Copyright (C) 2018 Fabian Große
 * This software is licensed under the GNU General Public License 3 (GPLv3) or later.
 * For details please see the LICENSE file that should be included with this software.
 */

function onContextShown() {
    let sel = window.getSelection();
    browser.runtime.sendMessage({isValidURL: isValidURL(sel.toString()), selection: sel.toString()});
}

function isValidURL(str) {
    const pattern = new RegExp("^https?://([a-z]([a-z0-9])*\.)?[a-z]([a-z0-9])*\.[a-z]{2,}(/\S*)*","i");
    return pattern.test(str);
}

document.body.oncontextmenu = onContextShown;
