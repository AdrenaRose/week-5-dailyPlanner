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

$("#currentDay").text(today.format("dddd, MMM D, YYYY"));
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

plans9.value = localStorage.getItem("myPlans9");
plans10.value = localStorage.getItem("myPlans10");
plans11.value = localStorage.getItem("myPlans11");
plans12.value = localStorage.getItem("myPlans12");
plans01.value = localStorage.getItem("myPlans01");
plans02.value = localStorage.getItem("myPlans02");
plans03.value = localStorage.getItem("myPlans03");
plans04.value = localStorage.getItem("myPlans04");
plans05.value = localStorage.getItem("myPlans05");

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

// function
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
//   // TODO: Add code to display the current date in the header of the page.

//each button should have a unique identifier to easier target in the dom
