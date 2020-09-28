/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
	if(n < 4) return n - 1;
	let x = Math.floor(n/3);
	let y = n%3;
	if(y === 0){
		return Math.pow(3, x);
	}else if(y === 1){
		return Math.pow(3, x - 1)*4;
	}else{
		return Math.pow(3, x)*2;
	}
};