import data from "./data.json" assert { type: "json" };

var daily = document.getElementById("daily"),
    weekly = document.getElementById("weekly"),
    monthly = document.getElementById("monthly"),
    activityTitle = document.querySelectorAll(".title"),
    currentHours = document.querySelectorAll(".current-hours"),
    previousHours = document.querySelectorAll(".previous-hours");
    

window.onload = weeklyDuration;

daily.addEventListener("click", function(){
    daily.classList.add("dur-col");
    weekly.classList.remove("dur-col");
    monthly.classList.remove("dur-col");
    activityTitle.forEach(function(title, i){
        if(title.textContent === data[i].title){
            currentHours.forEach(function(curr, i){
                curr.textContent = data[i].timeframes.daily.current;
            });
            previousHours.forEach(function(prev, i){
                prev.textContent = data[i].timeframes.daily.previous;
            });
        }
    });
});

weekly.addEventListener("click", function(){
    daily.classList.remove("dur-col");
    weekly.classList.add("dur-col");
    monthly.classList.remove("dur-col");
    activityTitle.forEach(function(title, i){
        if(title.textContent === data[i].title){
            currentHours.forEach(function(curr, i){
                curr.textContent = data[i].timeframes.weekly.current;
            });
            previousHours.forEach(function(prev, i){
                prev.textContent = data[i].timeframes.weekly.previous;
            });
        }
    });
});

monthly.addEventListener("click", function(){
    daily.classList.remove("dur-col");
    weekly.classList.remove("dur-col");
    monthly.classList.add("dur-col");
    activityTitle.forEach(function(title, i){
        if(title.textContent === data[i].title){
            currentHours.forEach(function(curr, i){
                curr.textContent = data[i].timeframes.monthly.current;
            });
            previousHours.forEach(function(prev, i){
                prev.textContent = data[i].timeframes.monthly.previous;
            });
        }
    });
});

function weeklyDuration(){
    weekly.classList.add("dur-col");
    activityTitle.forEach(function(title, i){
        if(title.textContent === data[i].title){
            currentHours.forEach(function(curr, i){
                curr.textContent = data[i].timeframes.weekly.current;
            });
            previousHours.forEach(function(prev, i){
                prev.textContent = data[i].timeframes.weekly.previous;
            });
        }
    });
}