const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    console.log(data);
    // Send data to server or database
});