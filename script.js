var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});


var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(val){
    console.log(val)
    val.addEventListener("mouseenter",function(){
            crsr.style.scale=5;
            crsr.style.border="0.2px solid #fff"
            crsr.style.backgroundColor="transparent"
            val.style.color="#95C11E"

    })
    val.addEventListener("mouseleave",function(){
            crsr.style.scale=1;
            crsr.style.border="0px solid #95C11E"
            crsr.style.backgroundColor="#95C11E"
            val.style.color="#fff"

    })

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

gsap.from("#about-us img,#about-us-in",{

    y:50,
    opacity:0,
    duration:.5,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }

})
gsap.from(".card",{
    scale:0.8,

    opacity:0,
    duration:.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 69%",
        scrub:2,
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 79%",
        scrub:2

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:2

    }
})