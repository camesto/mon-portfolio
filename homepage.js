document.addEventListener("DOMContentLoaded", function () {
    const profileImg = document.querySelector(".profile-img");
    const container = document.querySelector(".container");

    profileImg.addEventListener("mouseover", function () {
        profileImg.style.transform = "rotate(5deg) scale(1.1)";
        container.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
    });

    profileImg.addEventListener("mouseout", function () {
        profileImg.style.transform = "rotate(0deg) scale(1)";
        container.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    });

    const socialButtons = document.querySelectorAll(".social-btn");
    socialButtons.forEach(btn => {
        btn.addEventListener("mouseover", function () {
            btn.style.transform = "translateY(-5px)";
            btn.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
        });

        btn.addEventListener("mouseout", function () {
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "none";
        });
    });
});
