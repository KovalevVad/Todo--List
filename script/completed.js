let main = document.querySelector('.main__cases')

const completedTasks = JSON.parse(localStorage.getItem('completed'))
completedTasks.forEach(element => {
  main.innerHTML += `<div class="case">
  <div class="case__title">
    <h2>${element.title}</h2>
    <span>${element.detail}</span>
  </div>
  </div>
  `
});

