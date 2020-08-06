

// ex1

function is_string(val) {
    return typeof val === 'string'
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

// ex 2


function is_Blank(val) {
    return val === "";
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// ex 3  

function string_to_array(val) {
    return val.split(" ");
}
console.log(string_to_array("Robin Singh"));

// ex 4

function abbrev_name(val) {
    var result = val.split(" ");
    var lastName = result[1].substring(0, 1);

    return result[0] + " " + lastName + ".";
}
console.log(abbrev_name("Robin Singh"));


//-------------------------------------------------------//
// ex 5

function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}
console.log(capitalize('js string exercises'));

// ex 6

function truncate_string(val) {
    return val.substring(0, 4);
}

// ex 7
function isUpperCaseAt(val, pos) {
    return val.charAt(pos).toUpperCase() === val.charAt(pos);
}
//ex 8

function insert(initialStr, insertedStr, pos) {
    return initialStr.slice(0, pos) + insertedStr + initialStr.slice(pos);
}

console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
//ex 9 

//ex 10
function compare_strings(str1, str2) {
    var equal;
    return equal = str1.toUpperCase === str2.toUpperCase;
}
console.log(compare_strings('abcd', 'AbcD'));

//ex 11
function Uncapitalize(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}