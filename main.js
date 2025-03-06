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
  <p class="lead">
    <a href="mbti.html" class="btn btn-lg btn-light fw-bold border-white bg-white">MBTI와 타로!</a>
  </p>`
)