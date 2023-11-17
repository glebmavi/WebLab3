function clock() {
    const locale = document.documentElement.lang;
    const now = new Date();
    document.getElementById('clock').innerHTML = now.toLocaleString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "shortOffset",
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

// Update the clock immediately
clock();

// Update the clock every 12 seconds
setInterval(clock, 12000);