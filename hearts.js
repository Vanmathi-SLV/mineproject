// JavaScript to create floating hearts dynamically
const heartContainer = document.getElementById('heartContainer');

function createHeart() {
    const heart = document.createElement('div');
    const size = Math.random() * 20 + 20; // Random size between 20px and 40px
    const left = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    const rotation = Math.random() * 360; // Random rotation angle

    heart.classList.add('heart');
    heart.style.left = `${left}vw`; // Set random horizontal position
    heart.style.width = `${size}px`; // Set random size
    heart.style.height = `${size}px`;
    heart.style.animationDuration = `${duration}s`; // Set random duration

    // Alternate between green and white hearts
    if (Math.random() > 0.5) {
        heart.classList.add('green-heart');
    } else {
        heart.classList.add('white-heart');
    }

    // Append the heart to the container
    heartContainer.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generate a new heart every 500ms
setInterval(createHeart, 500);
