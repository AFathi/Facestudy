/*
Ahmed Fathi Copyrights 2014 All rights reserved
http://afapps.net/
*/
var date = new Date();

chrome.extension.sendRequest({storage: 'day'}, function(response) {
  


chrome.extension.sendRequest({storage: 'month'}, function(responsee) {


chrome.extension.sendRequest({storage: 'year'}, function(responser) {

var day = response.storage;
var month = responsee.storage;
var year = responser.storage;

var fday = date.getDate();
var fmonth = date.getMonth();
var fyear = date.getFullYear();
if (day == 1 && month == 1 || month == 3 || month == 5 || month == 8 || month == 10){
day = 32;
}
if (day == 1 && month == 2){
day = 29;
}
if (day == 1 && month == 9 || month == 4 || month == 6 || month == 11){
day = 31;
}
day = day-1;
if (fday == day && fmonth == month && fyear == year){
window.stop();
window.location.href = "http://afapps.net/sorry";
}else{
//do nothing
}

});
});
});