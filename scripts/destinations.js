// scripts/destinations.js

const destinations = [
    {
        name: "Palawan",
        image: "images/palawan.jpeg",
        alt: "Palawan",
        description: "Known for its limestone cliffs and crystal-clear lagoons, Palawan is a paradise on Earth."
    },
    {
        name: "Siargao",
        image: "images/siargao.jpeg",
        alt: "Siargao",
        description: "The surfing capital of the Philippines, perfect for adventure and beach lovers alike."
    },
    {
        name: "Banaue",
        image: "images/banaue.jpeg",
        alt: "Banaue Rice Terraces",
        description: "Marvel at the 2,000-year-old rice terraces carved into the mountains by ancient Filipinos."
    }
];
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Increment the review count stored in localStorage
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    // Update the review count on the page
    document.getElementById("reviewCount").textContent = count;

    // Optionally, show a success message or reset the form
    alert("Thank you for subscribing! Your subscription count is now: " + count);

    // Reset the form
    document.getElementById("newsletterForm").reset();
}

// Add event listener to the form to run the function when it's submitted
document.getElementById("newsletterForm").addEventListener("submit", handleFormSubmit);

// Set initial review count on page load
document.addEventListener("DOMContentLoaded", function () {
    const count = Number(localStorage.getItem("reviewCount")) || 0;
    document.getElementById("reviewCount").textContent = count;
});


function loadDestinations() {
    const container = document.querySelector(".destination-cards");
    if (!container) return;

    destinations.forEach(dest => {
        const isFavorite = localStorage.getItem(dest.name) === "true";

        const card = document.createElement("article");
        card.classList.add("destination-card");

        card.innerHTML = `
      <img src="${dest.image}" alt="${dest.alt}" loading="lazy">
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
      <button class="favorite-btn ${isFavorite ? 'favored' : ''}" data-name="${dest.name}">
        ${isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
      </button>
    `;

        container.appendChild(card);
    });

    addFavoriteListeners();
}

function addFavoriteListeners() {
    document.querySelectorAll(".favorite-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.name;
            const isFav = localStorage.getItem(name) === "true";

            if (isFav) {
                localStorage.setItem(name, "false");
                btn.textContent = "☆ Add to Favorites";
                btn.classList.remove("favored");
            } else {
                localStorage.setItem(name, "true");
                btn.textContent = "★ Favorited";
                btn.classList.add("favored");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", loadDestinations);

// Update footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    const contactInfo = {
        name,
        email,
        subject,
        message,
        submittedAt: new Date().toISOString()
    };

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contactInfo);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Thank you for contacting us!");
    this.reset();
});

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the form from submitting
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        alert(`Thank you, ${name}! You've subscribed with ${email}.`);
        this.reset(); // Clear the form
    });
}



// Set year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
