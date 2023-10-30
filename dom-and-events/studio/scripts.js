// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function() {
    // Wait for all elements to load before attaching event handlers

    // Get references to the necessary elements
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rocket = document.getElementById("rocket");

    // Attach an event listener to the "Land" button
    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = "0 miles";
    });

    // Attach an event listener to the "Abort Mission" button
    abortButton.addEventListener('click', function() {
        const confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerText = "0 miles";
        }
    });

    // Attach event listeners to directional buttons
    upButton.addEventListener('click', function() {
        moveRocket(0, -10);
        updateShuttleHeight(10000);
    });

    downButton.addEventListener('click', function() {
        moveRocket(0, 10);
        updateShuttleHeight(-10000);
    });

    // Add functionality for other directional buttons (Right and Left) if needed

    function moveRocket(dx, dy) {
        // Calculate new position for the rocket image
        const rocketStyle = getComputedStyle(rocket);
        const rocketX = parseInt(rocketStyle.left, 10) + dx;
        const rocketY = parseInt(rocketStyle.top, 10) + dy;

        // Update the rocket's position
        rocket.style.left = rocketX + "px";
        rocket.style.top = rocketY + "px";
    }

    function updateShuttleHeight(change) {
        const currentHeight = parseInt(spaceShuttleHeight.innerText, 10);
        spaceShuttleHeight.innerText = (currentHeight + change) + " miles";
    }
});


