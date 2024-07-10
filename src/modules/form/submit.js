import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDays } from "../schedules/load.js"

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client")

//hoje é:
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// carrega data atual e ela como sendo a mínima para selecionar
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (e) => {
  e.preventDefault()


  try {
    //selecionando o nome do cliente
    const name = clientName.value.trim()

    if(!name) {
      return alert("Informe o nome do cliente")
    }

    //recupera horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected) {
      return alert("Por favor, selecione a hora")
    }

    const [hour] = hourSelected.innerText.split(":")

    //inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //gera um id
    const id = Math.random().toString()
    console.log(id);

    //faz o agendamento
    await scheduleNew(
      {
        id,
        name,
        when
      }
    );

    await scheduleDays()
    clientName.value = ""
  } catch (error) {
    alert(error)
  }
};