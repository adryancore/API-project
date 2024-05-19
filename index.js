const catContainer = document.getElementById("catContainer");
const fetchCatButton = document.getElementById("fetchCatButton");

fetchCatButton.addEventListener("click", () => {

    catContainer.innerHTML = "";

    fetch("https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_I8aBnXYvGao92mK7EDF65eLqXMaLdVxLTWk3vnsdZVSlbWGeLE3XadfDyIZHtJa4")
    .then((res) => {
        if (!res.ok) {
        throw new Error("oh no! invalid");
    }
        return res.json();
})
    .then((data) => {
        console.log(data);
        const catImgUrl = data[0].url;
        const catImg = document.createElement("img");
        catImg.src = catImgUrl;

        console.log(data[0].breeds[0].name);
        const breedName  = data[0].breeds[0].name;
        const catBreedTitle = document.createElement("h2");
        catBreedTitle.innerText = breedName;

        const breedDescription = document.createElement("p");
        breedDescription.innerText =  data[0].breeds[0].description;

        catContainer.appendChild(catBreedTitle);
        catContainer.appendChild(breedDescription);
        catContainer.appendChild(catImg);
})

.catch((err) => {
    console.warn(err);
    });
});

// const dogContainer = document.getElementById("dogContainer");
// const fetchDogButton = document.getElementById("fetchDogButton");

// fetchDogButton.addEventListener("click", () => {

//     dogContainer.innerHTML = "";

//     fetch("https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_Q95ErQP72gUGM47PC45Cx7OEz6BEPyiIz4WnQOHNwyxVCoUQ971RomybV9ut6651")
//     .then((res) => {
//         if (!res.ok) {
//         throw new Error("oh no! invalid");
// }
//         return res.json();
// })
//     .then((data) => {
//         console.log(data);
//         const dogImgUrl = data[0].url;
//         const dogImg = document.createElement("img");
//         dogImg.src = dogImgUrl;

//         console.log(data[0].breeds[0].name);
//         const breedName  = data[0].breeds[0].name;
//         const dogBreedTitle = document.createElement("h2");
//         dogBreedTitle.innerText = breedName;

//         const breedDescription = document.createElement("p");
//         breedDescription.innerText =  data[0].breeds[0].description;

//         dogContainer.appendChild(dogBreedTitle);
//         dogContainer.appendChild(breedDescription);
//         dogContainer.appendChild(dogImg);
// })