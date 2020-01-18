var reverse = function(x) {
    const edeg = 2**31;
    const Max_Value = edeg - 1;
    const Min_Value = -edeg;

    let a = x.toString().split('');
    let result = (x > 0?(a.reverse().join('')):-1*(a.slice(1).reverse().join('')));
    return (result < Min_Value || result > Max_Value)?0:result;
};