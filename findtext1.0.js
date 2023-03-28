
  box = document.createElement('tbox');
  box.id = 'tboxid';






function addStyle() {
 
  document.documentElement.appendChild(box);
  box.innerHTML = "";
  box.style.position= "fixed";
  box.style.top = "0";
//box.style.left = "0";
  box.style.right= "0";
  box.style.width= "390px";
  //box.style.border= 3px solid #73AD21;
  box.style.zIndex = "9999";
  box.style['top'] = '';
  box.style.display = 'block';
  box.style.fontSize = '18px';
//box.style['background-color'] = "#fff";
document.getElementById(box.id).style.color = "white";
}
f() ;
 addStyle();




var ic=[];
var keyC=[];
var tout=0;
var search=0,slot=0;;


function clear() {
 
var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < ic.length; i++) {
 
   cells[ic[i]].style.backgroundColor = "";
 }
 
 console.log("clean");
search=1;
 //document.getElementById(box.id).innerHTML = "";

  
}

function tclear() {

var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < ic.length; i++) {
    //if(search==1)
   //cells[ic[i]].style.backgroundColor = "";


 
 }
 keyC.length = 0;
 console.log("clean");

 document.getElementById(box.id).innerHTML = "";

  
 
}

var intervalId,intervalId1;

document.addEventListener('keydown', (event) => {
console.log(event.key);
 console.log(event.keyCode);
 console.log(keyC);


 
 clearInterval(intervalId);
 clearInterval(intervalId1);
 intervalId = setInterval(function() { tclear(); }, 10000);
 intervalId1 = setInterval(function() { clear(); }, 30000);
 
  if (event.keyCode!=32&&event.keyCode>47&&event.keyCode<58||event.keyCode=="189"||event.keyCode>"64"&&event.keyCode<"91") { 
  
    keyC.push(event.key);
    //console.log(event.key);
    
  
    //document.getEl  keyC= String.fromCharCode(event.keyCode);ementById(box.id).style.display = 'block';
   //document.getElementById(box.id).style.color = "blue";
  // keyC= String.fromCharCode(keyC);
   //console.log(keyC);
    document.getElementById(box.id).innerHTML = keyC.join('');
   
  }
 
  if(event.key=="Backspace"){
   keyC.pop();
   document.getElementById(box.id).innerHTML = keyC.join('');

   //if(keyC.join('')=="123")document.getElementById(box.id).style.color = "red";
 // document.getElementById(box.id).style.display = 'none';

   //keyC = "";
   console.log(keyC);
   clearInterval(intervalId);
  }
//Enter
 if(event.key=="Enter"){
if(keyC!=""){
clear() ;
var table = document.getElementById("OnMachine");
var searchText = keyC.join('').toLowerCase(); // 将搜索文本转换为小写字母
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  var cellText = cells[i].innerHTML.toLowerCase(); // 将单元格文本转换为小写字母
  if (cellText.indexOf(searchText) !== -1) {
   ic.push(i);

   // cells[i].style.backgroundColor = "#ffebb5";
   // cells[i].scrollIntoView();
  }
}

 console.log(ic);
 search=1;    //完成搜索标记
}
  console.log(search);
  console.log(slot);
  console.log(ic.length);
  
  if(search==1&&(slot<ic.length)){
   console.log("!");
   var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("td");
cells[ic[slot]].style.backgroundColor = "#ffebb5";
cells[ic[slot]].scrollIntoView({ block: "center" });
    slot++;
  }
  if(search==1&&slot>ic.length){
    console.log("!1");
   var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("td");


    localtion=0;
   cells[ic[slot]].style.backgroundColor = "#ffebb5";
   cells[ic[slot]].scrollIntoView({ block: "center" });
  }

  
 }


 if(event.keyCode==36){

 clear() ;
 var table = document.getElementById("OnMachine");
 var searchText = "14497".toLowerCase(); // 将搜索文本转换为小写字母
 var cells = table.getElementsByTagName("td");
 for (var i = 0; i < cells.length; i++) {
  var cellText = cells[i].innerHTML.toLowerCase(); // 将单元格文本转换为小写字母
  if (cellText.indexOf(searchText) !== -1) {
   ic.push(i);

   
    document.getElementById(box.id).innerHTML = cells[i].innerHTML+'  '+cells[i+2].innerHTML+'  '+cells[i+3].innerHTML+'  '+cells[i+4].innerHTML+"已完成"+(cells[i+2].innerHTML-cells[i+3].innerHTML)+"块";
    cells[i].style.backgroundColor = "#ffebb5";
    cells[i].scrollIntoView({ block: "center" });
  }
}

console.log(ic);
}
 

 
 
});
//document.getElementById("OnMachine").deleteRow(1);
//<>37 39
