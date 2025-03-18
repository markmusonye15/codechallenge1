document.addEventListener("DOMContentLoaded", main);

// Ramen data array
const ramens = [
  {
    id: 1,
    name: "Gyukotsu Ramen",
    restaurant: "Ichiran",
    image: "images/gyukotsu.jpg",
    rating: 5,
    comment: "Savory and rich!",
  },
  {
    id: 2,
    name: "Kojiro Ramen",
    restaurant: "Menya",
    image: "images/kojiro.jpg",
    rating: 4,
    comment: "Full of umami!",
  },
  {
    id: 3,
    name: "Naruto Ramen",
    restaurant: "Ramen-ya",
    image: "images/naruto.jpg",
    rating: 3,
    comment: "Great broth but a bit salty.",
  },
  {
    id: 4,
    name: "Nirvana Ramen",
    restaurant: "Nirvana Kitchen",
    image: "images/nirvana.jpg",
    rating: 5,
    comment: "Best ramen experience!",
  },
  {
    id: 5,
    name: "Shoyu Ramen",
    restaurant: "Ramen House",
    image: "images/shoyu.jpg",
    rating: 4,
    comment: "Classic taste!",
  },
];

// Function to display ramen images in the menu
function displayRamens() {
  const ramenMenu = document.querySelector("#ramen-menu");
  ramenMenu.innerHTML = ""; // Clear previous elements

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.classList.add("ramen-img");

    img.addEventListener("click", () => showRamenDetails(ramen));

    ramenMenu.appendChild(img);
  });

  // Display the first ramen by default
  if (ramens.length > 0) showRamenDetails(ramens[0]);
}

// Function to display ramen details (only ONE image)
function showRamenDetails(ramen) {
  document.querySelector(".ramen-name").textContent = ramen.name;
  document.querySelector("#ramen-rating").textContent = ramen.rating;
  document.querySelector("#ramen-comment").textContent = ramen.comment;

  // Replace ramen image in details section
  const ramenImageContainer = document.querySelector("#ramen-images");
  ramenImageContainer.innerHTML = ""; // Clear old images

  const img = document.createElement("img");
  img.src = ramen.image;
  img.classList.add("ramen-images");

  ramenImageContainer.appendChild(img);
}

// Function to handle new ramen submission
function addSubmitListener() {
  document.querySelector("#new-ramen").addEventListener("submit", (e) => {
    e.preventDefault();

    const newRamen = {
      id: ramens.length + 1,
      name: document.querySelector("#name").value,
      restaurant: document.querySelector("#restaurant").value,
      image: document.querySelector("#image").value,
      rating: document.querySelector("#new-rating").value,
      comment: document.querySelector("#new-comment").value,
    };

    ramens.push(newRamen);
    displayRamens();
    showRamenDetails(newRamen);

    document.querySelector("#new-ramen").reset();
  });
}

// Initialize the app
function main() {
  displayRamens();
  addSubmitListener();
}
