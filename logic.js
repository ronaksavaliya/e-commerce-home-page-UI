let img=document.getElementsByClassName("sliderImg");
let index=0;
let prevIndex=0;

for(let i=0;i<img.length;i++){
    img[i].style.display="none";
}

function sliderShow(){
     
     img[prevIndex].style.display="none";
     img[index].style.display="block";
     prevIndex=index;
     index++;

     if(index>=img.length){
        index=0;
     }

     setTimeout(sliderShow, 2000);
}

sliderShow();