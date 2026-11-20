
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const response = JSON.parse(xhr.responseText);

            const message = document.getElementById('message');

            message.textContent = response.message;

            const form = document.getElementById('signup-form');
            form.reset();

        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send();
});
