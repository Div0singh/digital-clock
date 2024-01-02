let Value_hour = document.getElementById('hours');
let Value_min = document.getElementById('minutes');
let Value_sec = document.getElementById('seconds');
let formate = document.getElementById('format');
let Value_Days = document.getElementById("week");
let Value_month = document.getElementById("month");
let Value_Date  = document.getElementById('date');
function clock() {
    var time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let formatHour = time.getHours();
    let dayNames = ['sunday','monday','tuesday','wednesday','Thursday','friday','saturday'];
    let monthNames = ['January', 'February', 'March', 'April',' May', 'June',' July', 'August', 'September', 'October', 'November','December'];
    //set hours in formate of 12hours
    if (hour > 12) {
        hour -= 12;
        if (hour < 10) {
            Value_hour.innerText = "0" + hour;
        }
        else {
            Value_hour.innerText = hour;
        }
    }
    else {
        if (hour < 10) {
            Value_hour.innerText = "0" + hour;
        }
        else {
            Value_hour.innerText = hour;
        }
    };
    //set minutes 
    if (min < 10) {
        Value_min.innerText = "0" + min;
    }
    else {
        Value_min.innerText = min;
    };
    //set seconds
    if (sec < 10) {
        Value_sec.innerText = "0" + sec;
    }
    else {
        Value_sec.innerText = sec;
    };
    if (formatHour >= 12) {
        formate.innerText = "PM";
    }
    else {
        formate.innerText = "AM";
    }
    Value_Days.innerText = dayNames[day];
    Value_Date.innerText = date;
    Value_month.innerText = monthNames[month];

};
function clockAlert() {
    const alert = new Audio('clocksound.mp3');
    alert.play();
};
function alarm_sound() {
    var alarmAlert = new Date();
    let alarm_min = alarmAlert.getMinutes();
    let alarm_sec = alarmAlert.getSeconds();
    const alarm_sound = new Audio('houralert.mp3');
    if (alarm_min == 0) {
        if (alarm_sec <= 0) {
            alarm_sound.play();
        }
    };
};
setInterval(clock, 1000);
setInterval(clockAlert, 1000);
setInterval(alarm_sound, 1000);

