const addButton = document.querySelector('.button__addTask');
const form = document.querySelector('.main__addTask');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let elements = form.elements
  let arrayTask = new Array()
  if (localStorage.getItem('tasks') !== null) {
    arrayTask = JSON.parse(localStorage.getItem('tasks'))
  }

  const arrayValue = Array.from(elements).filter((item) => !!item.name)
  const task = {
    title: '',
    detail:'',
    date:''
  }

  task.title = arrayValue[0].value
  task.detail = arrayValue[1].value
  task.date = arrayValue[2].value
  arrayTask.push(task)
  localStorage.setItem(`tasks`, JSON.stringify(arrayTask))

  arrayValue[0].value = ''
  arrayValue[1].value = ''
  arrayValue[2].value = ''

  sortDate()
});


function sortDate() {
  const array = JSON.parse(localStorage.getItem('tasks'))

  array.sort(function(a,b) {
    return new Date(a.date) - new Date(b.date);
  });

  localStorage.setItem('tasks', JSON.stringify(array))
}
