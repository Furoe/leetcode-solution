/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if(needle == "") return 0;
	for(var i = 0; i <= (haystack.length-needle.length);i++){
		for(var j = 0;j < needle.length;j++){
			if(needle[j] == haystack[i+j]){
				if(j == needle.length-1){
					return i;
				}
				continue;
			}else{
				break;
			}
		}
	}
	return -1;
};
 
//KMP算法实现
var strStr_KMP = function(haystack, needle) {
	if(needle == "") return 0;
	var i = 1;
	var j = 0;
	var next = [0];
	while(i < needle.length){
		if(needle[i] === needle[j]){
			next[i] = j + 1;
			i++;
			j++;
		}else{
			if(j === 0){
				next[i++] = 0;
			}else if(j > 0){
				j = next[j-1];
			}
		}
	}
	i = 0;
	j = 0;
	while(i <= haystack.length && j < needle.length){
		if(haystack[i] == needle[j]){
			i++;
			j++;
		}else{
			if(j === 0){
				i++;
			}else{
				j = next[j-1];
			}
		}
	}
	if(j === needle.length){
		return i - j;
	}else{
		return -1;
	}
};


function genBC(pattern){
	const bc = new Array(256).fill(-1);
	for(let i = 0;i < pattern.length;i++){
		const index = pattern[i].charCodeAt();
		bc[index] = i;
	}
	return bc;
}

function genGS(pattern){
	const len = pattern.length;
	const suffix = new Array(len).fill(-1);
	const prefix = new Array(len).fill(false);
	for(let i = 0;i < len - 1;i++){
		let j = i;
		let k = 0;
		while(j >= 0 && pattern[j]  == pattern[len-1-k]){
			j--;
			k++;
			suffix[k] = j + 1;
		}
		if(j === -1){
			prefix[k] = true;
		}
	}
	return {
		suffix,
		prefix
	};
}

function findBadChar(substr, pattern, bc){
	let j = -1;
	let k = -1;
	let badChar = '';
	for(let i = pattern.length - 1;i >= 0;i--){
		if(pattern[i] !== substr[i]){
			j = i;
			badChar = substr[i];
			break;
		}
	}
	if(j > 0){
		k = bc[badChar.charCodeAt()];
	}
	return {
		patternBadCharIndex: k,
		mainBadCharIndex: j
	}
}

function moveByGS(bdsi, patternLen, suffix, prefix){
	let k = patternLen - bdsi - 1;
	if(suffix[k] !== -1){
		return bdsi - suffix[k] + 1;
	}
	for(let r = bdsi + 2;r <= patternLen;r++){
		if(prefix[patternLen - r]){
			return r;
		}
	}
	return patternLen;
}

//Bloye-Moore方法
var strStr_BM = function(haystack, needle) {
	if(needle == "") return 0;
	const mainLen = haystack.length;
	const patternLen = needle.length;
	const bc = genBC(needle);
	const {suffix, prefix} = genGS(needle);
	let step = 1;
	for(let i = 0;i <= mainLen - patternLen;i = i + step){
		let substr = haystack.substr(i, patternLen);
		const {patternBadCharIndex, mainBadCharIndex} = findBadChar(substr, needle, bc);
		if(mainBadCharIndex === -1){
			return i;
		}
		let stepForBC = mainBadCharIndex - patternBadCharIndex;
		let stepForGS = -1;
		if(mainBadCharIndex <= patternBadCharIndex - 1){
			stepForGS = moveByGS(patternBadCharIndex, patternLen, suffix, prefix);
		}
		step = Math.max(stepForBC, stepForGS);
	}
	
	return -1;
};