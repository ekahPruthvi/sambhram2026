window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get('action');
  if (action === 'amon') {
    openPopup(20);
  } else if (action === 'squ') {
    openPopup(19);
  } else if (action === 'valo') {
    openPopup(5);
  } else if (action === 'roast') {
    openPopup(10);
  } else if (action === 'mid') {
    openPopup(17);
  } 
};

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
    id: 2,
    name: "Nrityanjali",
    info: "classical solo dance",
    img: "./img/nrityanjali.png",
  },
  {
    id: 1,
    name: "Monogroove",
    info: "Western Solo dance",
    img: "./img/westernsolodance.png",
  },
  { id: 3, name: "Laya", info: "Group dance", img: "./img/groupdance.png" },
  {
    id: 4,
    name: "Euphony",
    info: "Western Solo singing",
    img: "./img/euphony.png",
  },
  { id: 5, name: "Valorant", info: "Valorant", img: "./img/valo.png" },
  { id: 6, name: "Hogathon", info: "Feast fiesta", img: "./img/hogathon.png" },
  { id: 7, name: "Shooting", info: "Shooting", img: "./img/shooting.png" },
  {
    id: 8,
    name: "The Hidden Manuscript",
    info: "Literary escape room",
    img: "./img/hiddenmanu.png",
  },
  { id: 9, name: "BGMI", info: "BGMI", img: "./img/bgmi.png" },
  { id: 10, name: "Roast Riot", info: "Roast Battle", img: "./img/rapbat.png" },
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
  // { id: 14, name: "Style Sync", info: "Duet Walk", img: "./img/stylesync.png" },
  {
    id: 15,
    name: "BEATSTORM",
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
    name: "Midnight Verdict",
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
  { id: 21, name: "Dhwani", info:"Classical Solo singing", img: "./img/dhwani.png"},
  { id: 22, name: "Tinitique", info:"Face canvas ", img: "./img/tinitique.png"},
  { id: 23, name: "Roots Unscripted", info:"Improv", img: "./img/rootsuns.png"},
  { id: 24, name: "Rhythm Runway ", info: "Group Fashion Walk", img: "./img/fashionwalk.png" },
  { id: 25, name: "IPL AUCTION", info: "IPL Auction", img: "./img/HOG.png" },
  { id: 26, name: "Painting", info: "Painting and sketching", img: "./img/pain.jpeg" }
];

var popDesc = [
  {
    id: 25, 
    TnL: `23 April 2026, 12:30 PM - 6:30 PM | 6th Floor, Seminal Hall`,
    Abt: `Step into the electrifying world of the IPL Auction on — a high-stakes
battleground where strategy, instinct, and quick decisions define champions.
Experience the thrill as teams compete to build their ul mate squad, balancing
budgets while chasing the best talent on the table.
With every bid, the pressure rises. Every second counts. Every choice can
change the game. |
This isn’t just an auction on — it’s a test of leadership, teamwork, and cricketing
intelligence. Get ready to outbid and outplay your rivals in a fast paced
showdown where only the smartest team walks away victorious.`,
    Si: `Team Requirements:- |• Each team must consist of 1-5 player/players.
|• A team leader must be designated for each team. The team leader will serve
as the point of contact for communication on between the organizing
committee and the team.
|• All team members are required to be present at the venue; remote
participation on is not permitted
|||• Each team will operate within a predetermined budget during the auction.
Teams are not permitted to exceed this budget while bidding for players.
|• The auctioneer will announce the player's name and their base value.
Teams will then place bids for the player by raising their paddles.
|• Subsequent bids must meet or exceed the minimum bid increment set by the
auctioneer.
|• Every team must have precisely 11 players by the conclusion of the auction.
Including 5 overseas and 6 Indians.
|• Teams must clearly signal their bids to avoid any confusion.
|• Each player's bidding process will have a designated me limit. Failure to
place a bid within this me frame will result in the player being considered
unsold.
|• Teams should maintain thorough records of their expenditures, players
acquired, and any other permanent information on to ensure transparency and
prevent misunderstandings.
|• Participants are required to adhere to the instructions provided by the event
organizers and comply with any additional rules or guidelines communicated
to them.`,
    gi: `• Decision of the judges will be final and binding.
|• Participants are requested to report 1 hour before the commencement of the
event.
|• No refunds will be given under any circumstance.`,
    Rfee: 400,
    pool: 4000
  },

  {
    id: 26,
    TnL: `23 April 2026 , 3:00 PM - 5:00 PM | Drawing Room`,
    Abt: `Attention college participants! Step into a world of colours, creativity, and imagination. The Painting
Event is an engaging experience that brings together art enthusiasts to express themselves on
canvas. Participants will explore themes, experiment with techniques, and create unique artworks
that reflect their ideas and emotions.`,
    Si: `• Participants are free to choose any theme, style, or concept.
|• All common painting mediums are allowed (watercolour, acrylic, poster colours, etc.).
|• Participants must complete their artwork within the given time limit.
|• Only individual participation is allowed.
|• Participants must bring their own art supplies and a standard canvas.
|• Use of mobile phones or reference images during the event is permiƩed.
|• Final artwork must be submiƩed before the deadline for evaluation.`,
    gi: `• Report to the venue at least 20-30 minutes before the event begins.
|• Any form of misconduct will lead to disqualification.
|• Respect fellow participants and maintain a positive environment, and all the best!`,
    Rfee: 100,
    pool: 1000
  },

  {
    id: 11,
    TnL: "24 April 2026, 2:30 pm – 6:00 pm | RVITM",
    Abt: "Get ready to unleash your football skills in the most electrifying gaming competition of the fest! This year, we're bringing you the ultimate FIFA showdown, where precision, strategy, and mastery of the beautiful game will determine the champion. Whether you're a seasoned pro or a rising star, step onto the virtual pitch, outplay your opponents, and claim victory. Show us your dribbles, passes, and winning goals—because in this arena, only the best will emerge victorious!",
    Si: "• It is a solo event.|• No tech requirements are allowed.|• In case of a draw, the match will be played once again.|• The Tournament type will be Knockout Format - The player that wins will proceed to the next round.|• In case of an odd number of teams to conduct a tournament in knockout format, ‘BYE’ will be given at random and it will be decided by organisers using challonge.com.",
    gi: "• Please carry your college ID cards.|• The entry fee will not be refunded under any circumstances.|• All participants must register for the gaming event in advance.|• Participants should arrive at the specified location at least 30 minutes prior the event starts for check-in.|• Check-in will involve verifying registration details and assigning participants to their respective gaming stations.|• Respect all participants, organisers, and staff members. Harassment, bullying, or any form of disrespectful behaviour will not be tolerated.|• Maintain a positive and friendly atmosphere throughout the event. Follow the instructions of the event organisers at all times. Report any suspicious or unsafe behaviour to the event organisers immediately.|• Violation of any rules or code of conduct may result in penalties, disqualification, or removal from the event, depending on the severity of the offence.|• If anyone finds any Loophole, they are requested not to violate and argue for that and contact the organisers immediately. The decision will be taken accordingly.",
    Rfee: 200,
    pool: 2000,
  },

  {
  id: 1,
  TnL: "24 April 2026, 3:30 PM – 5:00 PM | Auditorium",
  Abt: "Immerse yourself in the rhythm of time as our event, Footprints in Time takes you on a journey through movement and expression. From timeless elegance to modern energy, every step captures a story, blending past and present in a dynamic celebration of dance.",
  Si: "• The total performance duration is 3+1 minutes (3 minutes for performance, 1 minute for setup and clearance).|• Performances must not include sensitive topics such as religion, politics, or social controversies.|• Exceeding the time limit will result in point deductions.|• The use of hazardous props, including sharp objects, flammable materials, or any items that could cause injury, is strictly prohibited.|• Participants must maintain professional conduct both backstage and during the event.|• All participants must show respect towards fellow performers, judges, and event organizers, ensuring a positive and inclusive environment.|• Rule violations may result in immediate disqualification.|• Music tracks for the performance must be submitted in MP3 format.|• Participants must bring their own costumes, props, and accessories.|• All participants must adhere to the rules set by the organising committee, and any violations may result in penalties or disqualification.|• Accompanists are not permitted; performances must be solo.|• Backdrop requirements: Video backdrops must be in MP4 format; photo backdrops must be in PDF or PPT format; all backdrops must be in landscape mode.|• Any specific lighting requirements must be communicated to the event coordinators in advance.",
  gi: "• Decision of the judges will be final and binding.|• Participants are requested to report 1 hour before the commencement of the event.|• No refunds will be given under any circumstance.",
  Rfee: 200,
  pool: 2500
},
  {
  id: 21,
  TnL: "23 April 2026, 12:30 PM – 2:30 PM | RVITM, 6th Floor Seminar Hall",
  Abt: "Step onto the stage and let the beauty of your voice fill the hall in this grand celebration of classical music! Whether you are performing a graceful Mozart aria or a moving piece of Italian art song, this is your chance to show the power of pure, natural singing. Focus on every clear note and every heartfelt phrase as you bring the works of great composers to life with your own unique style. From the quietest whisper to the most soaring melody, your goal is to connect with the audience through your skill and passion. This is more than just a contest; it is a moment to honor tradition and share your talent with the world. Take a deep breath, find your center, and let your music leave a lasting impression on everyone who hears it.",
  Si: "• Time Limit for each performance is limited to 5+1 minutes (5 minutes for singing, 1 minute for setup/transition).|• Maximum of 2 accompanists are allowed for each participant.|• Songs must be Hindustani or Carnatic and must be in an Indian language with appropriate lyrics.|• Instruments will not be provided by the host college.|• Any special technical requirements for instruments must be communicated to event coordinators in advance.|• Karaoke or backing tracks are allowed, but must be uploaded to the provided Drive link. Participants must also bring a backup on a pen drive.|• Shruti box is allowed for accompaniment during the performance.|• The competition will be held in a single round only.",
  gi: "• The decision of the judges will be final and binding.|• Participants must report 1 hour before the event starts. Latecomers may not be allowed to participate.|• No refunds will be given under any circumstances.",
  Rfee: 200,
  pool: 2500
},
  
  {
    id: 5,
    TnL: "23 April 2026, 12:30 PM – 6:30 PM | RVITM, Caed Lab",
    Abt: "Calling all VALORANT warriors and strategic masterminds! Gear up for an electrifying gaming experience where precision, teamwork, and quick reflexes reign supreme. Dive into adrenaline-pumping 5v5 battles, where every round counts and every play could be the game-changer. Whether you're a seasoned pro or a rising star, this is your stage to shine, outplay your opponents, and fetch your name in the annals of VALORANT glory. Join forces with allies, devise unbeatable strategies, and compete for the ultimate victory. Don't miss your chance to be part of an epic showdown filled with jaw-dropping moments and unforgettable memories. Register now and step into the arena where legends are born and greatness is achieved!",
    Si: "• Each team must have a team leader.|• The team leader will be responsible for effective communication between the organisers and the team for all the details.|• All members need not be present at the location, and members will be allowed to play from different locations.|• All team members should bring all their required equipment like laptops, headsets, mice, mouse pads, keyboards, etc.|• All the players must have a valid Valorant Account.|• The players must update the game beforehand as updates will not be allowed after reaching the tournament location.|• All the matches will be played on Mumbai server only.|• The Organising team will create the custom rooms for the matches.|• The Tournament type will be Knockout - The team that wins will proceed to the next round.|• The match-making of opponents will be random and will be decided by the organising team only.|• All the matches will be Best of One only.|• In case of an odd number of teams, 'BYE' will be given at random and decided by organisers using challonge.com.|• The Organising team will add the captains in the lobby and the captains should add the rest of the players.|• Only in-game voice chat should be used after the game is started till its completion.|• In-game cheats should not be turned on by any player.|• Maps: Haven, Bind, Split, Fracture, Icebox, Ascent, Pearl. 1st round - all teams play on the same map picked by organizers. 2nd stage - map selection via Map Ban method.|• All agents and weapons are allowed.|• The game ends once a team wins 13 rounds. In the event of a 12:12 tie, overtime will be enabled until one team has a 2 round lead.|• Substitution of any player will not be allowed after the tournament begins. Teams can change players before check-in.",
    gi: "• Participants are requested to report 1 hour before the commencement of the event.|• All participants must register for the gaming event in advance.|• Check-in will involve verifying registration details and assigning participants to their respective gaming stations.|• Respect all participants, organisers, and staff members. Harassment, bullying, or any form of disrespectful behavior will not be tolerated.|• Maintain a positive and friendly atmosphere throughout the event. Follow the instructions of the event organisers at all times.|• Cheating, exploiting glitches, or using unauthorised tools or software is strictly prohibited. No external support or coaching will be allowed during the game.|• Exiting a game without a proper reason will lead to disqualification of the team.|• Keep personal belongings secure. The organising committee is not responsible for any lost or stolen items.|• Violation of any rules or code of conduct may result in penalties, disqualification, or removal from the event.|• If anyone finds any loophole, they are requested not to violate it and contact the organisers immediately.|• All participants can play on their respective mobile networks or the Ethernet connection provided, but organisers are not responsible for ping issues.|• No refunds will be given under any circumstance.",
    Rfee: 500,
    pool: 5000,
  },
  {
  id: 4,
  TnL: "23 April 2026, 3:00 PM – 5:00 PM | RVITM, 6th Floor Seminar Hall",
  Abt: "It's time to claim the mic and let your vocal prowess take center stage in our highly anticipated solo vocal showdown! Whether you plan to bring the house down with a high-octane pop hit or move the room to tears with a breathtaking acoustic melody, we want to see you mesmerize the audience with your authentic flair. We welcome tracks from every genre—this is your blank canvas to paint with your own unique musical signature. Connect deeply with the lyrics, let the beat drive you, and deliver a performance that gives the crowd chills. Battle it out to be crowned this year's top vocal powerhouse in an event where pure talent meets untamed emotion. The stage is set—grab your chance to make history!",
  Si: "• Time Limit for each performance is limited to 3+1 minutes (3 minutes for singing, 1 minute for setup/transition).|• An accompanist is allowed along with the participant.|• Participants may play their own instruments while singing. Instruments will not be provided by the host college.|• Any special technical requirements for instruments must be communicated to event coordinators in advance.|• Karaoke or backing tracks are allowed, but must be uploaded to the provided Drive link. Participants must also bring a backup on a pen drive.|• The competition will be held in a single round only.",
  gi: "• The decision of the judges will be final and binding.|• Participants must report 1 hour before the event starts. Latecomers may not be allowed to participate.|• No refunds will be given under any circumstances.",
  Rfee: 200,
  pool: 2500
},

  {
  id: 12,
  TnL: "24 April 2026, 9:30 AM – 12:00 PM | RVITM, 1st Floor Seminar Hall",
  Abt: "Step into the spotlight and command the stage with the power of your words in this captivating monologue competition! This event celebrates the art of storytelling, emotion, and dramatic expression through solo performance. Whether you bring to life a powerful character, narrate a gripping story, or express deep emotions through a self-written piece, this is your chance to mesmerize the audience with your voice, expressions, and presence. From intense drama to light-hearted humour, let your performance leave a lasting impact. Channel your creativity, embody your character, and take the audience on an unforgettable journey through your words. Compete for the prestigious title of ultimate performer, where passion, creativity, and expression collide. This is your moment to shine!",
  Si: "• Time Limit for each performance is limited to 3+2 minutes (3 minutes for performance, 2 minutes for setup/transition).|• The monologue can be original or adapted from any source (movies, plays, literature, etc.).|• Use of minimal props is allowed. Participants must bring their own props if required.|• Background music or sound effects are allowed but must be submitted in advance and brought as backup.|• Offensive, vulgar, or inappropriate content will lead to disqualification.|• Participants must perform solo. No assistance or supporting actors allowed on stage.|• The competition will be conducted in 1 round.",
  gi: "• The decision of the judges will be final and binding.|• Participants must report 15 minutes before the event starts. Latecomers may not be allowed to participate.|• No refunds will be given under any circumstances.",
  Rfee: 150,
  pool: 2000
},

  {
  id: 19,
  TnL: "24 April 2026, 1:00 PM onwards | RVITM",
  Abt: "Step into a world where childhood nostalgia meets high-stakes survival. The Squid Game Challenge is an immersive, elimination-based gauntlet that tests your agility, nerves, and strategy. Divided into iconic rounds of play, individuals must navigate a series of traditional games with a modern, competitive twist to emerge as the ultimate survivor.",
  Si: "• Absolute Compliance: All instructions from the Frontman and the Guards (Circle, Triangle, Square) are final. Failure to follow a command results in instant elimination.|• Solo Performance: While you may be surrounded by other players, no physical pushing or verbal abuse is permitted. Any attempt to sabotage another player will lead to disqualification for both parties.|• No External Tools: Use of mobile phones, smartwatches, or outside tools is strictly prohibited during the trials.|• Elimination: If a player fails a task or is caught moving during a 'Red Light' phase, they will be eliminated and must leave the arena immediately.",
  gi: "• Players must report to the venue at least 25-30 minutes before their assigned time slot.|• Listen carefully to the briefing instructions before entering the room.|• Do not interfere in another's gameplay. Any form of cheating or rule violation will result in immediate disqualification.",
  Rfee: 100,
  pool: 1500
},
  
  {
    id: 15,
    TnL: "24 April 2026, 9:30 AM - 12:00 PM | RVITM, Auditorium",
    Abt: "Beatstorm is a live music showcase at Sambhram ’26 that brings together college bands for an evening centered around performance, creativity, and sound. Featuring a wide range of genres including rock, indie, metal, and fusion, the event highlights each band’s unique style, musicality, and stage presence. It is designed as a space where artists can present both original compositions and reinterpretations, creating a diverse and engaging listening experience. Set against a dynamic stage and a lively audience, Beatstorm focuses on the essence of live performance — energy, coordination, and connection. The event offers emerging musicians an opportunity to perform in a professional setup, interact with fellow artists, and leave a lasting impression through their music.",
    Si: "• Team Size: 3-8 Members|• Participants must bring their own instruments.|• A 5-piece drum kit will be provided by the host college.|• In case of any special technical requirements, the event coordinators can be contacted.|• Open for all colleges, professional and semi-professional bands, but at least one member of the team must be currently pursuing their graduation|• Each participant is allowed to represent only one band.|• Songs with appropriate lyrics are to be chosen, and the lyrics sheet must be submitted prior to the performance for OCs.|• Time limit for the performance is 15 minutes, including setup, soundcheck, and clearance|• Only Indian languages and English songs can be performed.|• Originals will be given more weightage.|• Processed music and backing tracks are strictly not allowed.",
    gi: "• The competition will be held in 1 round only.|• In case of special technical requirements for the instruments, event coordinators must be informed in advance.|• Participants are requested to report 2 hours before the commencement of the event.|• Judges’ decisions will be considered final and binding.",
    Rfee: 1500,
    pool: 9000,
  },
  
//   {
//     id: 14,
//     TnL: "24 April 2026, 12:30 PM – 2:30 PM | RVITM, Auditorium",
//     Abt: `Style Sync is a dynamic duet fashion walk event that celebrates creativity,
// coordination, and confidence. Designed for pairs who can match not just outfits
// but energy and attitude.
// From themed ensembles to bold storytelling through fashion, each duo will own
// the ramp with coordinated walks, striking poses, and captivating stage
// presence. Elegant or edgy, traditional or futuristic — there are no limits, only
// expression. Style Sync is your chance to stand out, sync up, and shine like never
// before!`,
//     Si: `• Performance Duration: 2 minutes + 1-minute grace period.
// |• Dress Code: Outfits must be stylish, tasteful, and appropriate for a public
// audience.
// |• Content Restrictions: Performances must not incorporate sensitive topics,
// including but not limited to religion, politics, or social controversies.
// |• Time Adherence: Exceeding the time limit will result in point deductions.
// |• Props & Safety: Hazardous props such as sharp objects, flammable
// materials, or any items that could cause injury are strictly prohibited.
// |• Professional Conduct: Participants must conduct themselves professionally
// both backstage and during the event.
// |• Respect & Inclusion: Discrimination or derogatory behavior towards other
// participants, judges, or organizers will not be tolerated.
// |• Disqualification Clause: Any rule violations may result in immediate
// disqualification.
// |• Team Composition: Each team must consist of two members who are
// students from the same college.
// |• Music Submission: Music tracks for the runway walk must be submitted at
// least 2 days prior to the event.
// |• Self-Sufficiency: Participants are responsible for bringing their own
// costumes, props, and accessories.
// || Compliance: All participants must adhere to the rules set by the organizing
// committee. Any violations will be subject to penalties or disqualification`,
//     gi: `• The decision of the judges will be final and binding.
// |• Participants are required to report 2 hours before the commencement of the
// event.
// |• No refunds will be given under any circumstance.`,
//     Rfee: 350,
//     pool: 2500,
//   },

  {
    id: 3,
    TnL: "24 April 2026, 12:00 PM – 2:00 PM | RVITM, Auditorium",
    Abt: "Laya Group Dance is a grand celebration of rhythm, expression, and artistic unity. This event serves as a platform for dancers to showcase their creativity through synchronized choreography, emotive storytelling, and compelling stage presence. Participants mesmerize the audience with their harmony, energy, and the seamless blend of music and movement.",
    Si: "• Each team should comprise a minimum of 6 and maximum of 15 members.|• The time limit is 5+2 minutes. Duration of the performance should not exceed 5 minutes and a maximum of 2 minutes will be given for stage setup.|• Competition will be held in one round.|• All dance forms are welcome.|• Multiple teams from the same college are allowed.|• Props are allowed and all props must be specified to the event coordinator beforehand.|• Usage of any props such as fire, fluid, or sharp items that are harmful is strictly prohibited.|• No profanity to be displayed through the performance.|• Music tracks should be submitted at least two days before the event in MP3 format.|• Backdrop for performance (if needed) must be submitted at least 2 days before the event in a Google Drive link provided by the organisers. Video backdrops must be in MP4 format; image backdrops (landscape) must be in PDF or PPT format.|• Any special lighting requests must be communicated to the event coordinators in advance.|• Participants must bring their own costumes, props and accessories on the day of the event.|• All participants must follow the rules set by the Organising Committee, and any violations may lead to penalties or disqualification.",
    gi: "• The decision of the judges will be final and binding.|• Participants must report 1 hour before the event starts. Latecomers might not be allowed to participate.|• No refunds will be given under any circumstances.",
    Rfee: 1000,
    pool: 10000,
  },

  {
    id: 13,
    TnL: "24 April 2026, 12:00 PM - 2:00 PM | RVITM, Ground Floor",
    Abt: "Unleash the rhythm within and command the spotlight in our premier one-on-one dance showdown! From deeply emotional, fluid contemporary routines to sharp, lightning-fast commercial combinations, bring your sheer passion to the floor and leave the audience mesmerized. Breathe life into the music across all genres, infusing every leap, lock, and transition with your distinct artistic vision. Allow the beat to take over, shattering expectations and telling a powerful story through your physical expression. Duel against top-tier talent to claim the crown as our next great dance visionary in a fierce contest of technique, emotion, and unfiltered skill. Come craft your legacy and leave them breathless.",
    Si: "• Battle Duration: Each dancer gets 45-60 seconds per round. Number of rounds (prelims, semis, finals) will depend on participation and judges' decision.|• The Lead-Off: A coin toss or bottle spin determines who starts. Turns will alternate in each round.|• Music Selection: The DJ has full control over the music. Dancers must adapt to any genre; no custom tracks allowed.|• Tie-Breaker Protocol: If judges cannot decide, a 'One-More-Round' (30-45 seconds) will be given.|• Judging Authority: All judge decisions are final. Any argument or delay may lead to disqualification.",
    gi: "• Zero-Contact Policy: Any intentional physical contact (pushing, bumping, grabbing) will result in immediate disqualification.|• The Buffer Zone: Dancers must respect personal space and avoid aggressive or threatening behavior.|• Prohibition of Offensive Gestures: No abusive or disrespectful gestures allowed.|• No Verbal Heckling: No shouting or insulting during the battle.|• Crew Intervention: If friends/crew interfere or crowd the floor, the dancer may be disqualified.|• Post-Battle Conduct: Dancers must show sportsmanship (handshake/nod) after the battle.|• Safety Hazards: No dangerous props or anything that may cause injury or make the floor unsafe.",
    Rfee: 150,
    pool: 1500,
  }, 

  {
    id: 20,
    TnL: "23 April 2026, 3:00 PM - 5:00 PM | RVITM",
    Abt: "Among Us In Real Life (IRL) transforms the popular digital deduction game into an immersive, high-stakes physical experience where players are divided into two secret teams: Crewmates and Impostors. While the Crewmates navigate the venue to complete tangible 'tasks'—like sorting items or solving quick puzzles—the Impostors must blend in, faking their productivity while strategically 'eliminating' players using silent signals or kill cards. The atmosphere stays tense as players constantly watch their backs, trying to finish their objective list before the Impostors outnumber the living crew. The heart of the game lies in the Emergency Meetings, triggered whenever a 'body' is discovered or a meeting is called. During these high-pressure discussions, players must use logic, observation, and social cues to identify the traitors among them, while the Impostors use deception to shift the blame onto others. To keep the game fair and fun, strict rules of silence are enforced for 'ghosts' (eliminated players), and a central moderator often acts as the final judge. It’s a thrilling test of teamwork, survival, and your ability to spot a lie in real-time",
    Si: `• 1. The Moderator’s Word
    |&nbsp;*&nbsp; The "Ref" is Law: The Game Lead (Moderator) has the final say on all disputes. No appeals, no arguments. If a call is made, the game continues immediately.
    |&nbsp;*&nbsp; No Meta-Gaming: Do not use outside information (e.g., "I heard his shoes squeak in the kitchen"). Only discuss in-game actions.
    ||• 2. The Kill Protocol (The "Card" System)
    |&nbsp;*&nbsp; The Silent Kill: To eliminate a Crewmate, the Impostor must secretly show them a Red Kill Card.
    |&nbsp;*&nbsp; Zero Resistance: If you are shown the card, you are dead. You cannot run away or "dodge" it once the card is visible.
    |&nbsp;*&nbsp; The Ghost Vow: Once killed, you must sit or lay down exactly where you died. You are strictly forbidden from speaking, gesturing, or making noise until a body is reported.
    ||• 3. Reporting & Meetings
    |&nbsp;*&nbsp; Reporting a Body: To report a "dead" player, you must shout "BODY" loudly. All players must immediately stop moving and go to the designated Meeting Area.
    |&nbsp;*&nbsp; Emergency Meetings: Each player gets one Emergency Meeting button press per game. Use it wisely.
    |&nbsp;*&nbsp; Meeting Conduct: Only one person speaks at a time. Shouting over others results in an immediate skip of your vote.
    ||• 4. Voting & Ejection
    |&nbsp;*&nbsp; Evidence Required: You must provide a reason for your suspicion. "Just a vibe" is not enough to force an ejection.
    |&nbsp;*&nbsp; The Final Vote: On the count of three, everyone points at their suspect. The person with the most votes is ejected and becomes a Ghost.
    |&nbsp;*&nbsp; Tie Vote: In the event of a tie, no one is ejected, and the game resumes.
    ||• 5. Task Integrity
    |&nbsp;*&nbsp; Do Not Fake Tasks: Crewmates must actually complete their assigned tasks (e.g., sorting items, filling water).
    |&nbsp;*&nbsp; Ghost Tasks: Dead Crewmates must still complete their tasks to help the team win. They must do so in total silence.
    ||• 6. Safety & Boundaries
    |&nbsp;*&nbsp; No Physical Contact: No pushing, grabbing, or tackling. The game is won through stealth and logic, not athletics.
    |&nbsp;*&nbsp; Off-Limit Zones: Stay within the agreed boundaries. Entering a "Dead Zone" (like a bathroom) results in an automatic ejection. 
    `,
    gi: "N/A",
    Rfee: 100,
    pool: 3000,
  },

  {
    id: 7,
    TnL: "24th April 2026, 8:00 AM - 6:00 PM | Basement",
    Abt: `Step up, take aim, and feel the rush. Shooting, one of the most anticipated events at Sambhram, RVITM's flagship fest, puts you behind the sights of a 10-meter range and challenges you to find your focus under pressure. It doesn't matter if you've never held a gun before or if you're a seasoned marksman. This is your chance to test your nerves, sharpen your concentration, and discover what you're made of. Hosted by NCC RVITM and sponsored by Golden Ace Sports Shooting Academy, this event brings a professional setup designed for both safety and excitement, promising an experience that's equal parts intense and unforgettable.`,
    Si: `• Format: Each participant gets 10 shots and 10 minutes to complete all shots.
||• Scoring: Target sheets are scored out of 100 based on standard 10-meter air rifle scoring
rings. The score of each shot is determined by whichever ring the pellet lands on, and all
shots are cumulated for a final score. Participants are ranked on a live leaderboard based on
their cumulative score. The highest scorer wins.`,
    gi: `• Muzzle Discipline: Rifles must always be pointed downrange, at all times, no exceptions.
Loading Protocol: Participants must not load the rifle until explicitly commanded to do so by
the Range Officer.
|• Footwear: Closed footwear is mandatory on the range. Participants in open footwear will not
be permitted to shoot.
|• Safety Commands: All participants must follow range commands promptly and precisely.
Hesitation or non-compliance may result in disqualification.
|• Immediate Disqualification: Any breach of fundamental weapon safety — including
pointing the muzzle in an unsafe direction or loading without command — will result in
instant disqualification with no appeal.
|• Bystander Conduct: Spectators and accompanying individuals must remain behind the
designated safety line at all times. Interference may lead to the participant's disqualification.
|• Range Officer Authority: All decisions made by the Range Officer regarding safety, scoring,
and conduct are final and non-negotiable.`,
    Rfee: "200",
    pool: "2500",
  },

  {
    id: 9,
    TnL: "24 April 2026, 09:30 AM - 02:00 PM | MCA Seminar Hall",
    Abt: "Gear up for the ultimate BGMI showdown! Step into the battlegrounds where every move, shot, and strategy counts. This tournament isn’t just about survival—it’s about proving your dominance, outsmarting rivals, and leading your squad to glory. From clutch plays to nail-biting finishes, the adrenaline never stops. Do you have what it takes to rise above the rest and be crowned the true Finisher?",
    Si: `• Each team must have 4 players, including one team leader
responsible for coordination.|• The e-game shall be conducted in hybrid mode, allowing
participation both online and offline simultaneously.|• If we get less than 25 teams - 1 full room of teams - 4 matches
(Erangel -> Miramar -> Rondo -> Erangel)|• If we get more than 25 - split in 2 groups - 3 matches league stage -
Top 16 teams to finals of 4 matches
(Erangel -> Miramar -> Rondo) (league stage) (Erangel ->
Miramar -> Rondo -> Erangel) (finals)|• The top 8 teams with the highest cumulative points from both groups
will proceed to the finals.|• The team with the highest cumulative points after finals will be
declared the winner.|• The teams must enter the rooms on their designated team slot
provided by the organizers.|• Emulators, tablets, and iPads are not allowed. Only Android and
iOS phones are permitted.|• Teams must carry their own required equipment (power banks,
chargers, etc.)|• Screenshot Submission: After completing each match, teams must
share a screenshot of the total score with the coordinator||| PointSystem: |&nbsp;*&nbsp; 1st Place -> 10 points
|&nbsp;*&nbsp; 2nd Place-> 6 points
|&nbsp;*&nbsp; 3rd Place-> 5 points
|&nbsp;*&nbsp; 4th Place-> 4 points
|&nbsp;*&nbsp; 5th Place-> 3 points
|&nbsp;*&nbsp; 6th Place-> 2 points
|&nbsp;*&nbsp; 7th Place-> 1 point

|&nbsp;*&nbsp; 8th Place-> 1 point
|&nbsp;*&nbsp; 9th Place-> 0 points
|&nbsp;*&nbsp; Each kill =1 point`,
    gi: "• Check-In: Teams must check in at the venue 15 minutes before the event.|• Registration details will be verified.|• Standard rules apply.|• Scoring: Points will be awarded based on placement and kills.|• Final rankings will be decided on cumulative points.|• Tiebreakers: | 1.The team with more Chicken Dinners ranks higher. | 2.If still tied, the team with more placement points ranks higher. | 3.If still tied, a Team Deathmatch will decide the winner.",
    Rfee: 400,
    pool: 4000,
  },

  {
    id: 2,
    TnL:"24 April 2026, 2:00 PM - 3:30 PM | Auditorium",
    Abt: "Step into a world of tradition and grace as skilled dancers bring the rich legacy of Indian classical dance to life. From the precise footwork of Bharatanatyam to the rhythmic spins of Kathak and the expressive storytelling of Odissi, each performance will transport you through centuries of cultural heritage. Witness the elegance of flowing movements, intricate hand gestures, and captivating expressions, all set to the soulful rhythms of classical music. Let the beauty and depth of India’s classical dance forms leave you mesmerised — and if you have the skill and passion, this is your chance to take the stage and shine.",
    Si: `• Upto 1 accompanist allowed.
|• Songs must be in MP3 format and uploaded to a designated Google Drive folder at least 2 days before the event. The folder link will be shared after registration.
|• Duration: Maximum of 6 minutes allowed:
| &nbsp;*&nbsp; 5 minutes – Performance
| &nbsp;*&nbsp; 1 minute – Set up and clearance time
|• Performance must be based on any of the 7 Classical Indian Dance Forms:
| &nbsp;*&nbsp; Bharatanatyam
| &nbsp;*&nbsp; Kathak
| &nbsp;*&nbsp; Kuchipudi
| &nbsp;*&nbsp; Kathakali
| &nbsp;*&nbsp; Mohiniattam
| &nbsp;*&nbsp; Manipuri
| &nbsp;*&nbsp; Odissi
|• Use of movie songs is strictly prohibited.
    `,
    gi: "• Decision of the judges will be final and binding.|• Participants are requested to report 1 hour before the commencement of the event.|• No refunds will be given under any circumstance. ",
    Rfee: 200,
    pool: 2500,
  },

  {
    id: 22,
    TnL: "23 April 2026, 3:00 PM - 5:00 PM | Drawing Room",
    Abt: `Get ready to splash your creativity across the canvas of faces! Our Face Painting event invites participants to bring imagination to life through color, expression, and artistry. Whether you're transforming yourself or a partner into something magical, bold, or wildly unique, this event celebrates originality and pure artistic flair. 
Step into a vibrant space where creativity meets skill, and every stroke tells a story. With no references allowed, this competition encourages free-hand design, pushing artists to rely on their talent, instinct, and innovative thinking. Join us for a fun-filled and visually stunning event that promises a burst of colors, creativity, and excitement. Mark your calendars and be part of this lively artistic experience! 
`,
    Si: `• Time Limit: 120 mins. 
|• Participants must bring all their own products and painting materials. 
|• Painting can be done either on themselves or on a partner. Editing allowed for basic adjustments only. 
|• Judging will be based on originality, uniqueness, neatness, and creativity. 
|• No reference images or videos are allowed during the event. 
|• No assistance will be provided by coordinators or outsiders during the process. 
|• Only free-hand painting is permitted; stencils or templates are not allowed.
||• PARTICIPANT REQUIREMENTS: 
| &nbsp;*&nbsp; Participants may compete individually or with a partner (as their model). 
| &nbsp;*&nbsp; All participants must carry their own makeup/painting items and tools—none will be provided at the venue. 
| &nbsp;*&nbsp; Participants must be physically present; no remote participation is allowed. 
| &nbsp;*&nbsp; Each participant is responsible for ensuring their materials are safe for skin use. 
`,
    gi: `• Decision of the judges will be final and binding. 
|• Participants are requested to report 30 mins before the event begins. 
|• No refunds will be provided under any circumstances. 
|• Any form of misconduct, external help, or use of references will lead to disqualification. `,
    Rfee: 100,
    pool: 1000,
  },

  {
    id: 24,
    TnL: "23 April 2026, 1:00 PM - 3:00 PM | Auditorium",
    Abt: `Step into the spotlight where attitude speaks louder than words and every step becomes a statement. Rhythm Runway is your chance to showcase creativity, coordination, and unmatched stage presence. Form your team. Design your theme. Walk with purpose. From bold street swagger to royal elegance, this stage is yours to express, impress, and dominate.`,
    Si: `• The Performance duration is 8 minutes, with a 2 minute grace period.
|• All outfits must be stylish, elegant, and appropriate for a public
audience.
|• Participants must maintain professionalism, any form of discrimination,
offensive behaviour, or disrespect will lead to disqualification.
|• Hazardous props such as sharp objects,flammable materials, or any
item that could cause injury are strictly prohibited.
|• Each team must consist of students from the same college, with a
team size between 6 to 12 members.
|• Teams must register before the deadline to be eligible for
participation.
|• Music tracks for the runway walk must be submitted to the
organisers atleast two days before the event.
|• Each team is responsible for arranging their own costumes, props 
and accessories.
|• Participants must strictly follow the given time limits for their runway walks.
|• Lighting Requirements for the runway walk must be submitted
 in PDF form to the organisers at least two days before the
event.`,
    gi: `• The decision of the judges will be final and binding.
|• Participants must report 3 hours before the event starts and must be
ready 1 hour before their performance. Latecomers may not be allowed
to participate.
|• No refunds will be given under any circumstances.`,
    Rfee: 1500,
    pool: 9000,
  },

  {
    id: 6,
    TnL: "23 April 2026, 12:30 PM - 2:30 PM | Drawing room",
    Abt: `Step into the arena where appetite meets the clock. The Hog-a-
thon is a high-intensity, solo-survival eating challenge designed

for those with nerves of steel and an iron stomach. In this race
against time, individuals must conquer a series of food-based
"boss levels" to prove they have the speed, strategy, and capacity
to be crowned the Ultimate Glutton.`,
    gi: `• Players must report to the venue at least 25–30 minutes
before their assigned time slot.
|• Listen carefully to the briefing instructions before
entering the room.
|• Do not interfere in another participant’s gameplay.
|• Any form of cheating or rule violation will result in
immediate disqualification.`,
    Si: `• Absolute Compliance:
All instructions from the Frontman and the Kitchen Guards are
final. The signal to start must be obeyed instantly, and any eating
before the whistle or after the timer stops will result in instant
elimination.
||• Solo Performance:
This is a test of individual capacity. No physical contact or
"sharing" of food is permitted. Any attempt to distract an
opponent or sabotage their tray will lead to immediate
disqualification of both parties.

||• No External Tools:

The use of personal utensils, outside beverages, or performance-
enhancing "tools" (such as private water bottles or smartwatches

to track pace) is strictly prohibited. You may only use what is
provided at your station.
||• Elimination (The "Clean Plate" Rule):
A player is "eliminated" if they fail to finish their portion within
the allotted time or if they violate the Rejection Protocol
(vomiting or inability to keep food down). Once eliminated, the
player must leave the table immediately—their journey to the
Final Feast ends there.
||• The "Mouth Empty" Check:
A round is only considered complete once a player raises their
hand and demonstrates an empty mouth to a Guard. Swallowing
must be visible and verified before the clock is officially stopped
for that individual.`,
    Rfee: 200,
    pool: 2000, 
  },

  {
    id: 23,
    TnL: "24 April 2026, 12:30 PM - 2:30 PM | 1St Floor Seminar Hall",
    Abt: `Attention, college dreamers and daring minds! Step into the spell of Chaos & Cue,
our improv spectacle where wit meets spontaneity. Gather your crew and dive into
an evening of unscripted laughter and vibrant scenes, as teams craft comedy from
the unexpected. From quirky characters to unpredictable twists, every moment
brims with magic, mischief, and creativity. Don’t just watch, be the spark that
ignites it. Save the date and let the stage discover you!`,
    Si: `• Team Requirements:
    | &nbsp;*&nbsp; Each team must consist of 2-4 participants.
| &nbsp;*&nbsp; A team leader must be designated for each team. The team leader will
serve as the point of contact for communication between the organising
committee and the team.
| &nbsp;*&nbsp; All team members are required to be present at the venue; remote
participation is not permitted.
  ||• Specific Instructions:
  | &nbsp;*&nbsp; Time Limit: 5 minutes performance + 5 minutes preparation time
| &nbsp;*&nbsp; No tech requirements are allowed.
| &nbsp;*&nbsp; No props are allowed.
| &nbsp;*&nbsp; Act can be presented in Hindi, English and Kannada.`,
    gi: `• Decision of the judges will be final and binding.
    |• Participants are requested to report 1 hour before the
commencement of the event.
|• No refunds will be given under any circumstance.`,
    Rfee: 200,
    pool: 3000,
  },

  {
    id: 16,
    TnL: "24 April 2026, 12:30 PM - 2:30 PM | 6th Floor Seminar Hall",
    Abt: `Experience the raw power of sound at our premier instrumental solo showcase, a
vibrant stage where percussion powerhouses and melodic maestros collide in a
brilliant display ofskill. This event redefines the listening experience by weaving a
rich tapestry of Western innovation and Indian heritage, blending hypnotic
traditional rhythms with soaring modern harmonies. Every performance is a
masterclass in global fusion, stripping away the lyricsto let the universal language
of pure music take centre stage. From the earth-shaking energy of the drums to the
delicate, haunting resonance of the strings, prepare for a transcendent auditory
journey that celebrates technical mastery and the unfiltered soul of the artist.`,
    Si: `• Time Limit: 5 + 1 minutes(inclusive of setup, soundcheck, and clearance).
|• A participant may only register once per category.
|• Backing track (if needed) must be uploaded in a Google Drive provided by the
organisers before the event
|• Participants are responsible forstaying in contact with the organisers.
|• The competition will be held in one round only.
|• Participants must bring their instruments.
|• Participants are responsible for their instruments.
|• For any special technical requirements, participants may contact the event
coordinators.`,
    gi: `• The decision of the judges will be final and binding.
|• Participants must report 1 hour before the eventstarts. Latecomers may not be
allowed to participate.
|• No refunds will be given under any circumstances.`,
    Rfee: 200,
    pool: 2500,
  },

  {
    id: 17,
    TnL: "23 April 2026, 9:00 PM - 6:00 AM | Auditorium",
    Abt: `Welcome to Midnight Verdict 2026 – the overnight murder mystery event where nothing is as it seems.
Step into a world of secrets, suspense, and unexpected betrayals as you take on the role of a detective in this high-stakes investigation. Your mission? Unravel a chilling mystery, piece together cryptic clues, interrogate elusive suspects, and expose the murderer—before it’s too late.
With mind-bending twists, a spine-chilling atmosphere, and a race against time, Midnight Verdict 2026 is not just an event—it’s an experience. Every clue matters. Every decision shapes the outcome.
Trust no one. Question everything.
Are you ready to test your instincts, outsmart the killer, and crack the case before dawn? Assemble your team and step into the unknown. Because in this game, the truth won’t reveal itself—you have to hunt it down.
One Night. One Mystery. One Killer.
Do you have what it takes?`,
    Si: `• Participants must treat all other attendees, event staff, and actors respectfully and courteously. Any form of harassment, discrimination, or inappropriate behaviour will not be tolerated and may result in immediate removal from the event.
    |• Teams must rely solely on their skills and resources to solve the mystery. No outside assistance, including electronic devices or communication with individuals not participating in the event, is permitted.
|• Participants must follow all instructions provided by the event organisers and staff. Failure to comply may result in disqualification or expulsion from the event.
|• Participants must prioritise their safety and the safety of others at all times. Running, pushing, or engaging in any other unsafe behavior is strictly prohibited.
|• Participants must handle all evidence and props provided with care. Tampering with or damaging evidence will result in penalties and may hinder the progress of the investigation.
|• Teams will have a set amount of time to solve the mystery. The event will conclude at a predetermined time, and teams must submit their conclusions before the deadline.
|• Participants must engage in fair play and refrain from cheating or engaging in any form of dishonesty. Any team found to be cheating will be disqualified from the event.
|• Dinner will be provided for all participants.`,
    gi: `• The decision of the judges will be final and binding.
|• Participants must report 2 hours before the event starts. Latecomers may not be allowed to participate.
|• No refunds will be given under any circumstances.
`,
    Rfee: 600,
    pool: 5000
  },

  {
    id: 18,
    TnL: "23 - 24 April 2026, FULL DAY | RVITM",
    Abt: `Step into Reflections, where every photograph becomes a mirror to your
imagination. This event invites participants to explore the beauty of symmetry,
light, perspective, and emotion through a single frame. From shimmering surfaces
to everyday moments that reflect deeper meaning, your image should tell a story
beyond what the eye sees.
Your challenge is to capture a moment within the event time window that truly
reflects your unique vision. Do you have what it takes to turn a simple reflection
into art? Join us and let your lens speak.`,
    Si: `• Each participantsubmits 5 campus photos.
|• Photos must be taken on campus within a specified time frame.
|• Theme will be revealed at the beginning of the event. All photos must
adhere to the theme.
|• Editing allowed for basic adjustments only.
|• Heavy manipulation leads to disqualification.
|• Participants must bring their own camera equipment.
|• No specific camera type or brand isrequired.
|• Submissions must be in digital format and should be submitted before
the designated deadline.`,
    gi: `• The decision ofthe judges will be final and binding.
|• Participants mustreport 1 hour before the eventstarts. Latecomers may not be
allowed to participate.
|• No refunds will be given under any circumstances.`,
    Rfee: 100,
    pool: 2000
  },

  {
    id: 10,
    TnL: "24 April 2026, 12:30 PM - 2:30 PM | Drawing Room",
    Abt: `The Roast Battle is a fast-paced verbal showdown where participants go head-to-head in a
clash of wit, humor, and fearless comebacks. Celebrating quick thinking and sharp delivery,
this event turns playful insults into pure entertainment. With every round, contestants aim to
win over the crowd with their creativity, confidence, and unforgettable punchlines—blurring
the line between savage humor and comedic brilliance.`,
    Si: `The following rules and guidelines are established to ensure that the roast battle event
remains entertaining, respectful, and enjoyable for all participants and the audience:
|• Maintain Humor and Respect
All remarks should be intended for humor and entertainment. Participants must avoid
comments that are genuinely offensive, harmful, or insulting.
|• Avoid Sensitive Topics
Roasts must not include references to sensitive subjects such as religion, race,
caste, disabilities, personal trauma, or family issues.
|• Participation by Consent Only
Only individuals who have willingly agreed to participate may be included in the roast
battle.
|• Adhere to Time Limits
Each participant must strictly follow the allotted time to ensure fairness and smooth
conduct of the event.
|• No Physical or Threatening Behavior
The roast battle is strictly a verbal activity. Any form of physical aggression,
intimidation, or threatening behavior is prohibited.
|• Respect Personal Boundaries
Participants must be mindful of others’ comfort levels. If any remark causes
discomfort, it should not be continued.
|• Original Content Only
All jokes and material presented should be original. Plagiarism or use of copied
content is discouraged.
|• Zero Tolerance for Hate Speech
Any form of abusive, discriminatory, or hateful language will result in immediate
disqualification.
|• Display Sportsmanship
Participants are expected to maintain professionalism and end the battle on a
positive note, demonstrating mutual respect.
|||Judging Criteria:
|• Comebacks & Presence of Mind
|Quick thinking and spontaneous responses
|Sharp, witty, and impactful comebacks
||•Bonus & Penalty System
|Bonus points for exceptional humor and standout moments
|Points may be deducted for rule violations or inappropriate content
||•Judges’ Weightage
|Judges’ scores carry more weight than audience voting
|Final decision is primarily based on judges’ evaluation `,
    gi: `N/A`,
    Rfee: 150,
    pool: 1500,
  },

  {
    id: 8,
    TnL: "23rd April 2026, 12:30 PM - 3:00 PM | Boy's Common Room",
    Abt: `Step into a world where stories come alive and puzzles guard the way forward.
The Literary Escape Room is an immersive challenge that blends literature,
logic, and teamwork. Teams will decode clues, unravel narratves, and solve
book-inspired mysteries to “escape” within the given time.
||
This event celebrates creativity, critical thinking, and a love for literature—
testing not just what you know, but how you think. With the seconds counting
down, will you find the missing ink before the final page is closed forever?
Participate to find out!`,
    Si: `• Participants must compete in teams (2–4 members per team).
|• Each team will be placed in a themed escape room based on literary
works, authors, or genres.
|• The time limit per team is five minutes.
|• Clues may involve:
| &nbsp;*&nbsp; Riddles based on famous books/quotes
| &nbsp;*&nbsp; Word puzzles, anagrams, or codes
| &nbsp;*&nbsp; Logical reasoning linked to literary themes

|• Mobile phones, books, or any form of external assistance are strictly
prohibited.
|• All clues and objects in the room must be handled carefully—no forceful
actions (breaking, tearing, etc.).
|• The team that solves the mystery and escapes in the shortest time with
the correct solution will be declared the winner. All participants must
follow the rules set by the Organising Commitiee, and any violations may
lead to penalties or disqualification.`,
    gi: `|• Teams must report to the venue 2 hours before the event starts.
|• Listen carefully to the briefing instructions before entering the room.
|• Respect the setup—this is a logic-based game, not a physical challenge.
|• Do not interfere with another team’s gameplay.
|• Any form of cheating or rule violation will result in immediate
disqualification.
|• No refunds will be given under any circumstances.`,
    Rfee: 300,
    pool: 3000,
  },



];

var grid = document.getElementById("grid");
var empty = document.getElementById("empty");
var searchInput = document.getElementById("searchInput");

let currentDay = ""; 

function setDayFilter(day) {
    currentDay = day;
    render(searchInput.value); 
}

function render(filter) {
    var q = (filter || "").toLowerCase();

    var results = cards.filter(function (c) {
        const details = popDesc.find((p) => p.id === c.id);
        const tnlText = details ? details.TnL : "";

        const matchesSearch = c.name.toLowerCase().indexOf(q) !== -1 || 
                              c.info.toLowerCase().indexOf(q) !== -1;

        const matchesDay = currentDay === "" || tnlText.trim().startsWith(currentDay);

        return matchesSearch && matchesDay;
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
    const location = details.TnL.split("|")[1].trim();

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
                <p>${details.Abt.replaceAll("|", "<br>")}</p>
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
                <span><strong>Venue: ${location} </strong></span> <br><br>
                <span><strong>Reg Fee:</strong> ₹${details.Rfee}</span> <br>
                <span><strong>Prize Pool:</strong> ₹${details.pool}</span>
            </div>


            <a href="https://forms.gle/hKYmQgkSmRmXC92r5"><div class="button">Register for Events</div></a>
        `;
  } else {
    console.error("Data not found for ID:", id);
  }
}
