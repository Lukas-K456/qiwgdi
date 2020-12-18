document.getElementById("id-1").addEventListener("click", myfunction);
function myfunction() {

let baseA;
let baseB;
let height;
let answer;
baseA=document.getElementById("base-a").value;
baseB=document.getElementById("base-b").value;
height=document.getElementById("height").value;
baseA=parseInt(baseA);
baseB=parseInt(baseB);
height=parseInt(height);

answer= (baseA+baseB)/2*height;
document.getElementById("calculate").innerHTML=answer;
}