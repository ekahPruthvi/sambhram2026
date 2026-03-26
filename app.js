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
    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
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
    
    if (iOS) {
        runAnimation.add([
            gsap.to("#sam", 10, {
                opacity: 0
            }),
            gsap.to("#bob", 20, {
                opacity: 10,
                y: -700,
            })
        ])
    } else {
        runAnimation.add([
            gsap.to("#sam", 100, {
                scale: 1.4,
                x: -300,
                y: 100,
                opacity: 0
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
            gsap.to("#bob", 100, {
                scale: 1,
                opacity: 10,
                y: -800,
            })
        ])
        .add([
            gsap.to("#tree", 100, {
                opacity: 0
            }),
            gsap.to("#vangoh", 100, {
                opacity: 0
            }),
            gsap.to("#musicdisk", 100, {
                opacity: 0
            }),
            gsap.to("#piano", 100, {
                opacity: 0
            }),
        ]);
    }
}

function doneLoading () {
    const load = document.getElementById("load");
    load.style.display = "none";
}

const menubtn = document.getElementById("menu");

menubtn.addEventListener("click", function(event) {
    event.stopPropagation();
    menubtn.innerHTML = `
        <ul class="bounce-animate>
            <li class="active">Home</li>
            <li><a href="./events.html">Events</a></li>
            <li><a href="./contact.html">Contact Us</a></li>
        </ul>
    `;
    menubtn.classList.add("is-open");
});

window.addEventListener("click", function(event) {
    if (!menubtn.contains(event.target)) {
        menubtn.innerHTML = "Menu"; 
    }
    menubtn.classList.remove("is-open");
});

const scrlckevent = document.getElementById("scroll-lock-event");
let inViewFlag = true;

scrlckevent.addEventListener("wheel", (evt) => {

    const isAtStart = scrlckevent.scrollLeft <= 0;
    const isAtEnd = scrlckevent.scrollLeft + scrlckevent.offsetWidth >= scrlckevent.scrollWidth-1;

    if (inViewFlag) {
        document.getElementById("events").scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        });
        inViewFlag = false;
    }

    if (evt.deltaY < 0 && isAtStart) {
        document.getElementById("bob").scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        });
        inViewFlag = true;
    }

    if (evt.deltaY > 0 && isAtEnd) {
        document.getElementById("spons").scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        });
    }

    evt.preventDefault();
    scrlckevent.scrollLeft += evt.deltaY;
}, { passive: false });