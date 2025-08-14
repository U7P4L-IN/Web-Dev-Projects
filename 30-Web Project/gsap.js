gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

//! Gsap animations start here
function onLoader () {
    const tl = gsap.timeline();

    tl.from(".img-box img", {
        y: 400,
        opacity: 0,
        duration: 1,
    })
    
    tl.from(".center-txt .blacktxt", {
        y: -200,
        opacity: 0,
        duration: .8,
    })
    
    tl.from(".center-txt .colorFull", {
        x: 400,
        opacity: 0,
        duration: .5,
    })
    tl.from(".logo", {
        opacity: 0,
        duration: 1,
        scale: 0,
    })
    
    tl.from(".navbar ul li", {
        x: -200,
        opacity: 0,
        duration: .5,
        stagger: 0.4,
        onComplete: function() {
            gsap.to(".navbar ul li a", {
                duration: 1,
                opacity: 1,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true,
            });
        },
    })
    
    tl.from(".navbar button", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
    })
    tl.from(".left-box .card", {
        x: -200,
        opacity: 0,
        duration: .5,
        stagger: 0.4,
    })
    tl.from(".left-box .card h1", {
        x: 200,
        duration: .4,
        stagger: 0.3,
        opacity: 0,
    })
    tl.from(".right-box p", {
        x: 200,
        opacity: 0,
        duration: .5,
    })
    
    tl.from(".right-box div button", {
        y: 200,
        opacity: 0,
        duration: 1,
        onComplete: function() {
            gsap.from(".img-box img", {
                y: 20,
                yoyo: true,
                repeat: -1,
                duration: 1,
            })
        },
    })
    // layered on 
    const mytext = new SplitType('.two-heading')
    const mytext2 = new SplitType('.center-box .left p')
    const mytext3 = new SplitType('.center-box .left h2')
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#two",
            scroller: ".main",
            markers: true,
            start: '45% 50%',
            end: '100%, -50%',
            scrub: 3,
            pin: true,
            // pinSpacing: false,
        }
    })
    
    tl2.from('.two-heading .char', {
        x: 200,
        opacity: 0,
        duration: 10,
        stagger: 2,
        // delay: 0.5,
        // pin: true
    })
    tl2.from('.center-box .right img ', {
       y: 200,
       duration: 30,
       scale: 0,
       stagger: 1,
       // pin: true
    })
    tl2.to ('.center-box .left h2 .char', {
           y:0,
           stagger: 1,
           duration: 5,
    })
    
    tl2.from('.center-box .left p .char, .center-box .left ul li', {
        x: 200,
        opacity: 0,
        duration: 10,
        stagger: 3,
        // pin: true
    })
    
    // tl2.from('.center-box .left ul li', {
    //     x: -220,
    //     stagger: 0.5,
    //     delay: 0.05,
    
    // })
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#three",
            scroller: ".main",
            // markers: true,
            start: '38% 50%',
            end: '90%, 30%',
            scrub: 3,
            pin: true,
            // pinSpacing: false,
        }
    })
    
}

// tl3.from('.two-img', {
//     y: "50%",
//     x: 0,
// })


// Loader animation

const loderText = new SplitType('.loader h1');

gsap.to('.loader h1 .char', {
    y: 0,
    // delay: 0.05,
    stagger: 0.188,
    duration: 1,
    onComplete: () => {
        gsap.to('.loader', {
            y: "-100%",
            duration: 1,
            dealy: 1,
            opacity:0,
            onComplete: onLoader()
   209.error
patch done