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
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    // Attaches an event listener to the "Take off" button
    takeoffButton.addEventListener('click', function() {
    // Uses window.confirm to get user confirmation
    const isReadyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if (isReadyForTakeoff) {
        // Updates flight status
        flightStatus.innerHTML = "Shuttle in flight";

        // Changes the background color to blue
        shuttleBackground.style.backgroundColor = "blue";

        // Increases shuttle height by 10,000 miles
        const currentHeight = parseInt(spaceShuttleHeight.innerText, 10);
        spaceShuttleHeight.innerText = (currentHeight + 10000) + " miles";
    }
});

    // Attached an event listener to the "Land" button
    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = "0 miles";
    });

    // Attached an event listener to the "Abort Mission" button
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

    leftButton.addEventListener('click', function() {
        console.log("Left button clicked"); // Add this line
        moveRocket(-10, 0);
    });
    
    rightButton.addEventListener('click', function() {
        console.log("Right button clicked"); // Add this line
        moveRocket(10, 0);
    });
  

    function moveRocket(dx, dy) {
        // Calculates new position for the rocket image
        const rocketStyle = getComputedStyle(rocket);
        const rocketX = parseInt(rocketStyle.left, 10) + dx;
        const rocketY = parseInt(rocketStyle.top, 10) + dy;

        // Updates the rocket's position
        rocket.style.left = rocketX + "px";
        rocket.style.top = rocketY + "px";
    }

    function updateShuttleHeight(change) {
        const currentHeight = parseInt(spaceShuttleHeight.innerText, 10);
        spaceShuttleHeight.innerText = (currentHeight + change) + " miles";
    }
});


