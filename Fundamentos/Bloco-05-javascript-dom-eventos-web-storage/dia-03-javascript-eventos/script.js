function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  let daysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let elementLi = document.createElement('li');

    if (day === 24 | day === 31) {
      elementLi.className = 'day holiday';
      elementLi.innerHTML = day;
      daysList.appendChild(elementLi);
    } else if (day === 4 | day === 11 | day === 18) {
      elementLi.className = 'day friday';
      elementLi.innerHTML = day;
      daysList.appendChild(elementLi);
    } else if (day === 25) {
      elementLi.className = 'day holiday friday';
      elementLi.innerHTML = day;
      daysList.appendChild(elementLi);
    } else {
      elementLi.innerHTML = day;
      elementLi.className = "day";
      daysList.appendChild(elementLi);
    }
  };
};

createDays();

// 2.
function createFeriados (btnName) {
  let buttonDiv = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerHTML = btnName;
  newButton.id = 'btn-holiday';
  buttonDiv.appendChild(newButton);
}

createFeriados('Feriados');

// 3.

function holidayColor() {
  let holidayDays = document.querySelectorAll('.holiday')
  let holidayButton = document.querySelector('#btn-holiday')

  holidayButton.addEventListener('click', function(){
    for (i = 0; i < holidayDays.length; i += 1) {
      if (holidayDays[i].style.backgroundColor === 'blue') {
        holidayDays[i].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        holidayDays[i].style.backgroundColor = 'blue'
      }
    }
  })
};

holidayColor();

// 4.
function createSexta (buttonName) {
  let buttonDiv = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerHTML = buttonName;
  newButton.id = 'btn-friday';
  buttonDiv.appendChild(newButton);
}

createSexta('Sexta-feira');

// 5.

function fridayText() {
  let fridayDays = document.querySelectorAll('.friday')
  let fridayButton = document.querySelector('#btn-friday')

  fridayButton.addEventListener('click', function(){
    for (i = 0; i < fridayDays.length; i += 1) {
      if (fridayDays[i].style.fontFamily === 'arial') {
        fridayDays[i].style.fontFamily = 'verdana'
      } else {
        fridayDays[i].style.fontFamily = 'arial'
      }
    }
  })
};

fridayText()

// 6.
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// 7.
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

// 8.

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

// 9.

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// .10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();



