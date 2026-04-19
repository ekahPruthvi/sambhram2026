

const menubtn = document.getElementById("menu");

menubtn.addEventListener("click", function(event) {
    event.stopPropagation();
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const isHome = (page === "index.html" || page === "");

    if (isHome) {
        console.log("homeee");
        menubtn.innerHTML = `
            <ul class="bounce-animate>
                <li class="active">Home</li>
                <li><a href="./events.html">Events</a></li>
                <li><a href="./contact.html">Contact Us</a></li>
            </ul>
        `;
    } else {
        console.log("no homee");
        menubtn.innerHTML = `
            <ul class="bounce-animate>
                <li><a href="./index.html"></a></li>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./events.html">Events</a></li>
                <li><a href="./contact.html">Contact Us</li>
            </ul>
        `;
    }
   
    menubtn.classList.add("is-open");
});

window.addEventListener("click", function(event) {
    if (!menubtn.contains(event.target)) {
        menubtn.innerHTML = "Menu"; 
    }
    menubtn.classList.remove("is-open");
});

// const scrlckevent = document.getElementById("scroll-lock-event");
// let inViewFlag = true;

// scrlckevent.addEventListener("wheel", (evt) => {

//     const isAtStart = scrlckevent.scrollLeft <= 0;
//     const isAtEnd = scrlckevent.scrollLeft + scrlckevent.offsetWidth >= scrlckevent.scrollWidth-1;

//     if (inViewFlag) {
//         document.getElementById("events").scrollIntoView({ 
//             behavior: "smooth",  
//             block: "start" 
//         });
//         inViewFlag = false;
//     }

//     if (evt.deltaY < 0 && isAtStart) {
//         document.getElementById("bob").scrollIntoView({ 
//             behavior: "smooth", 
//             block: "start" 
//         });
//         inViewFlag = true;
//     }

//     if (evt.deltaY > 0 && isAtEnd) {
//         document.getElementById("spons").scrollIntoView({ 
//             behavior: "smooth", 
//             block: "start" 
//         });
//     }

//     evt.preventDefault();
//     scrlckevent.scrollLeft += evt.deltaY;
// }, { passive: false });