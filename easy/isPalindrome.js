var isPalindrome = function(x) {
	if(x < 0) return false;
	let x1 = x;
	let sum = 0;
	while(x1 > 0){
		sum = sum*10 + x1%10;
		x1 = Math.floor(x1/10);
	}
	return sum === x;   
};