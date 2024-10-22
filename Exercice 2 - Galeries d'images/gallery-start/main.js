const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Déclarer le tableau de noms de fichiers d'images */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Déclarer le texte alternatif pour chaque fichier image */

const alts = {
  "pic1.jpg": "Gros plan oeil humain",
  "pic2.jpg": "Rocher qui ressemble à une vague",
  "pic3.jpg": "Pensées violettes et blanches",
  "pic4.jpg": "Section de mur du tombeau du pharaon",
  "pic5.jpg": "Grand papillon sur une feuille",
};

/* Parcourir les images en boucle */
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  newImage.setAttribute("alt", alts[images]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Câblage du bouton Assombrir/Éclaircir */

// btn.addEventListener("click", () => {
//   const btnClass = btn.getAttribute("class");
//   if (btnClass === "dark") {
//     btn.setAttribute("class", "light");
//     btn.textContent = "Eclaircir";
//     overlay.style.backgroundColor = "rgba (0,0,0,0.5)";
//   } else {
//     btn.setAttribute("class", "dark");
//     btn.textContent = "Assombrir";
//     overlay.style.backgroundColor = "rgba (0,0,0,0)";
//   }
// });

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Eclaircir';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Assombrir';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
