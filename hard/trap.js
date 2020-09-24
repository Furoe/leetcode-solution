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

var trap1 = function(height){
	let left = 0;
	let right = height.length - 1;
	let count = 0;
	let left_max = 0;
	let right_max = 0;
	while(left < right){
		if(height[left] < height[right]){
			height[left] >= left_max?(left_max = height[left]):(count += left_max - height[left]);
			++left;
		}else{
			height[right] >= right_max?(right_max = height[right]):(count += right_max - height[right]);
			--right;
		}
	}
	return count;
};