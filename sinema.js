
const bır= document.getElementById("agrup");
const ıkı= document.getElementById("bgrup");
const uc= document.getElementById("cgrup");
const fıadt=document.getElementById("fiyat");


bır.addEventListener("click", function(){
document.getElementById("agrup").style.border="solid 2px red"


});
ıkı.addEventListener("click", function(){
   document.getElementById("bgrup").style.border="solid 2px red"
   
   
   });
   uc.addEventListener("click", function(){
      document.getElementById("cgrup").style.border="solid 2px red"
      
      
      });
let adt=1;
function sec(ab){


   

   document.getElementById("alışverişticareti").innerHTML+=ab+",";

   var adtgör= document.getElementById("fiyat").innerHTML= adt
 fıadt.textContent=adt++



}



/*  en son billet almayı bitirme buttonu  */
var fvalue= document.getElementById("fiyat")

function tmm(){
   
  document.getElementById("gfnr").innerHTML=adtgör*10


}




