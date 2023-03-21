var obj1={name:"person1",age:5};
var obj2={age:5,name:"person1"};
// comapre 2 json files
obj1.name==obj2.name ? console.log("yes"+" "+obj1.name+" "+"is equal to "+" "+obj2.name) : console.log("no bot are not equal");
obj1.age==obj2.age ? console.log("yes"+" "+obj1.age+" "+"is equal to "+" "+obj2.age) : console.log("no bot are not equal");
var result=JSON.stringify(obj1) === JSON.stringify(obj2);
console.log("true");
console.log("obj1"+" "+JSON.stringify(obj1));
console.log("obj1"+" "+JSON.stringify(obj2));
console.log("obj1"+" "+Object.entries(obj1).toString());
