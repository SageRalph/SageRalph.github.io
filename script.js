/**
 * Sets a single tab to be visible.
 */
function tab(name) {
    const shown = document.getElementsByClassName('visibleTab');
    for (let i = 0; i < shown.length; i++) {
        shown[i].className = 'hiddenTab';
    }
    document.getElementById('tab' + name).className = 'visibleTab';
    selectOne('tabs', 'nav' + name);
}

function selectOne(tableID, itemID) {
    const current = document.querySelectorAll("#" + tableID + " .selected");
    if (current.length) current[0].className = '';
    if (itemID) {
        const target = document.getElementById(itemID);
        if (target) target.className = 'selected';
    }
}