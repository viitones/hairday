import dayjs from "dayjs";

//seleciona os períodos 
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
try {
  periodMorning.innerHTML = ""
  periodAfternoon.innerHTML = ""
  periodNight.innerHTML = ""

  //renderiza os agendamentos por período
  dailySchedules.forEach(schedule => {
    const item = document.createElement("li")
    const time = document.createElement("strong")
    const name = document.createElement("span")

    //adiciona o id do agendamento
    item.setAttribute("data-id", schedule.id)
    time.textContent = dayjs(schedule.when).format("DD/MM/YY - HH:mm")
    name.textContent = schedule.name

    //cria o ícone de cancelar
    const cancelItem = document.createElement("img")
    cancelItem.classList.add("cancel-icon")
    cancelItem.setAttribute("src", "./src/assets/cancel.svg")
    cancelItem.setAttribute("alt", "Cancelar")

    item.append(time, name, cancelItem)

    //renderiza o agendamento pelo período
    const hour = dayjs(schedule.when).hour()
    if(hour <= 12) {
      periodMorning.append(item)
    } else if(hour > 12 && hour <= 18) {
      periodAfternoon.append(item)
    } else {
      periodNight.append(item)
    }

  });

} catch (error) {
  alert(error)
}
}