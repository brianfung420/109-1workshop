let slideTime = 0,count = 1;
let previewImg;

function setPreview(number){
    clearInterval(slideTime);

    //移除目前的class
    var preNum = count-1;
    if(preNum<1){
        preNum=6;
    }
    var pre = "img"+preNum;
    var preBox = document.getElementById(pre);
    if(preBox.classList.contains("move")){
        preBox.classList.remove("move");
        console.log("removed");
    }

    var nowBox = document.getElementById("img"+number);
    nowBox.classList.add("move");
    previewImg.src = number+".jpg";
    count = number;
    slideTime = window.setInterval("changeImg()",1500);
}

function changeImg(){
    console.log("change img tag!");
    //新增目前的class
    var current = "img"+count;
    var imgBox = document.getElementById(current);
    imgBox.classList.add("move");
    previewImg.src = count+".jpg";

     //移除之前的class
     var preNum = count-1;
     if(preNum<1){
         preNum=6;
     }
     var pre = "img"+preNum;
     console.log(pre);
     var preBox = document.getElementById(pre);
     if(preBox.classList.contains("move")){
         preBox.classList.remove("move");
         console.log("removed");
     }
    count++;
    if(count==7){
        count=1;
    }
}

window.onload = function(){
    previewImg = document.getElementById("previewImg");
    slideTime = window.setInterval("changeImg()",1500);
}