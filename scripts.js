document.addEventListener('DOMContentLoaded', () => {
    // Interactive Stories
    const storiesSection = document.getElementById('stories');
    storiesSection.innerHTML = `
        <h3>The Haunted House</h3>
        <p>You stand before a creepy old house. Do you enter?</p>
        <button id="enter">Enter</button>
        <button id="leave">Leave</button>
    `;

    document.getElementById('enter').addEventListener('click', () => {
        alert('You enter the house and hear strange noises...');
    });

    document.getElementById('leave').addEventListener('click', () => {
        alert('You decide to leave. Maybe another time...');
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
    });
});