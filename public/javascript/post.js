//input fields and buttons
const submitBtn = document.querySelector("#submit-post")
//forms
const postForm = document.forms.postForm;
//date
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

submitBtn?.addEventListener("click", async function(e){
  e.preventDefault();

  console.log('clicked submit');
  const url = window.location.href + '/submit';
  await fetch(url,{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
      username: "Marion Jose S. Manipol",
      profile_picture: "profile-1.jpeg",
      date: formattedDate,
      content: postForm['text-input'].value
    })
  })
  .then((res)=>{
    if (res.status == 200){window.location.href = '/'}
  });
})

$(document).ready(() => {
  $('.post-heart').click(async function() {
      const postId = $(this).attr("data-post-id");
      var counter = $(this).parents().children()[1]
      try {
          const response = await fetch('/animo-page/upvote', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ _id: postId }),
          });

          if (response.ok) {
              const data = await response.json();
              // Assuming you have a DOM element that displays the downvotes count
              // You can update it here based on the response data
              counter.innerHTML = `<strong>${data.updatedPost.likes}</strong> Likes`
          } else {
              console.error('Failed to like post:', response.statusText);
          }
      } catch (error) {
          console.error('Error upvoting:', error);
      }
  })

})

/*
function likePost() {
  // Get all the post-heart elements
  const postHearts = document.querySelectorAll('.post-heart');

  
  // Iterate over each post-heart element
  postHearts.forEach((postHeart) => {
    // Get the likes count element within the current post
    const likesCount = postHeart.nextElementSibling.firstElementChild;

    // Initialize the like count and like state for the current post
    let likeCount = parseInt(likesCount.textContent);
    let isLiked = false;

    // Add a click event listener to the current post-heart element
    postHeart.addEventListener('click', () => {
      if (isLiked) {
        // If post is already liked, decrease the like count and update the heart icon
        likeCount--;
        postHeart.classList.remove('liked');
      } else {
        // If post is not liked, increase the like count and update the heart icon
        likeCount++;
        postHeart.classList.add('liked');
      }

      // Update the likes count element with the new value
      likesCount.textContent = likeCount;

      // Toggle the like state
      isLiked = !isLiked;
    });
  });
}

// Call the likePost function to initialize the like functionality
likePost();
*/
// Get all elements with the class "post-image"
var postImages = document.getElementsByClassName("post-image");

// Add click event listener to each post image
for (var i = 0; i < postImages.length; i++) {
  postImages[i].addEventListener("click", showEnlargedImage);
}

// Event listener function to display the enlarged image
function showEnlargedImage(event) {
  // Create a new image element
  var enlargedImage = document.createElement("img");
  
  // Set the source of the enlarged image to the clicked image source
  enlargedImage.src = event.target.src;
  
  // Add class names to the enlarged image for styling
  enlargedImage.className = "full-image";
  
  // Create a container element to hold the enlarged image
  var imageContainer = document.createElement("div");
  
  // Add class names to the image container for styling
  imageContainer.className = "overlay";
  
  // Append the enlarged image to the image container
  imageContainer.appendChild(enlargedImage);
  
  // Append the image container to the body of the document
  document.body.appendChild(imageContainer);
  
  // Add a click event listener to the image container to close the enlarged image
  imageContainer.addEventListener("click", function() {
    // Remove the image container from the document body
    document.body.removeChild(imageContainer);
  });
}

function addImageClickListener() {
  var images = document.getElementsByClassName("post-image");

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", showEnlargedImage);
  }
}
