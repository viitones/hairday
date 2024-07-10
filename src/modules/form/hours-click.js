export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      //remove a classe de todas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      //add a classe na selecionada
      selected.target.classList.add("hour-selected")
    })
  })
}