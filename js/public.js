function setRem() {
    var win = document.documentElement.clientWidth || document.body.clientWidth;
    var uiw = 750;
    document.documentElement.style.fontSize = (win / uiw) * 1 + 'px'
}
setRem();
window.onresize = setRem;