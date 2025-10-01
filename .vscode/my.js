
let name='varun';
console.log(name);


let age=21;
console.log(age);

let isApproved=true;
console.log(isApproved);

let firstName=undefined;
console.log(firstName);

let selectedColor=null;
console.log(selectedColor);

//object
let person={
    name:'varun',
    age:21
};
console.log(person);

//dot notation
person.name='kumar';
console.log(person.name);

//bracket notation
person['name']='singh';
console.log(person.name);
//array
let selectedColors=['red','blue'];
console.log(selectedColors);
selectedColors[2]='green';
console.log(selectedColors.length);


//function
function greet(name,age){
    console.log('hello '+name+' you are '+age+' years old');
}
greet('varun',21);



let a=3,b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%2);
console.log(a**3);
console.log(++a);
console.log(--b);   
console.log(a++);
console.log(b--);
console.log(a);
console.log(b);
console.log(3==='3');
console.log(3=='3');
console.log(3!=='3');
console.log(3!='3');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


for(let i=0;i<5;i++){
    console.log('count is',i);


}

function greet(name,age){
    if(age>18){
        console.log("elder");
    }
    else{
        console.log("younger");
    }
}
greet('varun',21);

let add=(a,b)=>(a+b);
console.log(add(3,5));

let fruits=['one','two','three'];
console.log(fruits);
fruits.push('four');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('zero');
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.indexOf('two'));




try {
  let x = y + 1; // y is not defined
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}






// various string methods are here

let string ="hello world";

console.log(string.length);

console.log(string.charAt(0));

console.log(string.indexOf('o'));

console.log(string.lastIndexOf('o'));

console.log(string.toUpperCase());

console.log(string.toLowerCase());

console.log(string.trim());

console.log(string.split(' '));

console.log(string.replace('world','everyone'));

console.log(string.includes('hello'));

console.log(string.startsWith('he'));
console.log(string.endsWith('ld'));
console.log(string.slice(0,5));
console.log(string.substring(0,5));
console.log(string.substr(0,5));
console.log(string.repeat(3));
console.log(string.concat('!!!'));


