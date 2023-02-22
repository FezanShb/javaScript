let count = 0;
let inc = document.getElementById("count");

function increment() {
  count += 1;
  inc.innerText = count;
}

let a = document.getElementById("pervious");
function save() {
  let str = count + " , ";

  a.innerText += str;

  inc.innerText = 0;
  count = 0;
}

let res = document.getElementById("count");
let x = "Your Pervious Value:";
function reset() {
  //   count = 0;
  res.innerText = 0;
  a.innerText = x;
}
