const updateButton = document.querySelector('#update')
const canselButton = document.querySelector('#cansel')
const titleInput = document.querySelector('.title');
const detailInput = document.querySelector('.detail');
const form = document.querySelector('.main__addTask');

const editTask = JSON.parse(localStorage.getItem('editTask'));
const title = editTask.title
const detail = editTask.detail

titleInput.value = `${editTask.title}`
detailInput.value = `${editTask.detail}`

form.addEventListener('submit', function(event) {
  event.preventDefault();

  editTask.title = titleInput.value
  editTask.detail = detailInput.value

  localStorage.setItem('editTask', JSON.stringify(editTask))

  titleInput.value = ''
  detailInput.value = ''

  getEditTask()
})

function getEditTask() {
  let arrayTask = JSON.parse(localStorage.getItem('tasks'))
  let editTask = JSON.parse(localStorage.getItem('editTask'));

  arrayTask.map(element => {
    if (element.title === title && element.detail === detail) {
      element.title = editTask.title;
      element.detail = editTask.detail;
    }
  });

  localStorage.setItem('tasks', JSON.stringify(arrayTask))
}

canselButton.onclick = function() {
  titleInput.value = ''
  detailInput.value = ''
}

