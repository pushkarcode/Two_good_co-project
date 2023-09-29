function navAimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
navAimation()

function navAnimation2() {
gsap.to(".nav-part1 svg", {
    transform:"translateY(-130%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -10%",
        scrub: true
    }

    
})

gsap.to(".nav-part2 #nav-links", {
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -10%",
        scrub: true
    }

    
})


}
navAnimation2()

function navAnimation3() {
let push = gsap.timeline()

push.from(".nav-part1 svg", {
y:-200,
duration:.9,
delay:0.2,
opacity:0,
})

push.from("#nav-links, a", {
    y:-100,
    opacity:0,
    stagger:0.2,
})
push.from(".nav-icons i", {
    y:-100,
    opacity:0,
    stagger:0.2,
    // repeat:-1,
    // yoyo:true   
})



}
navAnimation3()


function videoAnimation() {
    let videocon = document.querySelector("#video-container")
    let play = document.querySelector("#play")

videocon.addEventListener("mouseenter", function() {
   gsap.to(play, {
    opacity:1,
    scale:1,
   })
})

videocon.addEventListener("mousemove", function(dets) {
    gsap.to(play, {
        left:dets.x-60,
        top:dets.y-80
    })
})


videocon.addEventListener("mouseleave", function() {
    gsap.to(play, {
        opacity:0,
        scale:0,
       })
})
}
videoAnimation()

function loadingAnimation() {
let push = gsap.timeline()    

push.to(".boundingelem",{
    y:0,
    stagger:.3,
    // opacity:0,
    duration:1.5,
    dealy:-1,
    ease:Expo.easeInOut
  })

push.from("#page1 #video-container ", {
    scale:.9,
    duration:.6,
    dealy:1.4,
    opacity:0,

})

}
loadingAnimation()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });

let a  = document.querySelectorAll(".child")
a.forEach(function(elem) {
elem.addEventListener("mouseenter",function() {
    gsap.to("#cursor", {
    transform: "translate(-50%, -50%) scale(1)",
    })
})
elem.addEventListener("mouseleave", function() {
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)",
    })
})
})
    
  }
  cursorAnimation();
  
function footerAnimation() {
gsap.from("#page6, .elem-text p", {
    scale:1.4,
    duration:.2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 .elem-text p",
        scroller:"#main",
         start:"top 60%",
         end:"top 30%",
         scrub:2,
         pin:true
    }
})
}
footerAnimation()


