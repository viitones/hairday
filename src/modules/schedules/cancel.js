import { scheduleCancel } from "../../services/schedule-cancel"
import { scheduleDays } from "../schedules/load"
const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li")

      //pega o id do agendamento
      const { id } = item.dataset

      //verifica se o id foi selecionado
      if(id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if(isConfirm) {
          await scheduleCancel({ id })
          scheduleDays()
        }
      }
    }
  })
})