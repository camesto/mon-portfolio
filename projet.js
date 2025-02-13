document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none"; // Assure que toutes les modales sont cachées au départ
    });
});

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Fermer la modal en cliquant en dehors de la fenêtre
window.onclick = function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
