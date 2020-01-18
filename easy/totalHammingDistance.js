var totalHammingDistance = function(nums) {
	let sum = 0;
	for(let i = 0;i < 30;i++){
		let count = 0;
		for(let j = 0;j < nums.length;j++){
			count += nums[j]&1;
			nums[j] >>= 1;
		}
		sum += count * (nums.length - count);
	}
	return sum;
};