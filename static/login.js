// Meteor Shower Effect in Three.js and JavaScript
const meteorShowerContainer = document.getElementById('meteor-shower-container');

// Function to create random meteor showers
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.top = `${Math.random() * 100}vh`;
    meteor.style.left = `${Math.random() * 100}vw`;
    meteor.style.animationDuration = `${Math.random() * 2 + 1}s`;
    meteor.style.animationDelay = `${Math.random() * 5}s`;
    meteorShowerContainer.appendChild(meteor);

    // Remove meteor after animation ends
    meteor.addEventListener('animationend', () => {
        meteor.remove();
    });
}

// Generate meteors continuously
setInterval(createMeteor, 150);

// Create a few initial meteors
for (let i = 0; i < 10; i++) {
    createMeteor();
}
