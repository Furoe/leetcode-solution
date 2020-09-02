/**
 * 返回最长无重复子串的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s){
	var len = 0;
	var arr = s.split('');
	var sub_arr = [];
	for(var i = 0;i < arr.length;i++){
		sub_arr.push(arr[i]);
		for(var j = i + 1;j < arr.length;j++){
			if(sub_arr.indexOf(arr[j]) == -1){
				sub_arr.push(arr[j]);
			}else{
				len = len < sub_arr.length?sub_arr.length:len;
				sub_arr.splice(0, sub_arr.length);
				break;
			}
		}
		if(j == arr.length){
			len = len < sub_arr.length?sub_arr.length:len;
			break;
		}
	}
	return len;
}

var lengthOfLongestSubstring1 = function(s){
	let arr = [], max = 0
    for(let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if(index !== -1) {
            arr.splice(0, index+1);
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max) 
    }
    return max;
}