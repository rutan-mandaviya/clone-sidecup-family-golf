var cur=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(details){
    cur.style.left=details.x+"px"
    cur.style.top=details.y+"px"
     blur.style.left=details.x-250+"px"
    blur.style.top=details.y-250+"px"

})




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"130px",
    duration:0.5,
    // delay:0.2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -13%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -50%",
        scrub:2
    }

})