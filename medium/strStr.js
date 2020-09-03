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