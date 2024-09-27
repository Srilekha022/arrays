//1.
var a = ["sri",2,'A'];
a.push(5, 6, 7);
console.log(a);

//2.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.pop()
console.log(a);

//3.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.unshift("lekha");
console.log(a);

//4.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.shift();
console.log(a);

//5.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.reverse();
console.log(a);

//6.
var a = ["sri",2,'A',"gdjkeuyfg"];
var index = a.indexOf('A');
console.log(index);

//7.
var a = ["sri",2,'A',"gdjkeuyfg"];
var exists = a.includes(30);
console.log(exists);

//8.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.sort();
console.log(a);

//9.
var a = ["sri",2,'A',"gdjkeuyfg"];
var result = a.join(',');
console.log(result);

//Questions with Multiple Array Methods:
//1.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.push('B'); 
a.shift(); 
console.log(a);

//2.
var a = ["sri",2,'A',"gdjkeuyfg"];
var result = a.reverse().join(',');
console.log(result);

//3.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.sort();
a.pop();
console.log(a);

//4.
var a = ["sri",2,'A',"gdjkeuyfg"];
a.unshift("lekha", "vidya");
a.shift();
var result= a.length;
console.log(result);

//5.How do you combine two arrays, sort the combined array, and then remove the last element?
var a = ["sri",2,'A',"gdjkeuyfg"];
var b = ['M',20,"chinni"];
var concat = a.concat(b);
var sort = concat.sort();
var result = sort.pop()
console.log(sort);





