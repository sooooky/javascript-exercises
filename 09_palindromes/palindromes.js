const palindromes = function (string) {
    string = string.toLowerCase()
    string = string.replace(/[^a-z]/g, "")
    let comparisionString = string.split("")
    let reversedString = "";
    for(char of comparisionString.reverse()){
        reversedString += char;
    }
    return reversedString == string;

};

// Do not edit below this line
module.exports = palindromes;
