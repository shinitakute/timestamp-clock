function getTextWidth(text, font) {
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

function updateClock() {
    let timeZone = "Asia/Tokyo";

    let now = new Date();
    let date = now.toLocaleDateString("ja-JP",
        {timeZone: timeZone, month: "long", day: "numeric", year: "numeric"});
    let time = now.toLocaleTimeString("ja-JP",
        {timeZone: timeZone, hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"});

    let ms = now.getMilliseconds();

    let viewportWidth = document.documentElement.clientWidth;
    let viewportHeight = document.documentElement.clientHeight;
    let fontSize = viewportHeight * 30 * 0.01;
    let font = "small-caps lighter " + fontSize + "px Segoe UI";

    let dateWidth = getTextWidth(date, font);
    let timeWidth = getTextWidth(time + ".000", font);

    document.getElementById("date").style.width = dateWidth;
    document.getElementById("date").firstChild.nodeValue = date;
    document.getElementById("time").style.width = timeWidth;
    document.getElementById("time").style.marginLeft = (viewportWidth/2 - timeWidth/2) + "px";
    document.getElementById("time").firstChild.nodeValue = time + "." + ms;
}

function init() {
    window.setInterval(updateClock, 1);
}
