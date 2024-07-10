import { scheduleDays } from "../schedules/load.js"

const selectedDate = document.getElementById("date")

//recarrega a lista de horários quando a data mudar

selectedDate.onchange = () => {
  scheduleDays()
}