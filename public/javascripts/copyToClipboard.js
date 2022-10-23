const btnCopy = document.querySelector('.btnCopy');
btnCopy.addEventListener('click', function() {
// 建立 Range 物件
const range = document.createRange();
// 將指定元素內容加到 Range 中
const text = document.querySelector('#result');
range.selectNode(text);
// 取得 Selection 物件
const selection = window.getSelection();
// 先清空當前選取範圍
selection.removeAllRanges();
// 加入 Range 
selection.addRange(range);
document.execCommand('copy');
alert('Copied')
selection.removeAllRanges();
});