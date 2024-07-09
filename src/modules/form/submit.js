import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//hoje é:
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// carrega data atual e ela como sendo a mínima para selecionar
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (e) => {
  e.preventDefault()

  console.log("foi");
};