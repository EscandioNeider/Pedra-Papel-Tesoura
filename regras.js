function janelaRegras() {
    var regrasSection = document.getElementById("Regras");
    if (regrasSection.style.display === "none" || regrasSection.style.display === "") {
        regrasSection.style.display = "block";
    } else {
        regrasSection.style.display = "none";
    }
}