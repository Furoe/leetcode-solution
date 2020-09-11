/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if(nums.length <= 1) return nums.length;
	var i = 0;
	var j = 1;
	for(;j < nums.length;j++){
		if(nums[j-1] !== nums[j]){
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
};