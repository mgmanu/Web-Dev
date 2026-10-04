
/* =========================================================
   STADIUMX - IPL TICKET BOOKING
   FINAL FRONTEND JAVASCRIPT
   ========================================================= */

/* =========================================================
   IPL TEAMS
   ========================================================= */

const teams = {
    CSK: {
        name: "Chennai Super Kings",
        shortName: "CSK",
        logo: "assets/teams/csk.png",
        color: "#f9c900"
    },

    DC: {
        name: "Delhi Capitals",
        shortName: "DC",
        logo: "assets/teams/dc.png",
        color: "#17479e"
    },

    GT: {
        name: "Gujarat Titans",
        shortName: "GT",
        logo: "assets/teams/gt.png",
        color: "#1c2c5b"
    },

    KKR: {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        logo: "assets/teams/kkr.png",
        color: "#3a225d"
    },

    LSG: {
        name: "Lucknow Super Giants",
        shortName: "LSG",
        logo: "assets/teams/lsg.png",
        color: "#00a1e0"
    },

    MI: {
        name: "Mumbai Indians",
        shortName: "MI",
        logo: "assets/teams/mi.png",
        color: "#004ba0"
    },

    PBKS: {
        name: "Punjab Kings",
        shortName: "PBKS",
        logo: "assets/teams/pbks.png",
        color: "#ed1b24"
    },

    RR: {
        name: "Rajasthan Royals",
        shortName: "RR",
        logo: "assets/teams/rr.png",
        color: "#ea1a85"
    },

    RCB: {
        name: "Royal Challengers Bengaluru",
        shortName: "RCB",
        logo: "assets/teams/rcb.png",
        color: "#d71920"
    },

    SRH: {
        name: "Sunrisers Hyderabad",
        shortName: "SRH",
        logo: "assets/teams/srh.png",
        color: "#f26522"
    }
};


/* =========================================================
   MATCH DATA
   ========================================================= */

const matches = [
    {
        id: 1,
        home: "RCB",
        away: "SRH",
        date: "2026-03-28",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 2,
        home: "CSK",
        away: "KKR",
        date: "2026-03-29",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 3,
        home: "MI",
        away: "DC",
        date: "2026-03-30",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },
    {
        id: 4,
        home: "PBKS",
        away: "GT",
        date: "2026-03-31",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    },
    {
        id: 5,
        home: "RR",
        away: "LSG",
        date: "2026-04-01",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 6,
        home: "SRH",
        away: "MI",
        date: "2026-04-02",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 7,
        home: "RCB",
        away: "CSK",
        date: "2026-04-03",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 8,
        home: "KKR",
        away: "RR",
        date: "2026-04-04",
        time: "7:30 PM",
        venue: "Eden Gardens",
        city: "Kolkata"
    },
    {
        id: 9,
        home: "GT",
        away: "DC",
        date: "2026-04-05",
        time: "7:30 PM",
        venue: "Narendra Modi Stadium",
        city: "Ahmedabad"
    },
    {
        id: 10,
        home: "LSG",
        away: "PBKS",
        date: "2026-04-06",
        time: "7:30 PM",
        venue: "BRSABVE Cricket Stadium",
        city: "Lucknow"
    },

    {
        id: 11,
        home: "MI",
        away: "RCB",
        date: "2026-04-07",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },
    {
        id: 12,
        home: "CSK",
        away: "SRH",
        date: "2026-04-08",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 13,
        home: "DC",
        away: "KKR",
        date: "2026-04-09",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },
    {
        id: 14,
        home: "GT",
        away: "RR",
        date: "2026-04-10",
        time: "7:30 PM",
        venue: "Narendra Modi Stadium",
        city: "Ahmedabad"
    },
    {
        id: 15,
        home: "PBKS",
        away: "MI",
        date: "2026-04-11",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    },
    {
        id: 16,
        home: "LSG",
        away: "RCB",
        date: "2026-04-12",
        time: "7:30 PM",
        venue: "BRSABVE Cricket Stadium",
        city: "Lucknow"
    },
    {
        id: 17,
        home: "SRH",
        away: "KKR",
        date: "2026-04-13",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 18,
        home: "CSK",
        away: "GT",
        date: "2026-04-14",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 19,
        home: "RR",
        away: "DC",
        date: "2026-04-15",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 20,
        home: "MI",
        away: "LSG",
        date: "2026-04-16",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },

    {
        id: 21,
        home: "RCB",
        away: "GT",
        date: "2026-04-17",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 22,
        home: "PBKS",
        away: "KKR",
        date: "2026-04-18",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    },
    {
        id: 23,
        home: "SRH",
        away: "RR",
        date: "2026-04-19",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 24,
        home: "DC",
        away: "CSK",
        date: "2026-04-20",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },
    {
        id: 25,
        home: "LSG",
        away: "MI",
        date: "2026-04-21",
        time: "7:30 PM",
        venue: "BRSABVE Cricket Stadium",
        city: "Lucknow"
    },
    {
        id: 26,
        home: "KKR",
        away: "RCB",
        date: "2026-04-22",
        time: "7:30 PM",
        venue: "Eden Gardens",
        city: "Kolkata"
    },
    {
        id: 27,
        home: "GT",
        away: "PBKS",
        date: "2026-04-23",
        time: "7:30 PM",
        venue: "Narendra Modi Stadium",
        city: "Ahmedabad"
    },
    {
        id: 28,
        home: "RR",
        away: "CSK",
        date: "2026-04-24",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 29,
        home: "DC",
        away: "LSG",
        date: "2026-04-25",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },
    {
        id: 30,
        home: "MI",
        away: "SRH",
        date: "2026-04-26",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },

    {
        id: 31,
        home: "RCB",
        away: "PBKS",
        date: "2026-04-27",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 32,
        home: "CSK",
        away: "LSG",
        date: "2026-04-28",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 33,
        home: "KKR",
        away: "GT",
        date: "2026-04-29",
        time: "7:30 PM",
        venue: "Eden Gardens",
        city: "Kolkata"
    },
    {
        id: 34,
        home: "RR",
        away: "MI",
        date: "2026-04-30",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 35,
        home: "SRH",
        away: "DC",
        date: "2026-05-01",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 36,
        home: "PBKS",
        away: "CSK",
        date: "2026-05-02",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    },
    {
        id: 37,
        home: "GT",
        away: "LSG",
        date: "2026-05-03",
        time: "7:30 PM",
        venue: "Narendra Modi Stadium",
        city: "Ahmedabad"
    },
    {
        id: 38,
        home: "RCB",
        away: "RR",
        date: "2026-05-04",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 39,
        home: "KKR",
        away: "MI",
        date: "2026-05-05",
        time: "7:30 PM",
        venue: "Eden Gardens",
        city: "Kolkata"
    },
    {
        id: 40,
        home: "DC",
        away: "PBKS",
        date: "2026-05-06",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },

    {
        id: 41,
        home: "CSK",
        away: "MI",
        date: "2026-05-07",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 42,
        home: "SRH",
        away: "GT",
        date: "2026-05-08",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 43,
        home: "LSG",
        away: "KKR",
        date: "2026-05-09",
        time: "7:30 PM",
        venue: "BRSABVE Cricket Stadium",
        city: "Lucknow"
    },
    {
        id: 44,
        home: "RR",
        away: "PBKS",
        date: "2026-05-10",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 45,
        home: "RCB",
        away: "DC",
        date: "2026-05-11",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 46,
        home: "MI",
        away: "GT",
        date: "2026-05-12",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },
    {
        id: 47,
        home: "CSK",
        away: "RR",
        date: "2026-05-13",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 48,
        home: "PBKS",
        away: "SRH",
        date: "2026-05-14",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    },
    {
        id: 49,
        home: "KKR",
        away: "DC",
        date: "2026-05-15",
        time: "7:30 PM",
        venue: "Eden Gardens",
        city: "Kolkata"
    },
    {
        id: 50,
        home: "LSG",
        away: "GT",
        date: "2026-05-16",
        time: "7:30 PM",
        venue: "BRSABVE Cricket Stadium",
        city: "Lucknow"
    },

    {
        id: 51,
        home: "SRH",
        away: "RCB",
        date: "2026-05-17",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 52,
        home: "DC",
        away: "RR",
        date: "2026-05-18",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },
    {
        id: 53,
        home: "GT",
        away: "CSK",
        date: "2026-05-19",
        time: "7:30 PM",
        venue: "Narendra Modi Stadium",
        city: "Ahmedabad"
    },
    {
        id: 54,
        home: "MI",
        away: "PBKS",
        date: "2026-05-20",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },
    {
        id: 55,
        home: "RCB",
        away: "KKR",
        date: "2026-05-21",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 56,
        home: "RR",
        away: "SRH",
        date: "2026-05-22",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 57,
        home: "LSG",
        away: "CSK",
        date: "2026-05-23",
        time: "7:30 PM",
        venue: "BRSABVE Cricket Stadium",
        city: "Lucknow"
    },
    {
        id: 58,
        home: "PBKS",
        away: "RCB",
        date: "2026-05-24",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    },
    {
        id: 59,
        home: "DC",
        away: "MI",
        date: "2026-05-25",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },
    {
        id: 60,
        home: "GT",
        away: "KKR",
        date: "2026-05-26",
        time: "7:30 PM",
        venue: "Narendra Modi Stadium",
        city: "Ahmedabad"
    },

    {
        id: 61,
        home: "SRH",
        away: "LSG",
        date: "2026-05-27",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 62,
        home: "CSK",
        away: "PBKS",
        date: "2026-05-28",
        time: "7:30 PM",
        venue: "MA Chidambaram Stadium",
        city: "Chennai"
    },
    {
        id: 63,
        home: "MI",
        away: "RR",
        date: "2026-05-29",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },
    {
        id: 64,
        home: "RCB",
        away: "LSG",
        date: "2026-05-30",
        time: "7:30 PM",
        venue: "M. Chinnaswamy Stadium",
        city: "Bengaluru"
    },
    {
        id: 65,
        home: "KKR",
        away: "PBKS",
        date: "2026-05-31",
        time: "7:30 PM",
        venue: "Eden Gardens",
        city: "Kolkata"
    },
    {
        id: 66,
        home: "DC",
        away: "GT",
        date: "2026-06-01",
        time: "7:30 PM",
        venue: "Arun Jaitley Stadium",
        city: "Delhi"
    },
    {
        id: 67,
        home: "RR",
        away: "LSG",
        date: "2026-06-02",
        time: "7:30 PM",
        venue: "Sawai Mansingh Stadium",
        city: "Jaipur"
    },
    {
        id: 68,
        home: "SRH",
        away: "CSK",
        date: "2026-06-03",
        time: "7:30 PM",
        venue: "Rajiv Gandhi International Stadium",
        city: "Hyderabad"
    },
    {
        id: 69,
        home: "MI",
        away: "KKR",
        date: "2026-06-04",
        time: "7:30 PM",
        venue: "Wankhede Stadium",
        city: "Mumbai"
    },
    {
        id: 70,
        home: "PBKS",
        away: "DC",
        date: "2026-06-05",
        time: "7:30 PM",
        venue: "PCA Stadium",
        city: "Mohali"
    }
];


/* =========================================================
   STAND PRICES
   ========================================================= */

const standPrices = {
    General: 500,
    Premium: 1000,
    VIP: 2000,
    Corporate: 3500
};

const standDescriptions = {
    General: "Comfortable seating with a great view of the action.",
    Premium: "Premium seating with enhanced stadium visibility.",
    VIP: "Exclusive VIP seating with premium match-day experience.",
    Corporate: "Luxury corporate seating for an elevated experience."
};


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let selectedMatchId = null;
let visibleMatches = 12;

let currentFilters = {
    team: "",
    venue: "",
    date: "",
    search: ""
};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const teamsGrid = document.getElementById("teamsGrid");
const matchesGrid = document.getElementById("matchesGrid");

const teamFilter = document.getElementById("teamFilter");
const venueFilter = document.getElementById("venueFilter");
const dateFilter = document.getElementById("dateFilter");
const matchSearch = document.getElementById("matchSearch");

const matchCount = document.getElementById("matchCount");
const noMatches = document.getElementById("noMatches");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const clearFilters = document.getElementById("clearFilters");

const bookingForm = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const matchSelect = document.getElementById("match");
const matchDate = document.getElementById("matchDate");
const matchTime = document.getElementById("matchTime");
const matchVenue = document.getElementById("matchVenue");

const standSelect = document.getElementById("stand");

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const quantityInput = document.getElementById("quantity");

const standTitle = document.getElementById("standTitle");
const standDescription = document.getElementById("standDescription");

const summaryMatch = document.getElementById("summaryMatch");
const summaryHomeTeam = document.getElementById("summaryHomeTeam");
const summaryAwayTeam = document.getElementById("summaryAwayTeam");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");

const ticketPrice = document.getElementById("ticketPrice");
const discount = document.getElementById("discount");
const totalAmount = document.getElementById("totalAmount");

const successMessage = document.getElementById("successMessage");

const matchFilter = document.getElementById("matchFilter");
const standFilter = document.getElementById("standFilter");
const bookingTableBody = document.getElementById("bookingTableBody");
const emptyBookings = document.getElementById("emptyBookings");


/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */

function formatDate(dateString) {
    if (!dateString) return "-";

    const date = new Date(`${dateString}T00:00:00`);

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


function formatCurrency(amount) {
    return `₹${Number(amount).toLocaleString("en-IN")}`;
}


function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value ?? "";
    return div.innerHTML;
}


/* =========================================================
   TEAM SECTION
   ========================================================= */

function renderTeams() {
    if (!teamsGrid) return;

    teamsGrid.innerHTML = "";

    Object.entries(teams).forEach(([code, team]) => {
        const card = document.createElement("div");

        card.className = "team-card";

        card.innerHTML = `
            <div class="team-logo-wrapper">
                <img
                    src="${team.logo}"
                    alt="${escapeHTML(team.name)} logo"
                    class="team-logo"
                    onerror="this.style.display='none'"
                >
            </div>

            <h3>${escapeHTML(team.name)}</h3>

            <span>${escapeHTML(code)}</span>
        `;

        card.addEventListener("click", () => {
            currentFilters.team = code;

            if (teamFilter) {
                teamFilter.value = code;
            }

            visibleMatches = 12;

            renderMatches();

            const scheduleSection = document.getElementById("schedule");

            if (scheduleSection) {
                scheduleSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

        teamsGrid.appendChild(card);
    });
}


/* =========================================================
   MATCH DROPDOWN
   ========================================================= */

function populateMatchDropdown() {
    if (!matchSelect) return;

    matchSelect.innerHTML = `
        <option value="">Select a match</option>
    `;

    matches.forEach(match => {
        const option = document.createElement("option");

        option.value = match.id;

        option.textContent =
            `${teams[match.home].shortName} vs ${teams[match.away].shortName} - ${formatDate(match.date)}`;

        matchSelect.appendChild(option);
    });
}


/* =========================================================
   TEAM FILTER
   ========================================================= */

function populateTeamFilter() {
    if (!teamFilter) return;

    teamFilter.innerHTML = `
        <option value="">All Teams</option>
    `;

    Object.entries(teams).forEach(([code, team]) => {
        const option = document.createElement("option");

        option.value = code;
        option.textContent = team.name;

        teamFilter.appendChild(option);
    });
}


/* =========================================================
   VENUE FILTER
   ========================================================= */

function populateVenueFilter() {
    if (!venueFilter) return;

    const venues = [
        ...new Set(matches.map(match => match.venue))
    ].sort();

    venueFilter.innerHTML = `
        <option value="">All Venues</option>
    `;

    venues.forEach(venue => {
        const option = document.createElement("option");

        option.value = venue;
        option.textContent = venue;

        venueFilter.appendChild(option);
    });
}


/* =========================================================
   MATCH CARDS
   ========================================================= */

function createMatchCard(match) {
    const homeTeam = teams[match.home];
    const awayTeam = teams[match.away];

    const card = document.createElement("article");

    card.className = "match-card";

    card.innerHTML = `
        <div class="match-card-top">
            <span class="match-date">
                ${formatDate(match.date)}
            </span>

            <span class="match-time">
                ${escapeHTML(match.time)}
            </span>
        </div>

        <div class="match-teams">

            <div class="match-team">
                <div class="match-team-logo">
                    <img
                        src="${homeTeam.logo}"
                        alt="${escapeHTML(homeTeam.name)} logo"
                        onerror="this.style.display='none'"
                    >
                </div>

                <strong>${escapeHTML(homeTeam.shortName)}</strong>

                <small>
                    ${escapeHTML(homeTeam.name)}
                </small>
            </div>

            <div class="match-vs">
                VS
            </div>

            <div class="match-team">
                <div class="match-team-logo">
                    <img
                        src="${awayTeam.logo}"
                        alt="${escapeHTML(awayTeam.name)} logo"
                        onerror="this.style.display='none'"
                    >
                </div>

                <strong>${escapeHTML(awayTeam.shortName)}</strong>

                <small>
                    ${escapeHTML(awayTeam.name)}
                </small>
            </div>

        </div>

        <div class="match-location">
            <span>${escapeHTML(match.venue)}</span>
            <span>${escapeHTML(match.city)}</span>
        </div>

        <button
            type="button"
            class="btn btn-primary match-book-btn"
            data-match-id="${match.id}"
        >
            Book Tickets
        </button>
    `;

    const bookButton = card.querySelector(".match-book-btn");

    bookButton.addEventListener("click", () => {
        selectMatch(match.id);
    });

    return card;
}


/* =========================================================
   MATCH FILTERING
   ========================================================= */

function getFilteredMatches() {
    return matches.filter(match => {

        const teamMatches =
            !currentFilters.team ||
            match.home === currentFilters.team ||
            match.away === currentFilters.team;

        const venueMatches =
            !currentFilters.venue ||
            match.venue === currentFilters.venue;

        const dateMatches =
            !currentFilters.date ||
            match.date === currentFilters.date;

        const searchText =
            currentFilters.search.toLowerCase().trim();

        const searchMatches =
            !searchText ||
            teams[match.home].name.toLowerCase().includes(searchText) ||
            teams[match.away].name.toLowerCase().includes(searchText) ||
            match.home.toLowerCase().includes(searchText) ||
            match.away.toLowerCase().includes(searchText) ||
            match.venue.toLowerCase().includes(searchText) ||
            match.city.toLowerCase().includes(searchText);

        return (
            teamMatches &&
            venueMatches &&
            dateMatches &&
            searchMatches
        );
    });
}


/* =========================================================
   RENDER MATCHES
   ========================================================= */

function renderMatches() {
    if (!matchesGrid) return;

    const filteredMatches = getFilteredMatches();

    matchesGrid.innerHTML = "";

    const matchesToShow =
        filteredMatches.slice(0, visibleMatches);

    matchesToShow.forEach(match => {
        matchesGrid.appendChild(
            createMatchCard(match)
        );
    });

    if (matchCount) {
        matchCount.textContent =
            `${filteredMatches.length} matches`;
    }

    if (noMatches) {
        noMatches.style.display =
            filteredMatches.length === 0
                ? "block"
                : "none";
    }

    if (loadMoreBtn) {
        loadMoreBtn.style.display =
            visibleMatches < filteredMatches.length
                ? "inline-flex"
                : "none";
    }
}


/* =========================================================
   FILTER EVENTS
   ========================================================= */

if (teamFilter) {
    teamFilter.addEventListener("change", () => {

        currentFilters.team =
            teamFilter.value;

        visibleMatches = 12;

        renderMatches();
    });
}


if (venueFilter) {
    venueFilter.addEventListener("change", () => {

        currentFilters.venue =
            venueFilter.value;

        visibleMatches = 12;

        renderMatches();
    });
}


if (dateFilter) {
    dateFilter.addEventListener("change", () => {

        currentFilters.date =
            dateFilter.value;

        visibleMatches = 12;

        renderMatches();
    });
}


if (matchSearch) {
    matchSearch.addEventListener("input", () => {

        currentFilters.search =
            matchSearch.value;

        visibleMatches = 12;

        renderMatches();
    });
}


if (clearFilters) {
    clearFilters.addEventListener("click", () => {

        currentFilters = {
            team: "",
            venue: "",
            date: "",
            search: ""
        };

        visibleMatches = 12;

        if (teamFilter) {
            teamFilter.value = "";
        }

        if (venueFilter) {
            venueFilter.value = "";
        }

        if (dateFilter) {
            dateFilter.value = "";
        }

        if (matchSearch) {
            matchSearch.value = "";
        }

        renderMatches();
    });
}


if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {

        visibleMatches += 12;

        renderMatches();
    });
}


/* =========================================================
   SELECT MATCH
   ========================================================= */

function selectMatch(matchId) {

    const match = matches.find(
        item => item.id === Number(matchId)
    );

    if (!match) return;

    selectedMatchId = match.id;

    if (matchSelect) {
        matchSelect.value = String(match.id);
    }

    updateMatchInformation();

    const bookingSection =
        document.getElementById("booking");

    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   MATCH DROPDOWN CHANGE
   ========================================================= */

if (matchSelect) {

    matchSelect.addEventListener("change", () => {

        const selectedId =
            Number(matchSelect.value);

        if (!selectedId) {

            selectedMatchId = null;

            updateMatchInformation();

            return;
        }

        selectedMatchId = selectedId;

        updateMatchInformation();
    });
}


/* =========================================================
   UPDATE MATCH INFORMATION
   ========================================================= */

function updateMatchInformation() {

    const match = matches.find(
        item => item.id === Number(selectedMatchId)
    );

    if (!match) {

        if (matchDate) matchDate.value = "";
        if (matchTime) matchTime.value = "";
        if (matchVenue) matchVenue.value = "";

        if (summaryMatch) {
            summaryMatch.textContent =
                "Select a match";
        }

        if (summaryHomeTeam) {
            summaryHomeTeam.textContent = "-";
        }

        if (summaryAwayTeam) {
            summaryAwayTeam.textContent = "-";
        }

        calculateTotal();

        return;
    }

    if (matchDate) {
        matchDate.value =
            formatDate(match.date);
    }

    if (matchTime) {
        matchTime.value =
            match.time;
    }

    if (matchVenue) {
        matchVenue.value =
            `${match.venue}, ${match.city}`;
    }

    if (summaryMatch) {
        summaryMatch.textContent =
            `${teams[match.home].shortName} vs ${teams[match.away].shortName}`;
    }

    if (summaryHomeTeam) {
        summaryHomeTeam.textContent =
            teams[match.home].shortName;
    }

    if (summaryAwayTeam) {
        summaryAwayTeam.textContent =
            teams[match.away].shortName;
    }

    calculateTotal();
}


/* =========================================================
   STAND INFORMATION
   ========================================================= */

function updateStandInformation() {

    if (!standSelect) return;

    const stand =
        standSelect.value;

    if (!stand) {

        if (standTitle) {
            standTitle.textContent =
                "Select a stand";
        }

        if (standDescription) {
            standDescription.textContent =
                "Choose a ticket category.";
        }

        calculateTotal();

        return;
    }

    if (standTitle) {
        standTitle.textContent =
            stand;
    }

    if (standDescription) {
        standDescription.textContent =
            standDescriptions[stand] ||
            "Premium stadium seating.";
    }

    if (summaryStand) {
        summaryStand.textContent =
            stand;
    }

    calculateTotal();
}


if (standSelect) {
    standSelect.addEventListener(
        "change",
        updateStandInformation
    );
}


/* =========================================================
   QUANTITY
   ========================================================= */

function getQuantity() {

    if (!quantityInput) {
        return 1;
    }

    let quantity =
        Number(quantityInput.value);

    if (!Number.isFinite(quantity)) {
        quantity = 1;
    }

    quantity =
        Math.max(1, Math.min(10, quantity));

    quantityInput.value = quantity;

    return quantity;
}


if (minusBtn) {
    minusBtn.addEventListener("click", () => {

        const current =
            getQuantity();

        if (current > 1) {
            quantityInput.value =
                current - 1;
        }

        calculateTotal();
    });
}


if (plusBtn) {
    plusBtn.addEventListener("click", () => {

        const current =
            getQuantity();

        if (current < 10) {
            quantityInput.value =
                current + 1;
        }

        calculateTotal();
    });
}


if (quantityInput) {
    quantityInput.addEventListener(
        "input",
        calculateTotal
    );
}


/* =========================================================
   PRICE CALCULATION
   ========================================================= */

function calculateTotal() {

    const stand =
        standSelect ? standSelect.value : "";

    const quantity =
        getQuantity();

    const pricePerTicket =
        standPrices[stand] || 0;

    const subtotal =
        pricePerTicket * quantity;

    let discountAmount = 0;

    /*
       Demo discount:
       4 or more tickets = 5% discount
    */

    if (quantity >= 4 && subtotal > 0) {
        discountAmount =
            subtotal * 0.05;
    }

    const total =
        subtotal - discountAmount;

    if (summaryQuantity) {
        summaryQuantity.textContent =
            quantity;
    }

    if (ticketPrice) {
        ticketPrice.textContent =
            formatCurrency(subtotal);
    }

    if (discount) {
        discount.textContent =
            `-${formatCurrency(discountAmount)}`;
    }

    if (totalAmount) {
        totalAmount.textContent =
            formatCurrency(total);
    }
}


/* =========================================================
   FORM VALIDATION
   ========================================================= */

function validateBookingForm() {

    if (!nameInput || !emailInput || !phoneInput) {
        return false;
    }

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const phone =
        phoneInput.value.trim();

    if (name.length < 2) {
        alert("Please enter a valid name.");
        nameInput.focus();
        return false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }

    const phonePattern =
        /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
        alert(
            "Please enter a valid 10-digit Indian mobile number."
        );

        phoneInput.focus();

        return false;
    }

    if (!selectedMatchId) {
        alert("Please select a match.");
        return false;
    }

    if (!standSelect || !standSelect.value) {
        alert("Please select a stand.");
        return false;
    }

    return true;
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function getBookings() {

    try {

        const stored =
            localStorage.getItem(
                "stadiumXBookings"
            );

        if (!stored) {
            return [];
        }

        const bookings =
            JSON.parse(stored);

        return Array.isArray(bookings)
            ? bookings
            : [];

    } catch (error) {

        console.error(
            "Unable to read bookings:",
            error
        );

        return [];
    }
}


function saveBookings(bookings) {

    localStorage.setItem(
        "stadiumXBookings",
        JSON.stringify(bookings)
    );
}


/* =========================================================
   CREATE BOOKING
   ========================================================= */

function createBooking() {

    const match =
        matches.find(
            item => item.id === Number(selectedMatchId)
        );

    if (!match) {
        return null;
    }

    const stand =
        standSelect.value;

    const quantity =
        getQuantity();

    const pricePerTicket =
        standPrices[stand];

    const subtotal =
        pricePerTicket * quantity;

    const discountAmount =
        quantity >= 4
            ? subtotal * 0.05
            : 0;

    const total =
        subtotal - discountAmount;

    return {
        id: `STX${Date.now()}`,

        customerName:
            nameInput.value.trim(),

        email:
            emailInput.value.trim(),

        phone:
            phoneInput.value.trim(),

        matchId:
            match.id,

        homeTeam:
            match.home,

        awayTeam:
            match.away,

        match:
            `${teams[match.home].shortName} vs ${teams[match.away].shortName}`,

        date:
            match.date,

        time:
            match.time,

        venue:
            match.venue,

        city:
            match.city,

        stand:
            stand,

        quantity:
            quantity,

        pricePerTicket:
            pricePerTicket,

        subtotal:
            subtotal,

        discount:
            discountAmount,

        total:
            total,

        createdAt:
            new Date().toISOString()
    };
}


/* =========================================================
   FORM SUBMIT
   ========================================================= */

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            if (!validateBookingForm()) {
                return;
            }

            const booking =
                createBooking();

            if (!booking) {
                alert(
                    "Unable to create booking."
                );

                return;
            }

            const bookings =
                getBookings();

            bookings.push(booking);

            saveBookings(bookings);

            renderBookings();

            if (successMessage) {

                successMessage.textContent =
                    `Booking confirmed. Your Booking ID is ${booking.id}`;

                successMessage.style.display =
                    "block";
            }

            /*
               Keep the booking visible briefly,
               then reset the form.
            */

            setTimeout(() => {

                bookingForm.reset();

                selectedMatchId = null;

                if (quantityInput) {
                    quantityInput.value = 1;
                }

                updateMatchInformation();
                updateStandInformation();
                calculateTotal();

            }, 300);

            const bookingsSection =
                document.getElementById("bookings");

            if (bookingsSection) {

                setTimeout(() => {

                    bookingsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }, 500);
            }
        }
    );
}


/* =========================================================
   BOOKING FILTER DROPDOWNS
   ========================================================= */

function populateBookingFilters() {

    if (matchFilter) {

        matchFilter.innerHTML = `
            <option value="">All Matches</option>
        `;

        matches.forEach(match => {

            const option =
                document.createElement("option");

            option.value = match.id;

            option.textContent =
                `${teams[match.home].shortName} vs ${teams[match.away].shortName}`;

            matchFilter.appendChild(option);
        });
    }

    if (standFilter) {

        standFilter.innerHTML = `
            <option value="">All Stands</option>
        `;

        Object.keys(standPrices).forEach(stand => {

            const option =
                document.createElement("option");

            option.value = stand;
            option.textContent = stand;

            standFilter.appendChild(option);
        });
    }
}


if (matchFilter) {
    matchFilter.addEventListener(
        "change",
        renderBookings
    );
}


if (standFilter) {
    standFilter.addEventListener(
        "change",
        renderBookings
    );
}


/* =========================================================
   RENDER BOOKINGS
   ========================================================= */

function renderBookings() {

    if (!bookingTableBody) {
        return;
    }

    const bookings =
        getBookings();

    const selectedMatch =
        matchFilter
            ? matchFilter.value
            : "";

    const selectedStand =
        standFilter
            ? standFilter.value
            : "";

    const filteredBookings =
        bookings.filter(booking => {

            const matchMatches =
                !selectedMatch ||
                String(booking.matchId) ===
                String(selectedMatch);

            const standMatches =
                !selectedStand ||
                booking.stand === selectedStand;

            return (
                matchMatches &&
                standMatches
            );
        });

    bookingTableBody.innerHTML = "";

    if (filteredBookings.length === 0) {

        if (emptyBookings) {
            emptyBookings.style.display =
                "block";
        }

        return;
    }

    if (emptyBookings) {
        emptyBookings.style.display =
            "none";
    }

    filteredBookings
        .slice()
        .reverse()
        .forEach(booking => {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>
                    ${escapeHTML(booking.id)}
                </td>

                <td>
                    ${escapeHTML(booking.match)}
                </td>

                <td>
                    ${formatDate(booking.date)}
                </td>

                <td>
                    ${escapeHTML(booking.stand)}
                </td>

                <td>
                    ${booking.quantity}
                </td>

                <td>
                    ${formatCurrency(booking.total)}
                </td>
            `;

            bookingTableBody.appendChild(row);
        });
}


/* =========================================================
   INITIALIZE APPLICATION
   ========================================================= */

function initializeApp() {

    populateTeamFilter();

    populateVenueFilter();

    populateMatchDropdown();

    populateBookingFilters();

    renderTeams();

    renderMatches();

    renderBookings();

    calculateTotal();

    updateStandInformation();

    updateMatchInformation();
}


/* =========================================================
   START APPLICATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);

