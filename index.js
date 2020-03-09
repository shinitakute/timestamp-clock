Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
    var now = new Date();
    var ms = now.getMilliseconds(),
        sec = now.getSeconds(),
        min = now.getMinutes(),
        hr = now.getHours(),
        month = now.getMonth(),
        day = now.getDate(),
        year = now.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("date").firstChild.nodeValue = months[month] + " " + day + ", " + year;
    document.getElementById("time").firstChild.nodeValue = hr.pad(2) + ":" + min.pad(2) + ":" + sec.pad(2) + "." + ms;
}

function initClock() {
    window.setInterval("updateClock()", 1);
}