// gsap.to("#box",{
//     x:700,
//     duration:2,
//     delay:1,
//     backgroundColor:"red",
//     rotate:360,
//     scale:0.5,
// })


// gsap.from("#box",{
//     x:900,
//     duration:2,
//     backgroundColor:"crimson",
//     rotate:360,
//     delay:1,
//     scale:0.5,

// })


// gsap.to("h1",{
//     x:600,
//     color:"red",
//     delay:1,
//     stagger:1,   //used when we want to animate same name elements one after other not at same time and it takes the time interval
//     repeat:2,   //to set it to infinite use -1 as value
//     yoyo:true,      //takes boolean value and helps in oscilliation from mean to extreme or extreme to mean


// })



const tl=gsap.timeline(); //syncrhonous execution i.e. one after the other
tl.to("h1",{
    x:600,
    
})
tl.to("h2",{
    x:700,
    
})
tl.to("h3",{
    x:800,
    
})





 