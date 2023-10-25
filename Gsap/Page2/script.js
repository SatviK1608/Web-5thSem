gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    

})
gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",  //element to be triggered
        scroller:"body",     //what ele are we going to scroll
        // markers:true,
        start:"top 60%",     //to shift scroller-start position
        end:"top 30%",
        scrub:2, //when we want our animation to take effect till we are  scrolling
    },


})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",  //element to be triggered
        scroller:"body",     //what ele are we going to scroll
        start:"top 80%",     //to shift scroller-start position
        end:"top 50%",
        scrub:2, //when we want our animation to take effect till we are  scrolling
    },

})
