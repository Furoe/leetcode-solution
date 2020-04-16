/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	if (num1 == '0' || num2 == '0') {
		return '0';
	}
	const left = '0'.charAt(0);
	const num1Arr = ((num1.length > num2.length)?num2:num1).split('').map(item => item.charAt(0) - left);
	const num2Arr = ((num1.length > num2.length)?num1:num2).split('').map(item => item.charAt(0) - left);
	let res = [];
	for(var i = num1Arr.length - 1;i > -1;i--){
		for(var j = num2Arr.length - 1;j > -1;j--){
			const resArr = (num1Arr[i]*num2Arr[j]).toString().split('');
			resArr.reverse();
			var index = num1Arr.length - 1 - i + num2Arr.length - 1 - j;
			let next = 0;
			let k = 0;
			while(k < resArr.length || next !== 0){
				let sum = (res[index + k] || 0) + next;
				if(k < resArr.length){
					sum += +resArr[k];
				}
				res[index + k] = sum % 10;
				next = sum / 10 >= 1 ? 1 : 0;
				k++;
			}
		}
	}
	while(res.length > 1 && res[res.length - 1] === 0){
		res.pop();
	}
	return res.reverse().join('');
};