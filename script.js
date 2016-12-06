 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};
 
  var x= document.getElementById("btn"); 
    x.addEventListener("click", show_img); 
	
 var y= document.getElementById("btn_reset"); 
    y.addEventListener("click", reset_img); 
  
  function reset_img(){
  document.getElementById("myForm").reset();
  }
 
  function show_img(){
	
  var fl1= document.getElementById("y1-checkbox");
  var fl2= document.getElementById("y2-checkbox");
  var fl3= document.getElementById("y3-checkbox");
  var fl4= document.getElementById("y4-checkbox");
  
  var fl5= document.getElementById("r1-checkbox");
  var fl6= document.getElementById("r2-checkbox");
  var fl7= document.getElementById("r3-checkbox");
  var fl8= document.getElementById("r4-checkbox");
 
  var fl9= document.getElementById("w1-checkbox");
  var fl10= document.getElementById("w2-checkbox");
  var fl11= document.getElementById("w3-checkbox");
  var fl12= document.getElementById("w4-checkbox");
 
  var fl13= document.getElementById("p1-checkbox");
  var fl14= document.getElementById("p2-checkbox");
  var fl15= document.getElementById("p3-checkbox");
  var fl16= document.getElementById("p4-checkbox");

  var fl17= document.getElementById("f1-checkbox");
  var fl18= document.getElementById("f2-checkbox");
  var fl19= document.getElementById("f3-checkbox");
  var fl20= document.getElementById("f4-checkbox");
 
  

  
  
if (fl1.checked && fl8.checked && fl9.checked && fl16.checked && fl19.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq1.jpg' width=100% height=auto;>";	
 }
else if (fl3.checked && fl5.checked && fl12.checked && fl14.checked && fl19.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq2.jpg'  width=100% height=80%>";	
 }
else if (fl4.checked && fl7.checked && fl10.checked && fl15.checked && fl20.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq3.jpg' width=100% height=auto;>";	
 }
else if (fl1.checked && fl7.checked && fl10.checked && fl15.checked && fl17.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq4.jpg' width=100% height=auto;>";	
 }
else if (fl2.checked && fl6.checked && fl12.checked && fl14.checked && fl18.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq5.jpg' width=100% height=auto;>";	
 }
else if (fl1.checked && fl8.checked && fl11.checked && fl15.checked && fl20.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq6.jpg' width=100% height=auto;>";	
 }
 else if (fl3.checked && fl6.checked && fl9.checked && fl14.checked && fl18.checked){
  document.getElementById("bouquet").innerHTML="<img src='images/bouquets/rsz_bq7.jpg' width=100% height=auto;>";	
 }
 else{		
var a=document.getElementById("bouquet");
a.innerHTML="Wrong selection!";
a.style.fontSize="2em";
a.style.color="white";
}
}