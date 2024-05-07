const projectSection = document.querySelector("#projects");
console.log(projectSection);
const projectsList = projectSection.querySelector("ul");
console.log(projectsList);

fetch("https://api.github.com/users/adryancore/repos").then((res) => {
    console.log(res);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
}).then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const project = document.createElement("li");
        project.innerText = data[i].name;
        projectsList.appendChild(project);
    }
})
.catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectSelection.appendChild(errorElement);
});