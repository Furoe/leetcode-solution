/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	let result = [0];
	let n = 1;
	while(n <= num){
		result.push(result[n>>1] + n%2);
		n++;
	}
	return result;
};