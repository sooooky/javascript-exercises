const fibonacci = function(num) {
    num = Number(num)
    if(num<0){
        return "OOPS"
    }
    let a = 0;
    let b = 1;
    let c = 1;
    let result = 0;
    for(i=1; i<num; i++){
        c = a + b
        a = b
        b = c
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
