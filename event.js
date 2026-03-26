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
    { id: 1, name: "Western Solo Dance", info: "Western Solo dance", img: "./img/westernsolodance.png" },
    { id: 2, name: "Nrityanjali", info: "classical solo dance", img: "./img/nrityanjali.png" },
    { id: 3, name: "Laya", info: "Group dance", img: "./img/groupdance.png" },
    { id: 4, name: "Euphony", info: "Western Solo singing", img: "./img/euphony.png" },
    { id: 5, name: "Valorant", info: "Valorant", img: "./img/valo.png" },
    { id: 6, name: "BGMI", info: "BGMI", img: "./img/bgmi.png" },
    { id: 7, name: "Hogathon", info: "Fiest-fiesta", img: "./img/hogathon.png" },
    { id: 8, name: "Shooting", info: "Shooting", img: "./img/shooting.png" },
    { id: 8, name: "The Hidden Manuscript", info: "Literary escape room", img: "./img/hiddenmanu.png" },
    { id: 9, name: "BGMI", info: "BGMI", img: "./img/bgmi.png" },
    { id: 10, name: "Roast Riot", info: "Rap battle", img: "./img/rapbat.png" },
    { id: 11, name: "Fifa", info: "Fifa", img: "./img/fifa.png" },
    { id: 12, name: "The spotlight", info: "monologue", img: "./img/spotlight.png" },
    { id: 13, name: "Step clash", info: "1v1 dance challenge", img: "./img/stepclash.png" },
    { id: 14, name: "Style Sync", info: "Duet Walk", img: "./img/stylesync.png" },
    { id: 15, name: "Beat storm", info: "Battle of the bands", img: "./img/beatstorm.png" },
    { id: 16, name: "Tarang", info: "Solo Instrumental", img: "./img/tarang.png" },
    { id: 17, name: "Midninght Verdict", info: "Murder Mystery", img: "./img/midver.png" },
    { id: 18, name: "Reflections", info: "Mobile and Camera Photography", img: "./img/reflections.png" },
    { id: 19, name: "Squid Games", info: "Squid Games", img: "./img/squidgames.png" },
    { id: 20, name: "Among Us", info: "Among Us", img: "./img/amongus.png" },
    
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