/* My solution 

const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        let index  = array.indexOf(arguments[i]);
        if (index === -1) continue;
        array.splice(index, 1);
    }
    return array;
};
*/


//TOP solution using filter() method of arrays
const removeFromArray = function(array, ...args) {
    return array.filter(value => !args.includes(value));
}

// Do not edit below this line
module.exports = removeFromArray;
