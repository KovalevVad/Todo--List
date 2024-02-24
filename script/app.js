let main = document.querySelector('.main__cases')

function deleteLocaleStorage(id) {
  localStorage.removeItem(`${id}`)
  updateTask()
}

function updateTask() {
  for (let i = 0; i < localStorage.length; i++) {
    const task = localStorage.getItem(`task${i}`)
    if(task !== null) {
      const newTask = JSON.parse(task)
      main.innerHTML += `<div class="case" id="task${i}">
      <div class="case__title">
        <h2>${newTask.title}</h2>
        <span>${newTask.detail}</span>
      </div>
      <div class="case__icons">
        <a href="./editTask.html"><img src="./img/main/Pencil.svg" alt=""></a>
        <img src="./img/main/CheckCircle.svg" alt="">
        <img src="./img/main/Trash.svg" alt="" class="taskDelete" id="task${i}" onclick="deleteLocaleStorage(this.id)">
      </div>
      </div>
      `
    }

  }
}
// localStorage.clear()
updateTask()





