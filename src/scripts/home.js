/*import { auth, db } from "./appFB";
import { onAuthStateChanged } from "../functions/auth";
import { getUser } from "./getUser";*/



let isLogged = false;

// Split the CSV data into rows
const rows = csvData.split(';;');

// Remove the header row if present
if (rows.length > 0) {
  rows.shift();
}

// Get the container element where the HTML structures will be inserted
const container = document.querySelector('.recommended__cardlist');

// Loop through each row in the CSV data
for (const row of rows) {
  // Split the row into individual values
  const [title, url, type, image, desc] = row.split(';');

  // Create the HTML structure based on the template
  const card = document.createElement('div');
  card.classList.add('recommended__card');

  const cardImage = document.createElement('img');
  cardImage.src = image;
  cardImage.classList.add('recommended__image');
  card.appendChild(cardImage);

  const cardTitle = document.createElement('p');
  cardTitle.classList.add('recommended__subtitle');
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardDesc = document.createElement('p');
  cardDesc.classList.add('recommended__psmall');
  cardDesc.textContent = desc;
  card.appendChild(cardDesc);

  // Add the card to the container
  container.appendChild(card);
}
loadRecommendations();