
var isdrag = false;
document.onmousedown = function (d) {
  isdrag = true;
}

document.onmousemove = function (d) {
  var x = d.pageX;
  var y = d.pageY;
  div_test.innerText = JSON.stringify([x, y])
  div_test.style.left = x;
  div_test.style.top = y;
  if (isdrag) {
    div_move.style.left =x;
    div_move.style.top = y;
  }
}

document.onmouseup = function (d) {
  isdrag = false;
}
