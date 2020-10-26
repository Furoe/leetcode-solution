/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    let curArea;
    while(i < j){
        curArea = (j - i)*(Math.min(height[i], height[j]));
        height[j] < height[i]?j--:i++;
        max = Math.max(max, curArea);
    }
    return max;
};