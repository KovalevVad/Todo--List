const addButton = document.querySelector('.button__addTask');
const form = document.querySelector('.main__addTask');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  let elements = form.elements
  const arrayValue = Array.from(elements).filter((item) => !!item.name)
  const task = {
    title: '',
    detail:''
  }

  arrayValue.forEach(function() {
    task.title = arrayValue[0].value
    task.detail = arrayValue[1].value
  })
  localStorage.setItem(`task${localStorage.length}`, JSON.stringify(task))

  arrayValue[0].value = ''
  arrayValue[1].value = ''
});


