const menubtn = document.getElementById("menu");

menubtn.addEventListener("click", function(event) {
    event.stopPropagation();
    menubtn.innerHTML = `
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li class="active">Events</li>
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

var cards = [
    { name: "Dance", info: "Dance Dance bro danceee yeey", img: "try" },
    { name: "Bob sings", info: "Singer can sing like a singing silkman as he is a singer", img: "try" },
    { name: "Chiga", info: "Brothers of the flame can majestry ", img: "try" },
    { name: "Bob sings", info: "Singer can sing like a singing silkman as he is a singer", img: "try" },
];

var grid = document.getElementById("grid");
var empty = document.getElementById("empty");
var searchInput = document.getElementById("searchInput");

function render(filter) {
    var q = (filter || "").toLowerCase();
    var results = cards.filter(function(c) {
    return c.name.toLowerCase().indexOf(q) !== -1 || c.info.toLowerCase().indexOf(q) !== -1;
    });

    grid.innerHTML = "";

    if (results.length === 0) {
    empty.style.display = "block";
    return;
    }

    empty.style.display = "none";

    results.forEach(function(card, i) {
    var el = document.createElement("article");
    el.className = "card";
    el.style.animationDelay = i * 60 + "ms";
    el.innerHTML =
        '<div class="card '+card.img+'">' +
        '<div class="inner-card">' + 
        '<h1>'+card.name+'</h1>' +
        '<p>'+card.info+'</p>' +
        '</div>' + '</div>'
    grid.appendChild(el);
    });
}

searchInput.addEventListener("input", function(e) { render(e.target.value); });
render("");