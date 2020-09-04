/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if(needle == "") return 0;
	for(var i = 0; i <= (haystack.length-needle.length);i++){
		for(var j = 0;j < needle.length;j++){
			if(needle[j] == haystack[i+j]){
				if(j == needle.length-1){
					return i;
				}
				continue;
			}else{
				break;
			}
		}
	}
	return -1;
};
 
//KMP算法实现
var strStr_KMP = function(haystack, needle) {
	if(needle == "") return 0;
	var next = [];
	for(var i = 0;i < needle.length;i++){
		next[i] = 0;
		var temp_str = needle.substr(0, i+1);
		for(var j = 1;j < temp_str.length;j++){
			var l_str = temp_str.substr(0, j);
			var r_str = temp_str.substr(temp_str.length-j, j);
			if(l_str === r_str){
				next[i] = Math.max(l_str.length, next[i]);
			}
		}
	}
	console.log(next);
	for(var i = 0; i <= (haystack.length-needle.length);i++){
		for(var j = 0;j < needle.length;j++){
			if(needle[j] == haystack[i+j]){
				if(j == needle.length-1){
					return i;
				}
				continue;
			}else{
				if(j >= 1){
					i += j - next[j-1];
				console.log(i, j, next[j], j - next[j-1]);
				}
				break;
			}
		}
	}
	return -1;
};

//Bloye-Moore方法
var strStr_BM = function(haystack, needle) {
	if(needle == "") return 0;
	for(var i = 0; i <= (haystack.length-needle.length);i++){
		for(var j = 0;j < needle.length;j++){
			if(needle[j] == haystack[i+j]){
				if(j == needle.length-1){
					return i;
				}
				continue;
			}else{
				break;
			}
		}
	}
	return -1;
};