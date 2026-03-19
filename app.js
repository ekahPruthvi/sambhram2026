function loadSVG () {
    fetch("start.svg")
    .then((response) => { return response.text();})
    .then((svg) => {
        document.getElementById('bg_city').innerHTML = svg;
        document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
        doneLoading();
        setAnimationScroll();
    })

}

loadSVG();

function setAnimationScroll () {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    runAnimation.add([
        gsap.to("#dark1st", 2, {
            scale: 1.1
        })
    ])
    .add([
        gsap.to("#tree", 100, {
            x: 200,
            y: 200
        }),
        gsap.to("#vangoh", 100, {
            x: -300
        }),
        gsap.to("#musicdisk", 100, {
            rotate: 90,
        }),
        gsap.to("#piano", 100, {
            x: -100,
            y: 300
        }),
        gsap.to("#bob", 20, {
            opacity: 10,
            y: -700
        })
    ]);
}

function doneLoading () {
    const load = document.getElementById("load");
    load.style.display = "none";
}