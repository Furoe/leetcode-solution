var totalHammingDistance = function(nums) {
	let sum = 0;
	for(let i = 0;i < 32;i++){
		for(let j = 0;j < nums.length-1;j++){
			for(let k = j + 1;k < nums.length;k++){
				sum += (((nums[j]>>i)&1) !== ((nums[k]>>i)&1))?1:0;
			}
		}
	}
	return sum;
};