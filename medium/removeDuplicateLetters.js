/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
	let stack = [];
	for(let i = 0;i < s.length;i++){
		var char = s[i];
		if(stack.indexOf(char) > -1) continue;
		while(stack.length > 0 && stack[stack.length-1] > char && s.indexOf(stack[stack.length-1], i) > -1){
			stack.pop();
		}
		stack.push(char);
	}
	return stack.join('');
};