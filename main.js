"use strict";

window.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('js-input');
  const submit = document.getElementById('js-submit');
  const list = document.getElementById('js-list');

  editButton.addEventListener('click', e => {
    e.preventDefault();
    editTasks(editButton);
  });

  editButton.addEventListener('click', e => {
    e.preventDefault();
    deleteTasks(deleteButton);
  });

  const createItem = (task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('c-list__item');

    const listCheck = document.createElement('input');
    listCheck.classList.add('c-list__check');
    listCheck.type = 'checkbox';

    const listText = document.createElement('input');
    listText.classList.add('c-list__text');
    listText.type = 'text';
    listText.textContent = task;
    listText.disabled = false;

    const editButton = document.createElement('button');
    editButton.classList.add('c-list__edit');
    editButton.textContent = 'edit';

    const deleteButton = document.createElement('button');
    editButton.classList.add('c-list__delete');
    deleteButton.textContent = 'delete';

    listItem.appendChild(listCheck);
    listItem.appendChild(listText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
  }

  const editTasks = (editButton) => {
    const chosenTask = editButton.closest('li');
    const editText = chosenTask.getElementsByTagName('input');
    editText.disabled = true;
  }

  const deleteTasks = (deleteButton) => {
    const deleteTask = deleteButton.parentNode;
    list.removeChild(deleteTask);
  }

  const addTask = (task) => {
    createItem(task);
    list.appendChild(listItem);
  }

  submit.addEventListener('click', e => {
    e.preventDefault();
    const task = input.value;
    addTask(task);
    input.value = '';
  });
});

// const taskValue = document.getElementById('js-taskInput');
// const taskSubmit = document.getElementById('js-taskSubmit');
// const taskList = document.getElementById('js-taskList');

// const addTasks = (task) => {
//   const listItem = document.createElement('li');
//   const showItem = taskList.appendChild(listItem);
//   showItem.innerHTML = task;

//   const deleteButton = document.createElement('button');
//   deleteButton.innerHTML = 'Delete';
//   listItem.appendChild(deleteButton)

//   deleteButton.addEventListener('click', e => {
//     e.preventDefault();
//     deleteTasks(deleteButton);
//   });
// };

// const deleteTasks = (deleteButton) => {
//   const chosenTask = deleteButton.closest('li');
//   taskList.removeChild(chosenTask);
// };

// taskSubmit.addEventListener('click', e => {
//   e.preventDefault();
//   const task = taskValue.value;
//   addTasks(task);
//   taskValue.value = '';
// });