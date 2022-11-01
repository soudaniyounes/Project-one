//start box option
document.querySelector(".landing-page .option .spans ").onclick=function(){
    document.querySelector(".box-setting").classList.toggle("open");
    document.querySelector(".box-setting .toggle-setting").classList.add("opend");
}
document.querySelector(".box-setting .toggle-setting").onclick=()=>{
    document.querySelector(".box-setting").classList.remove("open");
}
//start box color
//start local Storage
let myLocalColor=localStorage.getItem("--main-color");

if(myLocalColor !== null){
    
        document.documentElement.style.setProperty("--main-color",myLocalColor);
        
    document.querySelectorAll(".list-color li").forEach((ele)=>{
        ele.classList.remove("active");
        if(ele.dataset.color === myLocalColor){
            ele.classList.add("active");
        }
    });
}


//end local Storage
let myColor=document.querySelectorAll(".list-color li");
myColor.forEach(li=>{
    li.addEventListener("click",(e)=>{
        
      
    localStorage.setItem("--main-color",e.target.dataset.color);

     
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
     
    
    
    localStorage.setItem("--main-color",e.target.dataset.color);
    
    
     addRemoveClass(e);
    });
});

//end box color
//end box option
//start randoom background
let backvalue=0;
let BackInerval
let landingPage=document.querySelector(".continair .landing-page");
let ArrayLand=["pppop.jpg","pkm.png","tel.jpg","kkj.png","uuu.jpg"];
function RandomImage(){
    if(backvalue === true){
        
        BackInerval=setInterval(function(){
            let ImgR = Math.floor(Math.random() * ArrayLand.length);
            landingPage.style.backgroundImage='url("images/'+ ArrayLand[ImgR]+'")';
        },1000)
        
    }
  
}
RandomImage()

//end randoom background
//start About me button
let myButton=document.querySelector(".about-us .text-two");
let myAbout=document.querySelector(".landing-page .about-me");
let ReturnButton=document.querySelector(".landing-page .about-me .return");
myButton.onclick=function(){
    myAbout.style.display="block";
}
ReturnButton.onclick=function(){
    myAbout.style.display="none";
}
//end About me button
//start skills part
let mySkills=document.querySelectorAll(" .skills .skill-progres span");
window.onscroll=()=>{
    let karinPage=window.pageYOffset;
    if(karinPage >= 600){  
        mySkills.forEach(ele=>{
            ele.style.width=ele.dataset.skills;
        })      
    }
    
}
//end skills part
//start gallery part
let photo=document.querySelectorAll(".Our-gallery .images img ");
let photoS=document.querySelector(".Our-gallery ");
photo.forEach(img=>{
    img.addEventListener("click",(ele)=>{

        let overlay=document.createElement("div");
        overlay.className="my-Overlay";
        document.body.appendChild(overlay);

     let popupBox=document.createElement("div");
     popupBox.className="Popup";
     if(img.alt!==null){
        let myTitle=document.createElement("h3");
        myTitle.className="title"
        let myTitleText=document.createTextNode(img.alt);
        myTitle.appendChild(myTitleText);
        popupBox.appendChild(myTitle);
     }
     let mypopupImg=document.createElement("img");
     mypopupImg.src=img.src;
     mypopupImg.className="ImagePopup";
    
     popupBox.appendChild(mypopupImg);
    document.body.appendChild(popupBox);

    let Exit=document.createElement("span");
    Exit.className="exitButton";
    let TextExit=document.createTextNode("X");
    Exit.appendChild(TextExit);
    popupBox.appendChild(Exit);
    });
});
document.addEventListener("click",(ex)=>{
if(ex.target.classList.contains("exitButton")){
    ex.target.parentNode.remove();
    document.querySelector(".my-Overlay").remove();
}
})  
//end gallery part
//start function
function addRemoveClass(event){
    event.target.parentElement.querySelectorAll(".active").forEach(ele=>{
        ele.classList.remove("active");
    });
    event.target.classList.add("active");
}
//end function
