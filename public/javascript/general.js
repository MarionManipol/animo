document.addEventListener("DOMContentLoaded", function() {
  const animoWallButton = document.querySelector("#animoWallButton");
  const profButton = document.querySelector("#profButton");
  const announcementsButton = document.querySelector("#announcementButton");
  const userButton = document.querySelector("#userprofile");
  
  animoWallButton.addEventListener("click", function() {
    window.location.href = "animo-page";
  });

  profButton.addEventListener("click", function() {
    window.location.href = "professors-page";
  });

  announcementsButton.addEventListener("click", function() {
    window.location.href = "announcement-page";
  });

  userButton.addEventListener("click", function(){
    window.location.href = "profile-page";
  });
}
);

