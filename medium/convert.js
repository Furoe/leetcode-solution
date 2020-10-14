/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if(numRows === 1) return s;
	let modLen = 2*numRows - 2;
	let x = Math.floor(s.length/modLen);
	let res = "";
	if(s.length%modLen !== 0) x++;
	for(let i = 0;i < numRows;i++){
		for(let j = 0;j < x;j++){
			console.log(i, j, s.charAt(i + j*modLen));
			if((i + j*modLen) < s.length){
				res += s.charAt(i + j*modLen);
			}
			if(i > 0 && i < numRows-1 && ((j+1)*modLen-i) < s.length){
				res += s.charAt((j+1)*modLen-i);
			}
		}
	}
	return res;
};

var convert1 = function(s, numRows){
	let modLen = numRows*2 -2;
	for(let i = 0;i < s.length;i++){

	}

	return numRows === 1 ? s : s.split('').reduce((p, v, i, a, l = numRows * 2 - 2) => (p[Math.min(i % l, l - i % l)] += s[i]) && p, new Array(numRows).fill('')).join('');
};