"use strict";

window.addEventListener('DOMContentLoaded', () => {
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
    listCheck.addEventListener('change', countTask());

    let listText = document.createElement('input');
    listText.classList.add('c-list__text');
    listText.type = 'text';
    listText.value = task;
    listText.disabled = true;

    let editButton = document.createElement('button');
    editButton.classList.add('c-list__edit');
    editButton.textContent = 'edit';
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

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('c-list__delete');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', e => {
      e.preventDefault();

      const result = window.confirm('本当に削除してもよろしいですか？');

      if (result) {
        deleteTasks(deleteButton);
        console.log('taskを削除しました');
      } else {
        console.log('task削除をキャンセルしました');
      }
    });

    fragment.appendChild(listCheck);
    fragment.appendChild(listText);
    fragment.appendChild(editButton);
    fragment.appendChild(deleteButton);

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
    countTask();
  }

  const countTask = () => {
    const textAll = document.getElementById('js-allCount');
    const textDone = document.getElementById('js-doneCount');
    const textNotDone = document.getElementById('js-notDoneCount');

    let doneCount = 0;
    for(let i = 0; i < list.children.length; i++) {
      if(list.children[i].getElementsByTagName('input')[0].checked) {
        doneCount++;
      }
    }

    textAll.innerHTML = `全てのタスク：${list.children.length}`;
    textDone.innerHTML = `完了済み：${doneCount}`;
    textNotDone.innerHTML = `未完了：${list.children.length - doneCount}`;
  }

  submit.addEventListener('click', e => {
    e.preventDefault();
    const task = input.value;
    addTask(task);
    input.value = '';
  });

  countTask();
});
