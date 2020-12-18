document.getElementById("id1").addEventListener("click", myfunction);
function myfunction() {

let baseA;
let baseB;
let height;
let answer;
baseA=document.getElementById("BaseA").value;
baseB=document.getElementById("BaseB").value;
height=document.getElementById("Height").value;
baseA=parseInt(baseA);
baseB=parseInt(baseB);
height=parseInt(height);

answer= (baseA+baseB)/2*height;
document.getElementById("calculate").innerHTML=answer;
}