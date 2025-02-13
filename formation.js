document.addEventListener("DOMContentLoaded", function () {
    const formationItems = document.querySelectorAll(".formation-item");
    
    formationItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
        });

        item.addEventListener("mouseout", function () {
            item.style.boxShadow = "none";
        });
    });
});
