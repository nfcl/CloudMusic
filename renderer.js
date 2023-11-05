const lineWidth = 2; // 分隔条宽度
const minLeft = 200; // 分隔条左边部分最小宽度
const minRight = 820; // 分隔条右边部分最小宽度
oRoot = document.getElementById('content');
oLeft = document.getElementById('content-left');
oRight = document.getElementById('content-right');
window.onload = function () {
    document.getElementById('divide-line').onmousedown = handleLineMouseDown;
};
//分割条的拖动操作
function handleLineMouseDown(e) {
    let disX = e.clientX;
    let leftW = parseInt(window.getComputedStyle(oLeft, null).width)
    let rightW = parseInt(window.getComputedStyle(oRight, null).width)
    let rootW = parseInt(window.getComputedStyle(oRoot, null).width)
    document.onmousemove = function (e) {
        let moveX = e.clientX - disX;
        let newLeftW = leftW + moveX;
        let newRightW = rightW - moveX;
        if(newLeftW < minLeft){
            newLeftW = minLeft;
        }
        else if(newRightW < minRight){
            newLeftW = rootW - 2 - minRight;
        }
        oRoot.style.gridTemplateColumns = newLeftW + 'px 2px 1fr';
        return false;
    };
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}