/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
	let dp = [1];
	let p = new Array(primes.length).fill(0);
	for(let i = 1;i < n;i++){
		let min = Infinity;
		for(let j = 0;j < p.length;j++){
			min = Math.min(min, primes[j]*dp[p[j]]);
		}
		dp[i] = min;
		for(let k = 0;k < p.length;k++){
			if(dp[p[k]]*primes[k] === min) p[k]++;
		}
	}
	return dp[n-1];
};