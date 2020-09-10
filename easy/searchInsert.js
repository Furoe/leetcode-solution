/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	var left = 0;
	var right = nums.length-1;
	var mid  = Math.floor(nums.length/2);
	while(left < right){
		if (nums[mid] < target) {
			if(mid === nums.length-1) return mid + 1;
			left = mid + 1;
		}else if(nums[mid] === target){
			return mid;
		}else if(nums[mid] > target){
			if(right === 0) return 0;
			right = mid - 1;
		}
		mid = Math.round((left + right)/2);
	}
	if(nums[left] < target){
		return left+1;
	}else if(nums[left] >= target){
		return left;
	}
};