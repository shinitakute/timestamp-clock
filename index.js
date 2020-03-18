Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function getTextWidth(text, font) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

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
    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;
    var fontSize = viewportHeight*30*0.01;
    var font = "small-caps lighter " + fontSize + "px Segoe UI";
    var date = months[month] + " " + day + ", " + year;
    var time = hr.pad(2) + ":" + min.pad(2) + ":" + sec.pad(2);
    var dateWidth = getTextWidth(date, font);
    var timeWidth = getTextWidth(time + ".000", font);

    document.getElementById("date").style.width = dateWidth;
    document.getElementById("date").firstChild.nodeValue = date;
    document.getElementById("time").style.width = timeWidth;
    document.getElementById("time").style.marginLeft = (viewportWidth/2 - timeWidth/2) + "px";
    document.getElementById("time").firstChild.nodeValue = time + "." + ms;
}

function init() {
    window.setInterval(updateClock, 1);
}