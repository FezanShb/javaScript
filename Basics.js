//variables

//let
let firstName = "Fezan";
let lastName = "Muhammad Ali";

//const
const age = 19;

//var
var address = "Saikhum Sheikhupura Rd Muridke";
var fatherName = "Muhammad Ali";
var institue = "University Of Education";

//boolean
let live = true;

console.log(
  `Here is ${firstName} ${lastName} who is studying at ${institue}.His father name is ${fatherName} and the buddy is ${age} years old and still living at ${address} Why he don't shift in lhr...${live}`
);

//string concatenation

console.log(firstName + " " + lastName);
console.log(firstName, lastName, "\n");

// for loop
console.log("\\\\let's Do It Using For Loop\\\\\n");
for (let i = 0; i < 10; i++) {
  console.log(`This is my ${i + 1} itration\n`);
}

//while loop
console.log("\\\\Now I'm Doing Through While Loop\\\\\n");
let i = 0;
while (i < 10) {
  console.log(`${i + 1} iteration\n`);
  i++;
}

//do while loop
console.log("\\\\Now I'm Doing Through Do-While Loop\\\\\n");
// let c = 0;
// do {
//   console.log(`${i + 1} iteration\n`);
//   c++;
// } while (c < 10);

let c = 0;
do {
  console.log(`${c + 1} iteration\n`);
  c++;
} while (c < 10);

//array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  console.log(`The Value stored at ${i} index is ${array[i]}\n`);
}

var array2 = ["fezan", "ali", "moeez", 19, true, "yes"];
for (let i = 0; i < array2.length; i++) {
  console.log(`The Value stored at ${i} index is ${array2[i]}\n`);
}

array2[1] = "noman";
console.log(array2[1]);
console.log(array2.length);

array2.shift();
console.log(array2);
console.log(array2.length);

array2.unshift("akbar", "hammad");
console.log(array2);
console.log(array2.length);

console.log(array2.length);
array2.pop();
console.log(array2);
console.log(array2.length);

console.log(array2.length);
array2.push("am", "fine");
console.log(array2.length);
console.log(array2);

//object
var myobj = {
  Name: "Fezan Muhmmad Ali",
  fName: "Muhammad Ali",
  address: "Saikhum Sheikhupura Rd Muridke",
  add: function (a, b, c, d) {
    return a + b + c + d;
  },
};

console.log(
  "Name:\n",
  myobj.Name,
  "\n",
  "\tFather Name:\n",
  myobj.fName,
  "\n",
  "\tAddress:\n",
  myobj.address,
  "\n",
  "\tFunction:\n",
  myobj.add(1, 2, 3, 4),
  "\n"
);

//function
function even(a) {
  if (a % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}

console.log(even(90));
console.log("\n");
//switch
let day = "monday";
switch (day) {
  case "monday":
    console.log("Today is monday");
    console.log("Be Happy\n");
    break;
  case "tuesday":
    console.log("Today is tuesday");
    console.log("Happy tuesday\n");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    console.log("Happy Wednesday\n");
    break;
  default:
    console.log("Kindly enter b/t mon-wed\n");
}

//if-else
let w = 51;
if (w < 10) {
  var Fezan = "Buddy";
} else {
  var Fezan = "Buddhu";
}

console.log(Fezan);

Fezan === "Buddhu" ? console.log("it is 5") : console.log("it is not 5");
