// document.getElementById("loginForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;

//     let formData = new FormData();
//     formData.append("email", email);
//     formData.append("username", username);
//     formData.append("password", password);

//     fetch("process.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             // Login successful, check user role and redirect accordingly
//             if (data.role === "admin") {
//                 // Redirect to admin dashboard
//                 window.location.href = 'admin.html';
//             } else if (data.role === "user") {
//                 // Redirect to user dashboard
//                 window.location.href = 'user.html';
//             } else {
//                 // Role is undefined or unknown
//                 alert("Invalid role. Please contact the administrator.");
//             }
//         } else {
//             // Login failed, show an error alert
//             alert(data.message);
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// });

// navbar js:
document.addEventListener("DOMContentLoaded", function() {
    const smallMenu = document.getElementById("small-menu-nav");
    const sMenuIcon = document.getElementById("s-menu");
    const closeIcon = document.getElementById("fa-close");

    sMenuIcon.addEventListener("click", function() {
        smallMenu.style.display = "flex";
    });

    closeIcon.addEventListener("click", function() {
        smallMenu.style.display = "none";
    });
});
