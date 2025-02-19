import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hourLoad({ date, dailySchedules }) {
  //limpa a lista de horários
  hours.innerHTML = ""

  //obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedules) => dayjs(schedules.when).format("HH:mm"))

  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const [scheduleHour] = hour.split(":")

    //adiciona a hora para verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    // define se o horário está disponível
    return {
    hour,
    available
    }
  })

  //renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour
    
    if(hour === "08:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "12:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}