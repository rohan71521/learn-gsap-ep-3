
var tml = gsap.timeline();
tml.from("nav",{
    opacity: 0,
    delay: 1
})
tml.from("nav h3, #nav2 h3, #nav h3",{
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
})
tml.from("#right img",{
    opacity:0,
    scale : 0.5,
    duration:0.5
})
tml.from("#left h1, #small",{
    opacity:0,
    x: -50,
    stagger:0.3
})
gsap.from("#page2 .box",{
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger :{
        trigger: "#page2 .box",
        scroller: "body",
        markers: true
    }
})