/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	if(n === 0) return 1;
	let i1 = i2 = i3 = 0;
	let nums = [1];
	var ugly = 0;
	for(let i = 1;i < n;i++){
		ugly = Math.min(nums[i1]*2, nums[i2]*3, nums[i3]*5);
		if(ugly === nums[i1]*2) i1++;
		if(ugly === nums[i2]*3) i2++;
		if(ugly === nums[i3]*5) i3++;
		nums.push(ugly);
	}
	return nums[n-1];
};