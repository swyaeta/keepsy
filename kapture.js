const photo = document.getElementById("photo");
const photoPreview = document.getElementById("imgpreview");

photo.addEventListener("change", () => {
    const file = photo.files[0];

    if (file) {
        photoPreview.src = URL.createObjectURL(file);
    }
});
const removePhoto = document.getElementById("removeimg");

removePhoto.addEventListener("click", () => {
    photo.value = "";
    photoPreview.src = "";
});