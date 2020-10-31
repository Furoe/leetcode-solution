/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let c = matrix[0].length;
    let r = matrix.length;
    let isZero = false;
    for(let i = 0;i < r;i++){
        if(matrix[i][0] === 0){
            isZero = true;
        }
        for(let j = 1;j < c;j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1;i < r;i++){
        for(let j = 1;j < c;j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    if(matrix[0][0] === 0){
        for(let i = 0;i < c;i++){
            matrix[0][i] = 0;
        }
    }
    if(isZero === true){
        for(let i = 0;i < r;i++){
            matrix[i][0] = 0;
        }
    }
    return matrix;
};