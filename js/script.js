
// making play button cursor

function videoCursorAnim(){

    var videoCon = document.querySelector("#video-container");
    var play =document.querySelector("#play");
    
    videoCon.addEventListener("mouseenter",function(){
        gsap.to(play,{
            opacity:1,
            scale:1
        })
    })
    
    videoCon.addEventListener("mouseleave",function(){
        gsap.to(play,{
            opacity:0,
            scale:0
        })
    })
    
    videoCon.addEventListener("mousemove",function(dets){
        gsap.to(play,{
           left:dets.x,
           top:dets.y
    
        })
    })
    
    
    
    
}

videoCursorAnim()
