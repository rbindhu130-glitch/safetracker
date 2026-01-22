// Get form elements
const role = document.getElementById("role");
const imageSection = document.getElementById("imageSection");
const imageInput = document.getElementById("image");

// Show/hide image upload and make it required for volunteers
role.addEventListener("change", () => {
  if (role.value === "volunteer") {
    imageSection.style.display = "block";
    imageInput.required = true;
  } else {
    imageSection.style.display = "none";
    imageInput.required = false;
  }
});
