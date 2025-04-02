// Sidebar toggle functionality
document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
    document.querySelector(".content").classList.toggle("active");
});

// Apply button redirection
document.addEventListener("DOMContentLoaded", function () {
    const applyButtons = document.querySelectorAll(".apply-btn");

    applyButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "apply.html";
        });
    });
});
