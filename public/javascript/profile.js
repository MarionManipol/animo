// Get the user profile and banner elements
const userProfile = document.querySelector('.user-profile');
const userBanner = document.querySelector('.user-banner');
// Add click event listeners to the profile and banner elements
userProfile.addEventListener('click', showFullImage);
userBanner.addEventListener('click', showFullImage);
// Function to show the full image when clicked
function showFullImage(event) {
  // Get the source of the clicked image
  const imageSource = event.target.getAttribute('src');

  // Create a new image element for the full view
  const fullImage = document.createElement('img');
  fullImage.setAttribute('src', imageSource);
  fullImage.classList.add('full-image');

  // Create a container element for the modal overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Append the image to the overlay
  overlay.appendChild(fullImage);

  // Append the overlay to the body
  document.body.appendChild(overlay);

  // Add a click event listener to the overlay to close it
  overlay.addEventListener('click', hideFullImage);
}

// Function to hide the full image when clicked outside
function hideFullImage(event) {
  // Remove the overlay element from the body
  event.target.remove();
}
