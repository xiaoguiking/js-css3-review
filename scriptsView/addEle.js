// 动态添加元素
function addText() {
  //创建一个input元素
  var txt = document.createElement("input");
  // 设置元素为文本框
  txt.type = "text";
  txt.value = "文本框";
  // 将文本框添加到dom中
  var div = document.getElementById("id1");
  div.appendChild(txt);
}
