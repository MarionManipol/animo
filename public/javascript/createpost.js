const composeButton = document.getElementById('compose');
  const overlay = document.getElementById('form-overlay');
  const uploadForm = document.getElementById('submit-post');

  function showOverlay() {
    overlay.style.display = 'block';
  }

  function hideOverlay() {
    overlay.style.display = 'none';
    //document.getElementById('text-input').value = '';
    //document.getElementById('image-file').value = '';
  }

  composeButton.addEventListener('click', showOverlay);

  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      hideOverlay();
    }
  });

  class User {
    constructor(name, idNumber){
      this.profile = 'site-assets/you.jpg';
      this.name = name;
      this.idNumber = idNumber;
    }
  }

  let currentUser = new User("Hubby S. Nubby", "12124303");

  $('#user-name').text(currentUser.name);
  $('#user-ID').text(currentUser.idNumber);
  class Post {
    constructor(textContent, imageContent) {
      this.profile = currentUser.profile;
      this.name = currentUser.name;
      this.date = '06/26/2023';
      this.textContent = textContent;
      this.imageContent = imageContent;
      this.likes = 0;
      this.comments = 0;
    }
  }

  document.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#submit-post")?.addEventListener("click", function(e){
      e.preventDefault();  // Prevents page refresh
      hideOverlay();
    });

   
  });