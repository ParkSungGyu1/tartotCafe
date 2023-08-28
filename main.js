import data from './cards.js';

console.log(data);

let dataArr = data;
let cardData = dataArr.get[0];

$("#mainDesc").append(
    `<div class="text-center">
    <img src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/90/RWS_Tarot_00_Fool.jpg/220px-RWS_Tarot_00_Fool.jpg" class="img-fluid" alt="...">
  </div>
  <h1>${cardData.name}</h1>
  <p class="lead">${cardData.desc}</p>
  <p class="lead">
    <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">타로 전문상담</a>
  </p>`
)