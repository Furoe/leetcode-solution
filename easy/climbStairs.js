/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	if(n === 1) return 1;
	if(n === 2) return 2;
	let pre = 1;
	let cur = 2;
	for(let i = 3;i <= n;i++){
		let res = pre + cur;
		pre = cur;
		cur = res;
	}
	return cur;
};