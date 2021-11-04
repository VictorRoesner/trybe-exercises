function createOptions() {
let states = document.getElementById('input-estado');
let statesIni = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MS","MT","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
  for (let index = 0; index < statesIni.length; index += 1) {
    let optionS = document.createElement('option');
    optionS.innerText = statesIni[index];
    optionS.value = statesIni[index];
    states.appendChild(optionS);

  }
};

window.onload = function() {
  createOptions();
}