let moment = require("moment")
var unique = require("uniq");

var myDate = new Date()
var myCoolDate = moment(myDate).format('LL')

var myList = [1,2,3,3,6,5,7]
var uniqueList = unique(myList)
console.log(uniqueList);

console.log(myCoolDate);