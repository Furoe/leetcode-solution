/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let resLen = 1;
	let res = "";
	for(let i = 0;i < s.length-1;i++){
		for(let j = i + 1;j < s.length;j++){
			if((j - i + 1 < resLen) || (s.charAt(j) != s.charAt(i)))  continue;
			var k = i,v = j;
			var flag = 1;
			while(k < v){
				if(s.charAt(k) === s.charAt(v)){
					k++;
					v--;
				}else{
					flag = 0;
					break;
				}
			}
			console.log(i, j);
			if(flag === 1 && j-i+1 > resLen) {
				res = s.substr(i, j-i+1);
				resLen = Math.max(resLen, j - i + 1);
			}
		}
	}
	return res;
};