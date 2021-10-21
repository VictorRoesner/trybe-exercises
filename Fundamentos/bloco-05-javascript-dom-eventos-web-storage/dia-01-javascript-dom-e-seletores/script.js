const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const headerText = document.querySelector('h1');
headerText.style.color = "blue";

const emergenyTasks = document.querySelectorAll('.emergency-tasks')[0]
emergenyTasks.style.backgroundColor = "red"

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks')[0]
noEmergencyTasks.style.backgroundColor = "purple"

const footer = document.getElementById('footer-container')
footer.style.backgroundColor = 'violet';

const emergencyTitle = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTitle.length; index += 1) {
emergencyTitle[index].style.backgroundColor = "black";
};

const noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTitle.length; index += 1) {
noEmergencyTitle[index].style.backgroundColor = "grey";
};