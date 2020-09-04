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
	var i = 1;
	var j = 0;
	var next = [0];
	while(i < needle.length){
		if(needle[i] === needle[j]){
			next[i] = j + 1;
			i++;
			j++;
		}else{
			if(j === 0){
				next[i++] = 0;
			}else if(j > 0){
				j = next[j-1];
			}
		}
	}
	i = 0;
	j = 0;
	while(i <= haystack.length && j < needle.length){
		if(haystack[i] == needle[j]){
			i++;
			j++;
		}else{
			if(j === 0){
				i++;
			}else{
				j = next[j-1];
			}
		}
	}
	if(j === needle.length){
		return i - j;
	}else{
		return -1;
	}
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