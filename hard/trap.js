/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let minArr = [];
	let maxArr = [];
	let len = height.length;
	let count = 0;
	minArr[0] = height[0];
	maxArr[len-1] = height[len-1];
	for(let i = 1;i < len;i++){
		minArr[i] = Math.max(height[i], minArr[i-1]);
		maxArr[len-i-1] = Math.max(maxArr[len-i], height[len-i-1]);
	}
	for(let j = 1;j < len - 1;j++){
		minHeight = Math.min(minArr[j - 1], maxArr[j + 1]);
		if(minHeight > height[j]) count += minHeight - height[j];
	}
	return count;
};