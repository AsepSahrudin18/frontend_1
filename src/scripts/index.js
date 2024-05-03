import 'regenerator-runtime';
import data from '../public/data/DATA.json' assert { type: 'json' };
import '../styles/main.css';

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector("#toggle-dropdown");
    const navbar = document.querySelector(".navbar");
  
    logo.addEventListener("click", function () {
      navbar.classList.toggle("show-dropdown");
    });

    data.restaurants.forEach(r => {
      document.querySelector('#cards').innerHTML += `
      <div style="max-width:250px" class="card">
        <div class="relative bordered">
          <div class="absolute card-badge bordered">
            Kota ${r.city}
          </div>
          <img class="w-100 img-cover" src="${r.pictureId}" alt="${r.name}">
        </div>

        <div class="bordered">
          <div class="text-left my-15 h3 px-10">Rating: ${r.rating}</div>
          <div class="text-left my-15 h2 px-10">
          ${r.name}
          </div>
          <div class="text-container text-left my-15 px-10">
          ${r.description}
          </div>
        </div>
      </div>
      `;
    });

});