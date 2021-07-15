function hamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.querySelectorAll(".showmore").forEach(function (p) {
    p.querySelector("a").addEventListener("click", function () {
        p.classList.toggle("show");
        this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
    });
});