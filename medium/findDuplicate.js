/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	let slow = fast = 0;
	do{
		slow = nums[slow];
		fast = nums[nums[fast]];
	}while(fast != slow)
	slow = 0;
	while(slow != fast){
		slow = nums[slow];
		fast = nums[fast];
	}
	return slow;
};