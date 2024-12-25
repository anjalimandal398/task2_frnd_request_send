let btn=document.querySelector("button")
let h4=document.querySelector("h4")
let img=document.querySelector("img")

let flag = 0
btn.addEventListener("click",function(){  
   if(flag == 0){
   h4.innerHTML="Friends"
   btn.innerHTML="Remove Friends"
   h4.style.color="green"
   btn.style.backgroundColor="green"
   img.style.borderColor="green"
   flag=1
}
else{
   h4.innerHTML=" Remove Friend"
   btn.innerHTML="Friends"
   h4.style.color="red"
   btn.style.backgroundColor="red"
   img.style.borderColor="red"
   flag=0
}
})