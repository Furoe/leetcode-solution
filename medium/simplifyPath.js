/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var str = path.replace(/\/{2,}/g, '/');
    if(str.charAt(str.length-1) === '/'){
    	str = str.slice(1, str.length-1);
    }else{
    	str = str.slice(1);
    }
    var arr = str.split('/');
    var res = [];
    for(let i = 0;i < arr.length;i++){
    	if(arr[i] == '..'){
    		if(res.length !== 0){
    			res.splice(res.length-1);
    		}
    	}else if(arr[i] != '.'){
    		res.push(arr[i]);
    	}
    }
    return '/' + res.join('/');
};