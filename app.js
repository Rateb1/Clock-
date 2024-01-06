window.addEventListener("load", rotateClock);

function rotateClock() {
  const hour = document.getElementById("clock__hour");
  const minute = document.getElementById("clock__minute");
  const second = document.getElementById("clock__second");
  const time__control = document.getElementById("time__control");
  //   Class
  const hourHTML = document.getElementsByClassName("hour__child-hour");
  const minuteHTML = document.getElementsByClassName("hour__child-minute");
  const secondHTML = document.getElementsByClassName("hour__child-second");

  //  set TIME OUT
  const interval = setInterval(function () {
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    for (let i = 0; i < hourHTML.length; i++) {
      hourHTML[i].innerHTML = date.getHours() % 12;
    }
    for (let i = 0; i < minuteHTML.length; i++) {
      minuteHTML[i].innerHTML = date.getMinutes();
      if (date.getMinutes() < 10) {
        minuteHTML[i].innerHTML = `0${date.getMinutes()}`;
      } else minuteHTML[i].innerHTML = date.getMinutes();
    }
    for (let i = 0; i < secondHTML.length; i++) {
      secondHTML[i].innerHTML = date.getSeconds();
      if (date.getSeconds() < 10) {
        secondHTML[i].innerHTML = `0${date.getSeconds()}`;
      } else secondHTML[i].innerHTML = date.getSeconds();
    }
    if (date.getHours() % 12 >= 12) {
      time__control.innerHTML = "PM";
      time__control.style.color = "#ff4500";
    } else {
      time__control.innerHTML = "AM";
      time__control.style.color = "#1ec924";
    }

    hour.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
    minute.style.transform = "rotate(" + minutes * 6 + "deg)";
    second.style.transform = "rotate(" + seconds * 6 + "deg)";
  }, 1000);
}
