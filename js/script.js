const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focusS = document.querySelector('.focus');

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    day = today.getUTCDay();
    currentDate = today.getDate(),
    month = today.getMonth();

    if(addZero(sec) == '00' && addZero(min) == '00'){
      increaseCounter();
    }

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span><br></span><span class="smaller">${writeCorrectDay(day)}<span> </span>${currentDate}<span> </span>${writeCorrectMonth(month)}</span>`;
  setTimeout(showTime, 1000);
}

function writeCorrectDay(day){
  if(day == 1){
    return "monday";
  } else if (day == 2) {
    return "tuesday";
  } else if (day == 3) {
    return "wednesday";
  } else if (day == 4) {
    return "thursday";
  } else if (day == 5) {
    return "friday";
  } else if (day == 6) {
    return "saturday";
  } else if (day == 0) {
    return "sunday";
  } 
}

function writeCorrectMonth(month){
  if(month == 1){
    return "February";
  } else if (month == 2) {
    return "March";
  } else if (month == 3) {
    return "April";
  } else if (month == 4) {
    return "May";
  } else if (month == 5) {
    return "June";
  } else if (month == 6) {
    return "July";
  } else if (month == 7) {
    return "August";
  } else if (month == 8) {
    return "September";
  } else if (month == 9) {
    return "October";
  } else if (month == 10) {
    return "November";
  } else if (month == 11) {
    return "December";
  } else if (month == 0) {
    return "January";
  } 
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {

  let today = new Date(),
    hour = today.getHours();    

  if (hour < 12 && hour >= 6) {
    // Morning
    createImageSource()
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18 && hour >= 12) {
    // Afternoon
    createImageSource()
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24 && hour >= 18) {
    // Evening
    createImageSource()
    greeting.textContent = 'Good Evening, ';
  } else if (hour < 6 && hour >= 0){
    // Night
    createImageSource()
    greeting.textContent = 'Good Night, ';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') == '') {
    localStorage.setItem('name', "[Enter Name]");
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      startNameFunc(e.target.innerText);
      name.blur();
    }
  } else {
    startNameFunc(e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') == '') {
    localStorage.setItem('focus', "[Enter Focus]");
  } else {
    focusS.textContent = localStorage.getItem('focus');
  }
  
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      startFocusFunc(e.target.innerText);
      focusS.blur();
    }
  } else {
    startFocusFunc(e.target.innerText);
  }
}

function startNameFunc(text){
  if(text == ''){
    localStorage.setItem('name', '[Enter Name]');
    name.textContent = localStorage.getItem('name');
  }
}

function startFocusFunc(text){
  if(text == ''){
    localStorage.setItem('focus', '[Enter Focus]');
    focusS.textContent = localStorage.getItem('focus');
  }
}

function createLink(){
  var link = "E:\x2fSites\x2fWhymentum\x2fimgs\x2f";
  let check = new Date(),
    checkHours = check.getHours();

  if (checkHours < 12 && checkHours >= 6) {
    link += "morning\x2f"
  } else if (checkHours < 18 && checkHours >= 12) {
    link += "day\x2f"
  } else if (checkHours < 24 && checkHours >= 18) {
    link += "evening\x2f"
  } else if (checkHours < 6 && checkHours >= 0) {
    link += "night\x2f"
  }

  var imgNumber = "0";
  var imgIndex = localStorage.getItem('imgIndex');
  if(imgIndex.length == 1){
    imgNumber += imgIndex;
  }else{
    imgNumber = imgIndex;
  }
  link += imgNumber;
  link += ".jpg";
  return link;
}

//doChange
function doChange(Image){
  
  var link = createLink();

  var Image2 = document.getElementById('imgBg2');
  Image2.src = link;
  setTimeout(() => { Image2.style.opacity = 1; }, 10);
  setTimeout(() => { Image.src = link; }, 1020);
  setTimeout(() => { Image2.style.opacity = 0; }, 1050);
  
  localStorage.setItem('currentBG', Image.src);
}

function createImageSource(){
  var mainLink = createLink();
  var Image = document.getElementById('imgBg');
  Image.src = mainLink;
  return Image;
}

function increaseCounter(){

  var Image = createImageSource();

  var counter = localStorage.getItem('imgIndex');
  counter++;
  if(counter == 21){
    counter = 1;
  }
  localStorage.setItem('imgIndex', counter);

  doChange(Image);
  
}

//MEMES
var memeArray =
['Стремитесь не к успеху, а к ценностям, которые он дает', 'Надо любить жизнь больше, чем смысл жизни.',
'Начинать всегда стоит с того, что сеет сомнения', 'Неосмысленная жизнь не стоит того, чтобы жить',
'Пришла как-то раз улитка в бар', 'В моем словаре нет слова «невозможно».',
'Сколько людей - столько и мнений', 'Лучшая месть – огромный успех',
'Мы становимся тем, о чем мы думаем', 'Упади семь раз и восемь раз поднимись.',];

function changeMeme(){
  var number = Math.floor(Math.random() * 10);
  var line = memeArray[number];
  var text = document.getElementById('quote');
  text.textContent = line;
}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focusS.addEventListener('keypress', setFocus);
focusS.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();







