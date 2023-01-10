const sumAll = function(int1,int2) {
    let sum = 0;
    let largeInt = int2;
    let smallInt = int1;
    if(int1<0 || int2<0 || typeof(int1) !== "number" || typeof(int2) !== "number"){
        return "ERROR"
    }
    if(int1 > int2){
        largeInt = int1;
        smallInt = int2;
    }
    for(i=smallInt; i<=largeInt; i++){
        sum+=i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
