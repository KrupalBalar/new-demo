var array = ['abc', 'xyz', 'dcg'];
var array2 = [1,2,3];


var arrayresult = array.concat(array2);
// console.log("array one", array);
// console.log("array two", array2);
// console.log("array result", arrayresult);




var demoarray = [1,2,3,[4,5,6],7,8,[10,11,[12,[13,14,15,16,[17,18,19,20]]]]];

var res = demoarray.flat(Infinity);

// console.log("res result", res);






// console.log(Array.isArray('krupal'));
// console.log(Array.from('krupal'));
 

var string1 = 'krupal';
var string2 = 'balar';
var string3 = 'talaja';

console.log(Array.of(string1, string2, string3));