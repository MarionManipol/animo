document.addEventListener("DOMContentLoaded", function() {
  const animoWallButton = document.querySelector("#animoWallButton");
  const profButton = document.querySelector("#profButton");
  const announcementsButton = document.querySelector("#announcementButton");
  
  animoWallButton.addEventListener("click", function() {
    window.location.href = "animo-wall.html";
  });

  profButton.addEventListener("click", function() {
    window.location.href = "profs.html";
  });

  announcementsButton.addEventListener("click", function() {
    window.location.href = "announcements.html";
  });

}
);

