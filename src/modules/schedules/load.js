import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

import { hourLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export async function scheduleDays() {
  //obtém a data do input
  const date = selectedDate.value

  //busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules);


  // Busca na API os agendamentos para carregar do lado direito da tela. (renderiza as horas disponíveis)
  hourLoad({ date })

  // Os horários disponíveis (futuro + não agendado) do lado esquerdo (form)
}