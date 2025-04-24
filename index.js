// let username;

// document.getElementById("mysubmit").onclick = function(){
//     username= document.getElementById("mytext").value;
//     console.log(username);
// document.getElementById("myh1").textContent = `hello ${username}`
// }

const decreasebtn = document.getElementById("decreasebtn");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countlabel = document.getElementById("countlabel");
let count = 0;

increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
reset.onclick = function(){
    count=0;
    countlabel.textContent = count;
}