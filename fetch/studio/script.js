// TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(response => response.json())
        .then(data => {
            const astronauts = data;
            const container = document.querySelector("#container"); 

            astronauts.forEach(astronaut => {
                const astronautDiv = document.createElement("div");
                astronautDiv.classList.add("astronaut");

                const bioDiv = document.createElement("div");
                bioDiv.classList.add("bio");

                const h3 = document.createElement("h3");
                h3.textContent = `${astronaut.firstName} ${astronaut.lastName}`;

                const ul = document.createElement("ul");

                const hoursLi = document.createElement("li");
                hoursLi.textContent = `Hours in space: ${astronaut.hoursInSpace}`;

                const activeLi = document.createElement("li");
                activeLi.textContent = `Active: ${astronaut.active ? "true" : "false"}`;

                const skillsLi = document.createElement("li");
                skillsLi.textContent = `Skills: ${astronaut.skills.join(", ")}`;

                const avatarImg = document.createElement("img");
                avatarImg.classList.add("avatar");
                avatarImg.src = astronaut.picture;
                avatarImg.alt = `${astronaut.firstName} ${astronaut.lastName}`;

                ul.appendChild(hoursLi);
                ul.appendChild(activeLi);
                ul.appendChild(skillsLi);

                bioDiv.appendChild(h3);
                bioDiv.appendChild(ul);

                astronautDiv.appendChild(bioDiv);
                astronautDiv.appendChild(avatarImg);

                container.appendChild(astronautDiv);
            });

        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
