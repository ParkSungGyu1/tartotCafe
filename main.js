import data from './cards.js';

console.log(data);
const urlParameter = window.location.search;
console.log(urlParameter);

const urlParams = new URLSearchParams(urlParameter);

console.log(urlParams.get('num'));

let dataArr = data;
let cardData = dataArr[0];

$("#mainDesc").append(
    `<div class="text-center">
    <img src="${cardData.imgUrl}" class="img-fluid" alt="...">
  </div>
  <h1>${cardData.cardName}</h1>
  <p class="lead">${cardData.desc}</p>
  <p class="lead">
    <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">타로 전문상담</a>
  </p>`
)