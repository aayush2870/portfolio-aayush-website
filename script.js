gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    delay:1,
    height: "80px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
     
    },
    
  });