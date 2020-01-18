var hammingDistance = function(x, y) {
	//slow
	/*let count = 0;
	for(let i = 0;i < 32;i++){
		if((x&1) !== (y&1)) count++;
		x >>= 1;
		y >>= 1;
	}
	return count;*/

	//fast
	//return (x^y).toString(2).replace(/0/g,'').length;
	//faster
	return (x ^ y).toString(2).split('').filter(s => s === '1').length;
};