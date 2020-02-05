var twoSum = function(nums, target) {
	let temp = [];
	const len = nums.length;
    if(nums == null || len < 2) return [];
	for(let i = 0;i < len;i++){
		let diff = target - nums[i];
		if(temp[diff] != undefined) return [temp[diff], i];
		temp[nums[i]] = i;
	}
};