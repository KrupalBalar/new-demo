var firstarray = [1,2,3,4,5,78];
var secarray = ["jay", "Patel"];
console.log(firstarray);
// console.log(secarray);
secarray.push("ABC");
// firstarray.pop();


firstarray.unshift(9);
firstarray.shift();
// console.log(secarray);
// console.log(firstarray);    

var newarray = firstarray.slice(1, 3);
console.log(firstarray);

var newarray = firstarray.splice(1, 3);
console.log(firstarray);

