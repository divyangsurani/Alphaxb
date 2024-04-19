const openButton = document.querySelector("[data-open-modal]")
  const closeButton = document.querySelector("[data-close-modal]")
  const modal = document.querySelector("[data-modal]")

  openButton.addEventListener("click", () => {
    modal.showModal()
  })

  closeButton.addEventListener("click", () => {
    modal.close()
  })

  document.addEventListener("DOMContentLoaded", () => {
    // Function to update the background image
    function updateBackgroundImage(imageName) {
      document.body.style.backgroundImage = `url(/images/${imageName}.png)`;
    }
  
    // Function to add options to the background select
    function populateBackgroundOptions() {
      const backgroundSelect = document.getElementById("background-select");
  
      // List of descriptive image names
      const imageNames = ["Cozy", "Twillight", "Futuristic", "Gracile", "Tornado", "Rainy", "Redemption", "NetRunner", "Ominous"];
  
      // Populate options
      imageNames.forEach((imageName) => {
        const option = document.createElement("option");
        option.value = imageName;
        option.textContent = imageName;
        backgroundSelect.appendChild(option);
      });
  
      // Event listener for background change
      backgroundSelect.addEventListener("change", () => {
        const selectedImage = backgroundSelect.value.replace(/\s+/g, '-').toLowerCase();
        updateBackgroundImage(selectedImage);
      });
    }
  
    // Call the function to populate background options
    populateBackgroundOptions();
  });
  