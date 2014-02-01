document.getElementById('save').onclick = function() {
  var syr = document.getElementById("years");
  var yrs = syr.children[syr.selectedIndex].value;
  
  var smt = document.getElementById("months");
  var mts = smt.children[smt.selectedIndex].value;
  
  var sdy = document.getElementById("days");
  var dys = sdy.children[sdy.selectedIndex].value;
  
chrome.extension.sendRequest({storage: 'day', value: dys});
chrome.extension.sendRequest({storage: 'month', value: mts});
chrome.extension.sendRequest({storage: 'year', value: yrs});
alert('Started!');
};