let main = document.querySelector('.main__cases')
const arrayTask = JSON.parse(localStorage.getItem('tasks'))

function deleteLocaleStorage(id) {
  arrayTask.splice(id, 1)
  localStorage.setItem(`tasks`, JSON.stringify(arrayTask))
  main.innerHTML = ''
  updateTask()
}

let arrayCompleted = new Array()
if (localStorage.getItem('completed') !== null) {
  arrayCompleted = JSON.parse(localStorage.getItem('completed'))
}

function completedTask(id) {
  main.innerHTML = ''
  arrayCompleted.push(arrayTask[id])
  arrayTask.splice(id, 1)
  localStorage.setItem(`tasks`, JSON.stringify(arrayTask))
  localStorage.setItem('completed', JSON.stringify(arrayCompleted))
  updateTask()
}

function editTask(id) {
  localStorage.setItem('editTask', JSON.stringify(arrayTask[id]))
}

function updateTask() {
  for (let i = 0; i < arrayTask.length; i++) {
    const task = arrayTask[i]
    main.innerHTML += `<div class="case">
    <div class="case__title">
      <div>
        <h2>${task.title}</h2>
        <p>${task.date}</p>
      </div>
      <span>${task.detail}</span>
    </div>
    <div class="case__icons">
      <button><a href="./editTask.html"><img src="./img/main/Pencil.svg" alt="" id="${i}" onclick="editTask(this.id)"></a></button>
      <button><img src="./img/main/CheckCircle.svg" alt="" onclick="completedTask(this.id)" id="${i}"></button>
      <button><img src="./img/main/Trash.svg" alt="" class="taskDelete" id="${i}" onclick="deleteLocaleStorage(this.id)"></button>
    </div>
    </div>
    `
  }
}

updateTask()






