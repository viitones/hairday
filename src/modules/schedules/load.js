import { hourLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export function scheduleDays() {
  //obtém a data do input
  const date = selectedDate.value

  // Busca na API os agendamentos para carregar do lado direito da tela. (renderiza as horas disponíveis)
  hourLoad({ date })

  // Os horários disponíveis (futuro + não agendado) do lado esquerdo (form)
}