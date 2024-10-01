// document.getElementById("loginForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     let username = document.getElementById("username").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     // Create a FormData object to send form data
//     let formData = new FormData();
//     formData.append("username", username);
//     formData.append("email", email);
//     formData.append("password", password);

//     // Send a POST request to the PHP script
//     fetch("register.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             // Registration successful, show an alert
//             alert(data.message);
//             // Optionally, you can redirect the user to another page after success
//             // window.location.href = 'login.html';
//              // Redirect to a login page
//         } else {
//             // Registration failed, show an alert with the error message
//             alert(data.message);
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// });