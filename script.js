const twPhrases = ["#DEAD", ".EXE", "#404", "#ALIVE", "#NULL", "#ERROR","#YADAV"];
let twIndex = 0;
let twChar = 0;
let twDeleting = false;
let twPaused = false;

function typeWriter() {
    const el = document.getElementById("tw-text");
    if (!el) return;

    const current = twPhrases[twIndex];

    if (twPaused) {
        twPaused = false;
        setTimeout(typeWriter, 1650);
        return;
    }

    if (!twDeleting) {
        twChar++;
        el.textContent = current.slice(0, twChar);
        if (twChar === current.length) {
            twDeleting = true;
            twPaused = true;
            setTimeout(typeWriter, 80);
        } else {
            setTimeout(typeWriter, 90 + Math.random() * 45);
        }
    } else {
        twChar--;
        el.textContent = current.slice(0, twChar);
        if (twChar === 0) {
            twDeleting = false;
            twIndex = (twIndex + 1) % twPhrases.length;
            setTimeout(typeWriter, 380);
        } else {
            setTimeout(typeWriter, 55 + Math.random() * 20);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 800);
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

const cursor = document.getElementById("cursor");

if (window.innerWidth >= 1024) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.classList.add('active');
    });

    document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
}



document.querySelectorAll(".acc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');
        
        document.querySelectorAll(".acc-btn").forEach(b => b.classList.remove('active'));
        document.querySelectorAll(".acc-content").forEach(c => c.style.maxHeight = null);
        
        if (!isActive) {
            btn.classList.add('active');
            const inner = content.querySelector(".acc-inner");
            content.style.maxHeight = inner.offsetHeight + 20 + "px";
        }
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
});

const hero = document.getElementById("hero3d");

if (window.innerWidth >= 1024 && hero) {
    let ticking = false;
    document.addEventListener("mousemove", (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const x = (window.innerWidth / 2 - e.clientX) / 40;
                const y = (window.innerHeight / 2 - e.clientY) / 40;
                hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

const festivals = [
    { name: "New Year", date: "2026-01-01" },
    { name: "Guru Gobind Singh Jayanti", date: "2026-01-05" },
    { name: "Lohri", date: "2026-01-13" },
    { name: "Makar Sankranti", date: "2026-01-14" },
    { name: "Pongal", date: "2026-01-15" },
    { name: "Army Day", date: "2026-01-15" },
    { name: "Netaji Subhas Chandra Bose Jayanti", date: "2026-01-23" },
    { name: "Republic Day", date: "2026-01-26" },
    { name: "Valentine's Day", date: "2026-02-14" },
    { name: "Maha Shivratri", date: "2026-02-15" },
    { name: "Ramzan Start", date: "2026-02-18" },
    { name: "National Science Day", date: "2026-02-28" },
    { name: "Holi", date: "2026-03-03" },
    { name: "Hola Mohalla", date: "2026-03-05" },
    { name: "International Women's Day", date: "2026-03-08" },
    { name: "Eid-ul-Fitr", date: "2026-03-20" },
    { name: "World Water Day", date: "2026-03-22" },
    { name: "Ram Navami", date: "2026-03-26" },
    { name: "April Fool's Day", date: "2026-04-01" },
    { name: "Hanuman Jayanti", date: "2026-04-02" },
    { name: "Good Friday", date: "2026-04-03" },
    { name: "Manya Birthday", date: "2026-04-07" },
    { name: "Vaisakhi", date: "2026-04-14" },
    { name: "Ambedkar Jayanti", date: "2026-04-14" },
    { name: "Earth Day", date: "2026-04-22" },
    { name: "Labour Day", date: "2026-05-01" },
    { name: "Buddha Purnima", date: "2026-05-01" },
    { name: "Mother's Day", date: "2026-05-10" },
    { name: "Eid-ul-Adha", date: "2026-05-27" },
    { name: "World Environment Day", date: "2026-06-05" },
    { name: "Muharram", date: "2026-06-16" },
    { name: "Father's Day", date: "2026-06-21" },
    { name: "International Yoga Day", date: "2026-06-21" },
    { name: "Kargil Vijay Diwas", date: "2026-07-26" },
    { name: "Friendship Day", date: "2026-08-02" },
    { name: "Independence Day", date: "2026-08-15" },
    { name: "Ayush Birthday", date: "2026-08-19" },
    { name: "Eid-e-Milad", date: "2026-08-26" },
    { name: "Raksha Bandhan", date: "2026-08-29" },
    { name: "Teacher's Day", date: "2026-09-05" },
    { name: "Janmashtami", date: "2026-09-05" },
    { name: "Engineer's Day", date: "2026-09-15" },
    { name: "Ganesh Chaturthi", date: "2026-09-17" },
    { name: "Gandhi Jayanti", date: "2026-10-02" },
    { name: "Navratri Start", date: "2026-10-09" },
    { name: "World Student Day", date: "2026-10-15" },
    { name: "Dussehra", date: "2026-10-18" },
    { name: "Halloween", date: "2026-10-31" },
    { name: "Dhanteras", date: "2026-11-06" },
    { name: "Naraka Chaturdashi", date: "2026-11-07" },
    { name: "Diwali", date: "2026-11-08" },
    { name: "Bhai Dooj", date: "2026-11-10" },
    { name: "Children's Day", date: "2026-11-14" },
    { name: "Guru Tegh Bahadur Shaheedi Day", date: "2026-11-24" },
    { name: "Guru Nanak Jayanti", date: "2026-11-25" },
    { name: "Human Rights Day", date: "2026-12-10" },
    { name: "Christmas", date: "2026-12-25" },
    { name: "New Year's Eve", date: "2026-12-31" }
];

const randomMessages = [
    "#user dead", "#system offline", "#porting kill me", "#inactive",
    "#leave everything", "#404 soul not found", "#unknown error detected",
    "#rebooting sys", "#memory corrupted", "#run.exe stopped",
    "#loading life...", "#retrying existence", "#fatal: cloned myself wrong",
    "#system overheat", "#ayush_failed", "#brain_process not responding",
    "#internal server error", "#silent mode enabled", "#restarting hope...",
    "#no signal", "#processing db", "#ayush.exe running",
    "#ghost_mode_active", "#null db", "#fuck uhh",
    "#lost_in_source_code"
];

const today = new Date().toISOString().split("T")[0];
const eventBox = document.getElementById("eventText");

const todayEvent = festivals.find(f => f.date === today);

function formatMessage(eventName) {
    if (eventName === "Diwali") return " Happy Diwali Everyone!";
    if (eventName === "Ayush Birthday") return " Happy Birthday To Me...!";
    if (eventName === "Manya Birthday") return " Happy Birthday Manya…..!";
    return `Happy ${eventName}!`;
}

if (eventBox) {
    if (todayEvent) {
        eventBox.innerText = formatMessage(todayEvent.name);
    } else {
        function showRandom() {
            eventBox.innerText = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        }
        showRandom();
        setInterval(showRandom, 890);
    }
}

const regions = ["India", "China", "Global"];
let currentRegionIndex = 0;

function rotateRegionText() {
    const regionElement = document.getElementById("regionText");
    if (regionElement) {
        currentRegionIndex = (currentRegionIndex + 1) % regions.length;
        regionElement.style.opacity = "0";
        regionElement.style.transform = "translateY(-6px)";
        setTimeout(() => {
            regionElement.textContent = regions[currentRegionIndex];
            regionElement.style.transition = "none";
            regionElement.style.opacity = "0";
            regionElement.style.transform = "translateY(6px)";
            setTimeout(() => {
                regionElement.style.transition = "opacity 0.35s ease, transform 0.35s ease";
                regionElement.style.opacity = "1";
                regionElement.style.transform = "translateY(0)";
            }, 30);
        }, 300);
        regionElement.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    }
}

setInterval(rotateRegionText, 1400);
