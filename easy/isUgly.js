/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
	if(num < 0) return false;
	if(num === 1) return true;
	while(true){
		if(num === 2 || num === 3 || num === 5){
			return true;
		}
		if(num%2 !== 0 && num%3 !== 0 && num%5 !== 0) return false;
		if(num > 2 && num%2 === 0){
			num = num/2;
		}
		if(num > 3 && num%3 === 0){
			num = num/3;
		}
		if(num > 5 && num%5 === 0){
			num /=5;
		}
	}
};