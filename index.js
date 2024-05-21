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

// fetch a dog
fetch("https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_Q95ErQP72gUGM47PC45Cx7OEz6BEPyiIz4WnQOHNwyxVCoUQ971RomybV9ut6651")
    .then((res) => {
        if (!res.ok) {
        throw new Error("oh no! invalid");
    }
        return res.json();
})
    .then((data) => {
        console.log(data);

        dogContainer.innerHTML= "";

        const dogImgUrl = data[0].url;
        const dogImg = document.createElement("img");
        dogImg.src = dogImgUrl;

        console.log(data[0].breeds[0].name);
        const breedName  = data[0].breeds[0].name;
        const dogBreedTitle = document.createElement("h2");
        dogBreedTitle.innerText = breedName;

        const breedTemperament = document.createElement("p");
        breedTemperament.innerText =  data[0].breeds[0].temperament;

        dogContainer.appendChild(dogBreedTitle);
        dogContainer.appendChild(breedTemperament);
        dogContainer.appendChild(dogImg);
})

.catch((err) => {
    console.warn(err);
    });