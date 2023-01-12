const findTheOldest = function(array) {
    return array.reduce((oldest,current) => {
        let oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let currentAge = findAge(current.yearOfBirth, current.yearOfDeath)
        return oldestAge > currentAge ? oldest:current
    })
};

const findAge = function(birth,death){
    if(!(death)){
        death = new Date().getFullYear()
    }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
