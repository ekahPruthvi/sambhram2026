const menubtn = document.getElementById("menu");

menubtn.addEventListener("click", function (event) {
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

window.addEventListener("click", function (event) {
  if (!menubtn.contains(event.target)) {
    menubtn.innerHTML = "Menu";
  }
  menubtn.classList.remove("is-open");
});

var cards = [
  {
    id: 1,
    name: "Western Solo Dance",
    info: "Western Solo dance",
    img: "./img/westernsolodance.png",
  },
  {
    id: 2,
    name: "Nrityanjali",
    info: "classical solo dance",
    img: "./img/nrityanjali.png",
  },
  { id: 3, name: "Laya", info: "Group dance", img: "./img/groupdance.png" },
  {
    id: 4,
    name: "Euphony",
    info: "Western Solo singing",
    img: "./img/euphony.png",
  },
  { id: 5, name: "Valorant", info: "Valorant", img: "./img/valo.png" },
  { id: 6, name: "Hogathon", info: "Fiest-fiesta", img: "./img/hogathon.png" },
  { id: 7, name: "Shooting", info: "Shooting", img: "./img/shooting.png" },
  {
    id: 8,
    name: "The Hidden Manuscript",
    info: "Literary escape room",
    img: "./img/hiddenmanu.png",
  },
  { id: 9, name: "BGMI", info: "BGMI", img: "./img/bgmi.png" },
  { id: 10, name: "Roast Riot", info: "Rap battle", img: "./img/rapbat.png" },
  { id: 11, name: "Fifa", info: "Fifa", img: "./img/fifa.png" },
  {
    id: 12,
    name: "The spotlight",
    info: "monologue",
    img: "./img/spotlight.png",
  },
  {
    id: 13,
    name: "Step clash",
    info: "1v1 dance challenge",
    img: "./img/stepclash.png",
  },
  { id: 14, name: "Style Sync", info: "Duet Walk", img: "./img/stylesync.png" },
  {
    id: 15,
    name: "Beat storm",
    info: "Battle of the bands",
    img: "./img/beatstorm.png",
  },
  {
    id: 16,
    name: "Tarang",
    info: "Solo Instrumental",
    img: "./img/tarang.png",
  },
  {
    id: 17,
    name: "Midninght Verdict",
    info: "Murder Mystery",
    img: "./img/midver.png",
  },
  {
    id: 18,
    name: "Reflections",
    info: "Mobile and Camera Photography",
    img: "./img/reflections.png",
  },
  {
    id: 19,
    name: "Squid Games",
    info: "Squid Games",
    img: "./img/squidgames.png",
  },
  { id: 20, name: "Among Us", info: "Among Us", img: "./img/amongus.png" },
];

var popDesc = [
  {
    id: 11,
    TnL: "24 April 2026, 2:30 pm – 6:00 pm | RVITM, Chaithanya Layout, J. P. Nagar 8th Phase, Bengaluru, Karnataka 560076, India, MCA Seminar Hall",
    Abt: "Get ready to unleash your football skills in the most electrifying gaming competition of the fest! This year, we're bringing you the ultimate FIFA showdown, where precision, strategy, and mastery of the beautiful game will determine the champion. Whether you're a seasoned pro or a rising star, step onto the virtual pitch, outplay your opponents, and claim victory. Show us your dribbles, passes, and winning goals—because in this arena, only the best will emerge victorious!",
    Si: "• It is a solo event.|• No tech requirements are allowed.|• In case of a draw, the match will be played once again.|• The Tournament type will be Knockout Format - The player that wins will proceed to the next round.|• In case of an odd number of teams to conduct a tournament in knockout format, ‘BYE’ will be given at random and it will be decided by organisers using challonge.com.",
    gi: "• Please carry your college ID cards.|• The entry fee will not be refunded under any circumstances.|• All participants must register for the gaming event in advance.|• Participants should arrive at the specified location at least 30 minutes prior the event starts for check-in.|• Check-in will involve verifying registration details and assigning participants to their respective gaming stations.|• Respect all participants, organisers, and staff members. Harassment, bullying, or any form of disrespectful behaviour will not be tolerated.|• Maintain a positive and friendly atmosphere throughout the event. Follow the instructions of the event organisers at all times. Report any suspicious or unsafe behaviour to the event organisers immediately.|• Violation of any rules or code of conduct may result in penalties, disqualification, or removal from the event, depending on the severity of the offence.|• If anyone finds any Loophole, they are requested not to violate and argue for that and contact the organisers immediately. The decision will be taken accordingly.",
    Rfee: 200,
    pool: 2000,
  },
  {
    id: 4,
    TnL: "23 April 2026, 3:00 PM – 5:00 PM | RVITM, 6th Floor Seminar Hall",
    Abt: "It's time to claim the mic and let your vocal prowess take center stage in our highly anticipated solo vocal showdown! Whether you plan to bring the house down with a high-octane pop hit or move the room to tears with a breathtaking acoustic melody, we want to see you mesmerize the audience with your authentic flair. We welcome tracks from every genre—this is your blank canvas to paint with your own unique musical signature. Connect deeply with the lyrics, let the beat drive you, and deliver a performance that gives the crowd chills. Battle it out to be crowned this year's top vocal powerhouse in an event where pure talent meets untamed emotion. The stage is set—grab your chance to make history!",
    Si: "• Time Limit for each performance is limited to 3+1 minutes (3 minutes for singing, 1 minute for setup/transition).|• An accompanist is allowed along with the participant.|• Participants may play their own instruments while singing. Instruments will not be provided by the host college.|• Any special technical requirements for instruments must be communicated to event coordinators in advance.|• Karaoke or backing tracks are allowed, but must be uploaded to the provided Drive link. Participants must also bring a backup on a pen drive.|• The competition will be held in a single round only.",
    gi: "• The decision of the judges will be final and binding.|• Participants must report 1 hour before the event starts. Latecomers may not be allowed to participate.|• No refunds will be given under any circumstances.",
    Rfee: 200,
    pool: 2500,
  },

  {
    id: 5,
    TnL: "23 April 2026, 12:30 PM – 6:30 PM | RVITM, Lab",
    Abt: "Calling all VALORANT warriors and strategic masterminds! Gear up for an electrifying gaming experience where precision, teamwork, and quick reflexes reign supreme. Dive into adrenaline-pumping 5v5 battles, where every round counts and every play could be the game-changer. Whether you're a seasoned pro or a rising star, this is your stage to shine, outplay your opponents, and fetch your name in the annals of VALORANT glory. Join forces with allies, devise unbeatable strategies, and compete for the ultimate victory. Don't miss your chance to be part of an epic showdown filled with jaw-dropping moments and unforgettable memories. Register now and step into the arena where legends are born and greatness is achieved!",
    Si: "• Each team must have a team leader.|• The team leader will be responsible for effective communication between the organisers and the team for all the details.|• All members need not be present at the location, and members will be allowed to play from different locations.|• All team members should bring all their required equipment like laptops, headsets, mice, mouse pads, keyboards, etc.|• All the players must have a valid Valorant Account.|• The players must update the game beforehand as updates will not be allowed after reaching the tournament location.|• All the matches will be played on Mumbai server only.|• The Organising team will create the custom rooms for the matches.|• The Tournament type will be Knockout - The team that wins will proceed to the next round.|• The match-making of opponents will be random and will be decided by the organising team only.|• All the matches will be Best of One only.|• In case of an odd number of teams, 'BYE' will be given at random and decided by organisers using challonge.com.|• The Organising team will add the captains in the lobby and the captains should add the rest of the players.|• Only in-game voice chat should be used after the game is started till its completion.|• In-game cheats should not be turned on by any player.|• Maps: Haven, Bind, Split, Fracture, Icebox, Ascent, Pearl. 1st round - all teams play on the same map picked by organizers. 2nd stage - map selection via Map Ban method.|• All agents and weapons are allowed.|• The game ends once a team wins 13 rounds. In the event of a 12:12 tie, overtime will be enabled until one team has a 2 round lead.|• Substitution of any player will not be allowed after the tournament begins. Teams can change players before check-in.",
    gi: "• Participants are requested to report 1 hour before the commencement of the event.|• All participants must register for the gaming event in advance.|• Check-in will involve verifying registration details and assigning participants to their respective gaming stations.|• Respect all participants, organisers, and staff members. Harassment, bullying, or any form of disrespectful behavior will not be tolerated.|• Maintain a positive and friendly atmosphere throughout the event. Follow the instructions of the event organisers at all times.|• Cheating, exploiting glitches, or using unauthorised tools or software is strictly prohibited. No external support or coaching will be allowed during the game.|• Exiting a game without a proper reason will lead to disqualification of the team.|• Keep personal belongings secure. The organising committee is not responsible for any lost or stolen items.|• Violation of any rules or code of conduct may result in penalties, disqualification, or removal from the event.|• If anyone finds any loophole, they are requested not to violate it and contact the organisers immediately.|• All participants can play on their respective mobile networks or the Ethernet connection provided, but organisers are not responsible for ping issues.|• No refunds will be given under any circumstance.",
    Rfee: 500,
    pool: 5000,
  },

  {
    id: 14,
    TnL: "24 April 2026, 3:00 PM – 5:00 PM | RVITM, Auditorium",
    Abt: "Step into the spotlight where attitude speaks louder than words and every step becomes a statement. Style sync is your chance to showcase creativity, coordination, and unmatched stage presence. Form your team. Design your theme. Walk with purpose. From bold street swagger to royal elegance, this stage is yours to express, impress, and dominate.",
    Si: "• The Performance duration is 8 minutes, with a 2 minute grace period.|• All outfits must be stylish, elegant, and appropriate for a public audience.|• Participants must maintain professionalism; any form of discrimination, offensive behaviour, or disrespect will lead to disqualification.|• Hazardous props such as sharp objects, flammable materials, or any item that could cause injury are strictly prohibited.|• Each team must consist of students from the same college, with a team size between 6 to 12 members.|• Teams must register before the deadline to be eligible for participation.|• Music tracks for the runway walk must be submitted to the organisers at least two days before the event.|• Each team is responsible for arranging their own costumes, props, and accessories.|• Participants must strictly follow the given time limits for their runway walks.|• Lighting requirements for the runway walk must be submitted in PDF form to the organisers at least two days before the event.",
    gi: "• The decision of the judges will be final and binding.|• Participants must report 3 hours before the event starts and must be ready 1 hour before their performance. Latecomers may not be allowed to participate.|• No refunds will be given under any circumstances.",
    Rfee: 1500,
    pool: 9000,
  },

  {
    id: 3,
    TnL: "23 April 2026, 1:00 PM – 3:00 PM | RVITM, Auditorium",
    Abt: "Laya Group Dance is a grand celebration of rhythm, expression, and artistic unity. This event serves as a platform for dancers to showcase their creativity through synchronized choreography, emotive storytelling, and compelling stage presence. Participants mesmerize the audience with their harmony, energy, and the seamless blend of music and movement.",
    Si: "• Each team should comprise a minimum of 6 and maximum of 15 members.|• The time limit is 5+2 minutes. Duration of the performance should not exceed 5 minutes and a maximum of 2 minutes will be given for stage setup.|• Competition will be held in one round.|• All dance forms are welcome.|• Multiple teams from the same college are allowed.|• Props are allowed and all props must be specified to the event coordinator beforehand.|• Usage of any props such as fire, fluid, or sharp items that are harmful is strictly prohibited.|• No profanity to be displayed through the performance.|• Music tracks should be submitted at least two days before the event in MP3 format.|• Backdrop for performance (if needed) must be submitted at least 2 days before the event in a Google Drive link provided by the organisers. Video backdrops must be in MP4 format; image backdrops (landscape) must be in PDF or PPT format.|• Any special lighting requests must be communicated to the event coordinators in advance.|• Participants must bring their own costumes, props and accessories on the day of the event.|• All participants must follow the rules set by the Organising Committee, and any violations may lead to penalties or disqualification.",
    gi: "• The decision of the judges will be final and binding.|• Participants must report 1 hour before the event starts. Latecomers might not be allowed to participate.|• No refunds will be given under any circumstances.",
    Rfee: 1000,
    pool: 10000,
  },
];

var grid = document.getElementById("grid");
var empty = document.getElementById("empty");
var searchInput = document.getElementById("searchInput");

function render(filter) {
  var q = (filter || "").toLowerCase();
  var results = cards.filter(function (c) {
    return (
      c.name.toLowerCase().indexOf(q) !== -1 ||
      c.info.toLowerCase().indexOf(q) !== -1
    );
  });

  grid.innerHTML = "";

  if (results.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  results.forEach(function (card, i) {
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

searchInput.addEventListener("input", function (e) {
  render(e.target.value);
});
render("");

const popup = document.getElementById("popup");

function closePopup() {
  popup.classList.add("hidden");
}

function openPopup(id) {
  popup.classList.remove("hidden");
  const card = cards.find((c) => c.id === id);
  const details = popDesc.find((p) => p.id === id);

  const popContent = document.getElementById("popcontent");
  const pack = document.getElementById("imgpop");

  if (card && details) {
    const formattedTnL = details.TnL.replaceAll("|", "<br>");

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
            <br>

            <div class="instructions">
                <h3>Special Instructions</h3>
                <p>${details.Si.replaceAll("|", "<br>")}</p>
            </div>
            <br> 
            <div class="instructions">
                <h3>General Instructions</h3>
                <p>${details.gi.replaceAll("|", "<br>")}</p>
            </div>
            <br>
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
