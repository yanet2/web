document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const navbar = document.querySelector(".navbar");
    const container = document.querySelector(".container");

    toggleBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
        container.classList.toggle("active");
    });

    // Manejo de selección de estacionamiento
    document.getElementById("parkingSelect").addEventListener("change", function() {
        document.querySelectorAll(".spot").forEach(spot => spot.classList.remove("selected"));
        const selectedSpot = document.getElementById(this.value);
        if (selectedSpot && !selectedSpot.classList.contains("occupied")) {
            selectedSpot.classList.add("selected");
        }
    });

    document.getElementById("toggleOccupied").addEventListener("click", function() {
        const selectedSpotId = document.getElementById("parkingSelect").value;
        if (selectedSpotId) {
            const selectedSpot = document.getElementById(selectedSpotId);
            if (selectedSpot) {
                selectedSpot.classList.toggle("occupied");
                selectedSpot.classList.remove("selected");
            }
        }
    });
});
