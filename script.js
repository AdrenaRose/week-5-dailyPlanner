let today = dayjs();
let plans9 = document.querySelector("#description9");
let plans10 = document.querySelector("#description10");
let plans11 = document.querySelector("#description11");
let plans12 = document.querySelector("#description12");
let plans01 = document.querySelector("#description01");
let plans02 = document.querySelector("#description02");
let plans03 = document.querySelector("#description03");
let plans04 = document.querySelector("#description04");
let plans05 = document.querySelector("#description05");

plans9.value = localStorage.getItem("myPlans9");
plans10.value = localStorage.getItem("myPlans10");
plans11.value = localStorage.getItem("myPlans11");
plans12.value = localStorage.getItem("myPlans12");
plans01.value = localStorage.getItem("myPlans01");
plans02.value = localStorage.getItem("myPlans02");
plans03.value = localStorage.getItem("myPlans03");
plans04.value = localStorage.getItem("myPlans04");
plans05.value = localStorage.getItem("myPlans05");

$("#currentDay").text(today.format("dddd, MMM D, YYYY"));

$(".saveBtn9").click(function () {
  localStorage.setItem("myPlans9", plans9.value);
});

$(".saveBtn10").click(function () {
  localStorage.setItem("myPlans10", plans10.value);
});

$(".saveBtn11").click(function () {
  localStorage.setItem("myPlans11", plans11.value);
});

$(".saveBtn12").click(function () {
  localStorage.setItem("myPlans12", plans12.value);
});

$(".saveBtn01").click(function () {
  localStorage.setItem("myPlans01", plans01.value);
});

$(".saveBtn02").click(function () {
  localStorage.setItem("myPlans02", plans02.value);
});

$(".saveBtn03").click(function () {
  localStorage.setItem("myPlans03", plans03.value);
});

$(".saveBtn04").click(function () {
  localStorage.setItem("myPlans04", plans04.value);
});

$(".saveBtn05").click(function () {
  localStorage.setItem("myPlans05", plans05.value);
});

if (dayjs("12/12/1200 9:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-9").classList.add("future");
} else if (dayjs("12/12/1200 9:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-9").classList.add("past");
} else {
  document.querySelector("#hour-9").classList.add("present");
}

if (dayjs("12/12/1200 10:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-10").classList.add("future");
} else if (dayjs("12/12/1200 10:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-10").classList.add("past");
} else {
  document.querySelector("#hour-10").classList.add("present");
}

if (dayjs("12/12/1200 11:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-11").classList.add("future");
} else if (dayjs("12/12/1200 11:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-11").classList.add("past");
} else {
  document.querySelector("#hour-11").classList.add("present");
}

if (dayjs("12/12/1200 12:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-12").classList.add("future");
} else if (dayjs("12/12/1200 12:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-12").classList.add("past");
} else {
  document.querySelector("#hour-12").classList.add("present");
}

if (dayjs("12/12/1200 13:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-13").classList.add("future");
} else if (dayjs("12/12/1200 13:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-13").classList.add("past");
} else {
  document.querySelector("#hour-13").classList.add("present");
}

if (dayjs("12/12/1200 14:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-14").classList.add("future");
} else if (dayjs("12/12/1200 14:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-14").classList.add("past");
} else {
  document.querySelector("#hour-14").classList.add("present");
}

if (dayjs("12/12/1200 15:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-15").classList.add("future");
} else if (dayjs("12/12/1200 15:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-15").classList.add("past");
} else {
  document.querySelector("#hour-15").classList.add("present");
}

if (dayjs("12/12/1200 16:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-16").classList.add("future");
} else if (dayjs("12/12/1200 16:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-16").classList.add("past");
} else {
  document.querySelector("#hour-16").classList.add("present");
}

if (dayjs("12/12/1200 17:00").format("HH") > dayjs().format("HH")) {
  document.querySelector("#hour-17").classList.add("future");
} else if (dayjs("12/12/1200 17:00").format("HH") < dayjs().format("HH")) {
  document.querySelector("#hour-17").classList.add("past");
} else {
  document.querySelector("#hour-17").classList.add("present");
}
