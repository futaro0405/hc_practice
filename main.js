"use strict";

window.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('js-input');
  const submit = document.getElementById('js-submit');
  const list = document.getElementById('js-list');

  const deleteTasks = (deleteButton) => {
    const deleteTask = deleteButton.parentNode;
    list.removeChild(deleteTask);
  }

  const createListItem = (task) => {
    let fragment = document.createDocumentFragment();
    let listCheck = document.createElement('input');
    listCheck.classList.add('c-list__check');
    listCheck.type = 'checkbox';

    let listText = document.createElement('input');
    listText.classList.add('c-list__text');
    listText.type = 'text';
    listText.value = task;
    listText.disabled = true;

    let editButton = document.createElement('button');
    editButton.classList.add('c-list__edit');
    editButton.textContent = 'edit';

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('c-list__delete');
    deleteButton.textContent = 'delete';

    fragment.appendChild(listCheck);
    fragment.appendChild(listText);
    fragment.appendChild(editButton);
    fragment.appendChild(deleteButton);

    editButton.addEventListener('click', e => {
      e.preventDefault();

      if (editButton.classList.contains('is-active')) {
        listText.disabled = true;
        editButton.classList.remove('is-active');
      }else{
        listText.disabled = false;
        editButton.classList.add('is-active');
      }
    });

    deleteButton.addEventListener('click', e => {
      e.preventDefault();
      deleteTasks(deleteButton);
    });

    return fragment;
  }

  const addTask = (task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('c-list__item');
    let fragment = createListItem(task);
    listItem.appendChild(fragment);

    const intext = listItem.getElementsByClassName('c-list__text');
    intext.value = task;
    list.appendChild(listItem);
  }

  const countTask = () => {
    const allCount = list.childElementCount;
    const checkItem = list.getElementsByClassName("c-list__check").check;
    for(let i = 0; i < list.length; i++) {

    }
  }

  submit.addEventListener('click', e => {
    e.preventDefault();
    const task = input.value;
    addTask(task);
    input.value = '';
  });
});
