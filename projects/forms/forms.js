
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    if (!fullname || !email || !password) {
        alert("Please complete all required fields.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password,
        birthdate: document.getElementById('birthdate').value,
        about: document.getElementById('about').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || "",
        course: document.getElementById('course').value,
        remember: document.getElementById('remember').checked
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
