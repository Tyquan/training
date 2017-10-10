// needs refactoring
var abc = function(z) {
    var x = false;
    if (z > 10) {
        return true;
    }
    return x;
}

/*
Rename the function and variable names to be more meaningful, that is, rename1. x and z so that they make sense:
*/
// var isTenOrGreater = function(value) {
//     var falseValue = false;
//     if (value > 10) {
//         return true;
//     }
//     return falseValue;
// }

/*
Remove any unnecessary complexity. In this case, the if conditional statement2. can be removed completely, as follows
*/
var isTenOrGreater = function(value) {
    return value > 10;
};

/*
    Reflect on the result
*/