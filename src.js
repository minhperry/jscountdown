function createNewElement(titleID, mayNotAttend = false) {
    var newP1 = document.createElement("p");
    newP1.id = titleID;
    newP1.classList.add("ttl");
    if (mayNotAttend) newP1.classList.add("not");

    var newP2 = document.createElement("p");
    newP2.id = titleID + "t";
    newP2.classList.add("tme");
    if (mayNotAttend) newP2.classList.add("not");

    var newP3 = document.createElement("p");
    newP3.id = titleID + "d";
    newP3.classList.add("dt");
    if (mayNotAttend) newP3.classList.add("not");

    document.body.appendChild(newP1);
    document.body.appendChild(newP2);
    document.body.appendChild(newP3);
}

function createNewElementFromArray(...array) {
    array.forEach(i => {
        createNewElement(i);
    });
}

var D, H, M, S_, CURT = "", LANG, SOONTIME = 1;

function setTime(string_S = "Current time: ")
{
    CURT = string_S;
}

function setLang(lang) {
    switch (lang) {
        case "vi":
            D = " ngày ";
            H = " giờ ";
            M = " phút ";
            S_ = " giây";
            LANG = "vi";
            break;

        case "en":
            D = " day(s) ";
            H = " hour(s) ";
            M = " minute(s) ";
            S_ = " second(s)";
            LANG = "en";
            break;

        case "de":
            D = " Tag(e) ";
            H = " Stunde(n) ";
            M = " Minute(n) ";
            S_ = " Sekunde(n)";
            LANG = "de";
            break;
        default:
            D = " d ";
            H = " h ";
            M = " m ";
            S_ = " s";
            LANG = "def";
            break;
    }
}

function changeHTMLById(id, replaceWith) {
    document.getElementById(id).innerHTML = replaceWith;
}

function check( /*string*/ time) {
    return (time < 10) ? ('0' + time) : time;
}

function getDayInYear(day) {
    var str = new Date(day.getUTCFullYear(), 0, 0);
    var diff = Math.abs(day - str);
    var ONEDAY = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / ONEDAY);
    return day;
}

function dateDiff(d1, d2) {
    return Math.abs(getDayInYear(d1) - getDayInYear(d2));
}

function returnTimeArray(dateString) {
    var d = new Date(dateString);
    var n = new Date();
    var dist = Math.floor((d.getTime() - n.getTime()) / 1000);
    if (dist < 0) return [0, 0, 0, 0, "Time has passed!"];
    else {
        var hr = Math.floor(dist / 3600);
        var dist2 = dist - hr * 3600;
        var mn = Math.floor(dist2 / 60);
        var sc = dist2 - mn * 60;
        if (hr >= 24) {
            var day = Math.floor(hr / 24);
            hr = hr % 24;
        } else var day = 0;
        return [day, hr, mn, sc];
    }
}

function addFontSize(text, size = 5) {
    return "<font size=" + size + ">" + text + "</font>";
}

function month(m) {
    m += 1;
    if (LANG == "vi") {
        t = "Tháng ";
        return t + m;
    } else if (LANG == "de") {
        switch (m) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mär";
            case 4:
                return "Apr";
            case 5:
                return "Mai";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Okt";
            case 11:
                return "Nov";
            case 12:
                return "Dez";
        }
    } else {
        switch (m) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
        }
    }
}

function displayNewLine(title = "", endTime = "", titleID = "", mayNotAttend = false) {
    createNewElement(titleID, mayNotAttend);
    //var b = false;
    var z = setInterval(
        function run() {
            let S = returnTimeArray(endTime);
            var s;
            if (S[0] == 0 && S[1] == 0 && S[2] == 0 && S[3] == 0) {
                s = S[4];
                document.getElementById(titleID).classList.add("end");
                document.getElementById(titleID + "t").classList.add("end");
                document.getElementById(titleID + "d").classList.add("end");
            } else {
                for (let i = 0; i < 5; i++)
                    S[i] = check(S[i]);
                s = S[0] + addFontSize(D) +
                    S[1] + addFontSize(H) +
                    S[2] + addFontSize(M) +
                    S[3] + addFontSize(S_);
            }
            var d = new Date(endTime);
            var h = d.getUTCHours() + 2;
            h = check(h);
            var m = d.getUTCMinutes();
            m = check(m);
            //var s_ = d.getUTCSeconds();
            //s_ = check(s_);
            var mo = month(d.getMonth());
            var day = d.getDate();
            var y = d.getFullYear();
            var dot = ":";
            var show = mo + " " + day + ", " + y + " " + h + dot + m; //+ dot + s_;
            if (parseInt(S[0]) <= 3) {
                document.getElementById(titleID).classList.add("near");
                document.getElementById(titleID + "t").classList.add("near");
                document.getElementById(titleID + "d").classList.add("near");
            }
            changeHTMLById(titleID + "t", s);
            changeHTMLById(titleID, title);
            changeHTMLById(titleID + "d", show);
        }, 1000);
}

var n = setInterval(
    function currentTime() {
        var d = new Date();
        var h = d.getUTCHours() + 2;
        h = check(h);
        var m = d.getUTCMinutes();
        m = check(m);
        var s = d.getUTCSeconds();
        s = check(s);
        var mo = d.getMonth();
        var day = d.getDate();
        var y = d.getFullYear();
        mo = month(mo);

        const dot = ":";
        const start = "<b><font size=7>";
        const end = "</font></b>";

        changeHTMLById("t0", CURT);
        var x = start + mo + " " + day + ", " + y + " " + h + dot + m + dot + s + end;
        changeHTMLById("time0", x);
    }, 1000);