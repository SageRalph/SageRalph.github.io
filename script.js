/**
 * Sets a single tab to be visible.
 */
function tab(name) {
    var shown = document.getElementsByClassName('visibleTab');
    for (var i = 0; i < shown.length; i++) {
        shown[i].className = 'hiddenTab';
    }
    document.getElementById('tab' + name).className = 'visibleTab';
    selectOne('tabs', 'nav' + name);
}

function selectOne(tableID, itemID) {
    var current = document.querySelectorAll("#" + tableID + " .selected");
    if (current.length) current[0].className = '';
    if (itemID) {
        var target = document.getElementById(itemID);
        if (target) target.className = 'selected';
    }
}