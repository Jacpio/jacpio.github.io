const popup = document.getElementById("popup");
const img = popup.children[0];
const close = popup.children[1];
const images = document.getElementsByTagName("img");
for (let i = 1; i < images.length; i++) {
    images[i].addEventListener("click", () =>{
        if(images[i].classList.contains("mobile")){
            img.style.width = "auto";
            img.style.height = "80vh";
        }
        img.setAttribute("src",  images[i].src);
        popup.style.display = "block";
    })
}
close.addEventListener("click", ()=>{
    popup.style.display = "none";
})