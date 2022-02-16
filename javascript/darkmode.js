var icon = document.getElementById("dark-mode-trigger");

        icon.onclick = function () {
            document.body.classList.toggle("darkmode");
            if (document.body.classList.contains("darkmode")) {
                icon.src = "sun.png";
            } else {
                icon.src = "moon-star.png";
            }
        }