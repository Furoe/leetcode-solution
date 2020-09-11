//分析状态递归求值
var countCoins = function(nums, target){
	if(target < 0) return Infinity;
	if (target === 0) {
		return 0;
	}
	var min = Infinity;
	for(let i = 0;i < nums.length;i++){
		min = Math.min(countCoins(nums, target - nums[i]) + 1, min);
	}
	return min;
};


//用空间换时间，减少递归计算的时间
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	if(amount === 0) return 0;
	var dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;
	for(let i = 1;i < dp.length;i++){
		for(let j = 0;j < coins.length;j++){
			if(i - coins[j] >= 0){
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
			}
		}
	}
	return dp[amount] === Infinity?-1:dp[amount];
};