/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	if(n === 1) return '1';
	var tempArr =  countAndSay(n-1).match(/(\d)\1*/g);
	var result = "";
	tempArr.forEach(function(item){
		result += item.length.toString() + item.substr(0, 1);
	});
	return result;
};