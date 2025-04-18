import data from './cards.js';

const urlParameter = window.location.search;

const urlParams = new URLSearchParams(urlParameter);
const number = urlParams.get('num');


let dataArr = data;
let cardData = dataArr[number];

$("#mainDesc").append(
    `<div class="text-center">
    <img src="${cardData.imgUrl}" class="img-fluid" alt="...">
  </div>
  <h1>${cardData.cardName}</h1>
  <p class="lead">${cardData.desc}</p>
  <br>
  <br>
  <h2>${cardData.cardName}의 성격</h2>
  <p class="lead">${cardData.personality}</p>
  <br>
  <br>
  <h2>${cardData.cardName}의 연애타입</h2>
  <p class="lead">${cardData.love}</p>
  <br>
  <br>
  <h2>${cardData.cardName}의 직업타입</h2>
  <p class="lead">${cardData.job}</p>
  <br>
  <br>
  <h2>${cardData.cardName}의 건강조심</h2>
  <p class="lead">${cardData.health}</p>
  <p class="lead">
    <a href="mbti.html" class="btn btn-lg btn-light fw-bold border-white bg-white">MBTI와 타로!</a>
  </p>`
)