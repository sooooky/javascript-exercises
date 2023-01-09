const removeFromArray = function(array, ...args) {
    let returnArray = array;
    args.forEach((arg) => {
        for(const item of array){
            if(item == arg){
                let index = array.indexOf(item);
                if(index > -1){
                    returnArray.splice(index,1)
                }
            }
        }
    }
    )
    
    return returnArray
};

// Do not edit below this line
module.exports = removeFromArray;
