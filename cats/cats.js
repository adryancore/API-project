const catContainer = document.getElementById("catContainer");

// fetch a cat 
fetch("https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_I8aBnXYvGao92mK7EDF65eLqXMaLdVxLTWk3vnsdZVSlbWGeLE3XadfDyIZHtJa4")
    .then((res) => {
        if (!res.ok) {
        throw new Error("oh no! invalid");
    }
        return res.json();
})
    .then((data) => {
        console.log(data);

        catContainer.innerHTML= "";

        const catImgUrl = data[0].url;
        const catImg = document.createElement("img");
        catImg.src = catImgUrl;

        console.log(data[0].breeds[0].name);
        const breedName  = data[0].breeds[0].name;
        const catBreedTitle = document.createElement("h2");
        catBreedTitle.innerText = breedName;

        const breedTemperament = document.createElement("p");
        breedTemperament.innerText =  data[0].breeds[0].temperament;

        catContainer.appendChild(catBreedTitle);
        catContainer.appendChild(breedTemperament);
        catContainer.appendChild(catImg);
})

.catch((err) => {
    console.warn(err);
    });