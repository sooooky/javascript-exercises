const repeatString = function(string,num) {
    let returnString = string;
    for(let i=1; i<num; i++){
        // returnString = returnString.concat(string); 
        returnString += string
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
