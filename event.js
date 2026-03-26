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
    { id: 1, name: "Dance", info: "Dance Dance bro danceee yeey", img: "./try.jpg" },
    { id: 2, name: "Bob sings", info: "Singer can sing like a singing silkman as he is a singer", img: "" },
    { name: "Chiga", info: "Brothers of the flame can majestry ", img: "./try.jpg" },
    { name: "Bob sings", info: "Singer can sing like a singing silkman as he is a singer", img: "./try.jpg" },
];

var popDesc = [
    {   
        id: 1, 
        TnL: "07 May 2025, 2:30 pm – 5:00 pm | RVITM, Chaithanya Layout, J. P. Nagar 8th Phase, Bengaluru, Karnataka 560076, India",
        Abt: "Attention college participants! Prepare yourselves for our improv event, Shakespeare's Fools, where quick thinking and teamwork take center stage. Join us for an evening of spontaneous humor and entertaining scenes, as student groups showcase their comedic talents. From unexpected characters to uproarious situations, it's an event filled with laughter and creativity. Don't miss out on the fun-filled competition – mark your calendars and be part of the excitement!",
        Si: "• Time Limit: 5 minutes performance + 5 minutes preparation time.|• No tech requirements are allowed.|• No props are allowed.|• Act can be presented in Hindi, English and Kannada.",
        Rfee: 300,
        pool: 3000
     },
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
    el.innerHTML = `
        <div class="try" onclick="openPopup(${card.id})" style="background-image: url('${card.img}');">
            <div class="inner-card">
                <h1>${card.name}</h1>
                <p>${card.info}</p>
            </div>
        </div>
    `;
    grid.appendChild(el);
    });
}

searchInput.addEventListener("input", function(e) { render(e.target.value); });
render("");

const popup = document.getElementById("popup");

function closePopup() {
    popup.classList.add("hidden");
}

function openPopup(id) {
    popup.classList.remove("hidden");
    const card = cards.find(c => c.id === id);
    const details = popDesc.find(p => p.id === id);

    const popContent = document.getElementById('popcontent');
    const pack = document.getElementById('imgpop');

    if (card && details) {
        const formattedTnL = details.TnL.replaceAll('|', '<br>');

        pack.innerHTML = `
            <img src="${card.img}">
        `

        popContent.innerHTML = `
            <h1>${card.name}</h1>
            
            <div class="popup-section">
                <p><strong>Location & Details:</strong><br>${formattedTnL}</p>
            </div>
            
            <div class="description">
                <h3>About</h3>
                <p>${details.Abt}</p>
            </div>

            <div class="instructions">
                <h3>Special Instructions</h3>
                <p>${details.Si.replaceAll('|', '<br>')}</p>
            </div>

            <div class="footer-info">
                <span><strong>Reg Fee:</strong> ₹${details.Rfee}</span> <br>
                <span><strong>Prize Pool:</strong> ₹${details.pool}</span>
            </div>


            <div class="button">registrations opening soon</div>
        `;
        
    } else {
        console.error("Data not found for ID:", id);
    }
}