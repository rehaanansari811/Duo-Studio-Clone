function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 20 + "px"
    cursor.style.top = dets.y + 20 + "px"
})

gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

var timeline1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 23%",
        end: "top 0",
        scrub: 2
    }
})

timeline1.to("#page1 h1", {
    x: -100
}, "uni")

timeline1.to("#page1 h2", {
    x: 100
}, "uni")

timeline1.to("#page1 video", {
    width: "80%"
}, "uni")

var timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})

timeline2.to("#main", {
    backgroundColor: "#fff"
})

var timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top -450%",
        end: "top -510%",
        scrub: 3
    }
})

timeline3.to("#main", {
    backgroundColor: "#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image")
        cursor.style.width = "470px"
        cursor.style.height = "370px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    })
})

var navH4 = document.querySelectorAll("nav a")
var purple = document.querySelector("#purple")
navH4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function () {
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})