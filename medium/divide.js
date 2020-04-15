/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
	var INT_MAX = 0x7FFFFFFF;
	var INT_MIN = 1<<31;
	var symbol = (dividend^divisor)>>31;
	var _dividend = dividend>0?-dividend:dividend;
	var _divisor = divisor>0?-divisor:divisor;
	var times = divided_negtive(_dividend, _divisor);
	var output = 0;
	for (var i = 0; i < times.length; i++) {
		if(times[i] == 31){
			if(symbol == 0){
				return INT_MAX;
			}
			return INT_MIN;
		}
		output += (1<<times[i]);
	}
	console.log(times);

	return symbol?-output:output;
};

function divided_negtive(dividend, divisor){
	if(dividend > divisor) return [];
	var timesMax = 32;
	var timesMin = 0;
	while(timesMax != timesMin + 1){
		var mid = (timesMin + timesMax)>>1;
		if(divisor < (-1 << (31 - mid))){
			timesMax = mid;
			continue;
		}

		var testVal = divisor << mid;
		if(testVal < dividend){
			timesMax = mid;
		}else{
			timesMin = mid;
		}
	}
	return [timesMin].concat(divided_negtive(dividend - (divisor<<timesMin), divisor));
}