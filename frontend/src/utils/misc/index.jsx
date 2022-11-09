export function interractWithCollapsibleArea(setOpened, opened, DOMid) {
    var area = document.getElementById(DOMid);
    setOpened(!opened);
    if (opened === true) {
        area.style.height = 0;
    } else {
        var wrapper = area.querySelector('.collapsible-content');
        area.style.height = Number(getComputedStyle(wrapper.firstChild).marginTop.replace('px', '')) + Number(wrapper.clientHeight) + 'px';
    }
}
