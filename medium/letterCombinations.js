/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if(digits == "") return [];
	var phone_dic = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	var arr = digits.split('');
	var queue = [''];
	for(digit of digits){
		var len = queue.length;
		for(var i= 0; i < len;i++){
			var temp = queue.splice(0, 1);
			for(v of phone_dic[parseInt(digit)-2]){
				queue.push(temp + v)
			}
		}
	}
	return queue;
};