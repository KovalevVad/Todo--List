let main = document.querySelector('.main__cases')

for (let i = 0; i < localStorage.length; i++) {
  const task = localStorage.getItem(`task${i}`)
  const newTask = JSON.parse(task)
  main.innerHTML += `<div class="case">
  <div class="case__title">
    <h2>${newTask.title}</h2>
    <span>${newTask.detail}</span>
  </div>
  <div class="case__icons">
    <a href="./editTask.html"><img src="./img/main/Pencil.svg" alt=""></a>
    <a href="./completed.html"><img src="./img/main/CheckCircle.svg" alt=""></a>
    <a href=""><img src="./img/main/Trash.svg" alt=""></a>
  </div>
  </div>
  `
}




