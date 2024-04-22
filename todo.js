let listContainer = document.querySelector("#list-container")

let addButton = document.querySelector("#addButton")

let inputbox = document.getElementById("input-box")

let addTask = () => {
    if (inputbox.value === "") {
        alert("Add your task first")
    }
    else {
        let task = document.createElement("li")
        let iconAndTask = document.createElement("span")

        let icon = document.createElement("i")
        icon.className = "fa-regular fa-circle"
        iconAndTask.appendChild(icon)

        let taskText = document.createElement("span")
        taskText.innerText = inputbox.value
        iconAndTask.appendChild(taskText)
        task.appendChild(iconAndTask)

        let crossIcon = document.createElement("i")
        crossIcon.className = "fa-solid fa-xmark"
        task.appendChild(crossIcon)

        listContainer.appendChild(task)

        icon.addEventListener("click", () => {
            if (icon.getAttribute("class") === "fa-regular fa-circle") {
                icon.setAttribute("class", "fa-solid fa-circle-check")
                taskText.style.textDecoration = "line-through"
            }
            else {
                icon.setAttribute("class", "fa-regular fa-circle")
                taskText.style.textDecoration = "none"
            }
        })

        crossIcon.addEventListener("click", () => {
            listContainer.removeChild(task)
        })
    }
    inputbox.value = ""
    savaData()
}

addButton.addEventListener("click", addTask)
