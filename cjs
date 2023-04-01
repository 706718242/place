window.onload = (event) => {
  console.log('page is fully loaded');

const table = document.getElementById("OnMachine");
const a = []; 
const table1 = [];
for (let i = 1; i < table.rows.length; i++) {
 
  a.push(parseInt(table.rows[i].cells[3].innerText));
}
for (let i = 1; i < table.rows.length; i++) {
 
  table1[i]=table.rows[i].innerText;
}

//console.log(a);   

 //大到小排序                                      
 var max = []; 
 var d = a.length*a.length;

 var tsw=[];

 for(var j=0; j<d;j++){
 for (var i = 1; i < a.length; i++) {
 if(a[i-1]<a[i]){ d++; max=a[i]; a[i]=a[i-1]; a[i-1]=max; 
                
                
                
                
                
                
                } 

 } }   console.log(a);                                                             
  /*                                                      
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[3].innerHTML='<span id=i>'+a[i]+'</span>';
console.log( table.rows[i].cells[3].innerText);      }

*/ 










};
