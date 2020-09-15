/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var str1 = str.replace(/^\s*/, '');
	var sig = str1.charAt(0);
	const INT_MAX = Math.pow(2, 31) - 1;
	const INT_MIN = Math.pow(2, 31);
	if (sig !== '+' && sig !== '-' && (sig.charCodeAt() < 48 || sig.charCodeAt() > 57)) return 0;
	var res = 0;
	for(var i = 1;i < str1.length;i++){
		if(str1.charCodeAt(i) < 48 || str1.charCodeAt(i) > 57) break;
		res = res*10 + (str1.charAt(i) - '0');
		if(res > INT_MAX && sig == '+') return INT_MAX;
		if(res > INT_MIN && sig == '-') return -INT_MIN;
	}
	if(sig == '-'){
		return res > INT_MIN?-INT_MIN:-res;
	}else if(sig == '+'){
		return res > INT_MAX?+INT_MAX:+res;
	}else{
		res = ((sig - '0')*Math.pow(10, (i-1)) + res);
		return res > INT_MAX?INT_MAX:res;
	}
}