const menubtn = document.getElementById("menu");

menubtn.addEventListener("click", function(event) {
    event.stopPropagation();
    menubtn.innerHTML = `
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li class="active">Events</li>
            <li><a href="">Contact Us</a></li>
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
    { name: "Dance", info: "Dance Dance bro danceee yeey" },
    { name: "Bob sings", info: "Singer can sing like a singing silkman as he is a singer" },
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
        '<div class="card-head">' +
        '<span class="card-icon">' + card.name.charAt(0) + '</span>' +
        '<h2>' + card.name + '</h2>' +
        '</div>' +
        '<p>' + card.info + '</p>';
    grid.appendChild(el);
    });
}

searchInput.addEventListener("input", function(e) { render(e.target.value); });
render("");