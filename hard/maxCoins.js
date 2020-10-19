/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
	let n = nums.length;
	let points = [1, ...nums, 1];
	let dp = Array.from(Array(n+2), () => Array(n+2).fill(0));
	for(let i = n;i >= 0;i--){
		for(let j = i + 1;j < n+2;j++){
			for(let k = i+1;k < j;k++){
				dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i]*points[k]*points[j]);
			}
		}
	}
	return dp[0][n+1];
};