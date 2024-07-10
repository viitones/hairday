import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"

import { hourLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export async function scheduleDays() {
  //obtém a data do input
  const date = selectedDate.value

  //busca na API os agendamentos baseado na data
    const dailySchedules = await scheduleFetchByDay({ date })
    
    //exibe os agendamentos
    schedulesShow({ dailySchedules })


  //(renderiza as horas disponíveis)
  hourLoad({ date, dailySchedules })

  // Os horários disponíveis (futuro + não agendado) do lado esquerdo (form)
}