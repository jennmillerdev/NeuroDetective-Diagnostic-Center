// Stores the total time for the countdown timer.
let timeLeft = 90; // 90 seconds = 1 minute and 30 seconds

// Gets the timer span from the HTML.
const timer = document.getElementById("timer");

// Starts a timer that repeats every 1 second (1000 milliseconds).
//create a function but do not give it a name, this is called an anonymous function. 
const countdown = setInterval(function ()
{
    // Convert the remaining time into minutes.
    let minutes = Math.floor(timeLeft / 60);

    // Calculate the remaining seconds.
    let seconds = timeLeft % 60;

    // Update the timer displayed on the webpage.
    timer.textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Decrease the timer by one second.
    timeLeft--;

    // Check if the timer has reached zero.
    if (timeLeft < 0)
    {
        // Stop the countdown timer.
        clearInterval(countdown);

        // Display a message when time expires.
        timer.textContent = "Time's Up!";
    }

}, 
// Set the interval to 1 second (1000 milliseconds).
1000);

// Stores the Diagnostic Results section.
const diagnosticResults = document.getElementById("diagnosticResults");

// Stores the Stroke Detection button.
const strokeButton = document.getElementById("strokeButton");

// Stores the Brain Protection button.
const protectionButton = document.getElementById("protectionButton");

// Add an event listener to the Stroke Detection button.
strokeButton.addEventListener("click", showStrokeOptions);

// Add an event listener to the Brain Protection button.
protectionButton.addEventListener("click", showProtectionOptions);

// ======================================================================//
//                        Stroke Detection Options
// Displays the Stroke Detection menu inside the diagnosticResults section.
// ======================================================================//
function showStrokeOptions()
{
    // Replace everything inside the diagnosticResults section.
    // The old content is removed and this new HTML is displayed.
    diagnosticResults.innerHTML =

    // backticks allow for multi-line strings in JavaScript. making it easier to write HTML inside JavaScript.
    `
        <div class="card">
            <h2>🩸 Stroke Detection</h2>

            <p>
                The patient's symptoms may indicate a stroke.
                Select one of the following diagnostic tests.
            </p>

            <button id="bloodFlowButton">
                Blood Flow Scanner
            </button>

            <button id="brainScanButton">
                Brain Imaging Scan
            </button>
        </div>
    `;

    // -------------------------------------------------------------- //
    // Store references to the NEW buttons that were just created.
    // These buttons did not exist until innerHTML added them.
    // -------------------------------------------------------------- //
    const bloodFlowButton = document.getElementById("bloodFlowButton");
    const brainScanButton = document.getElementById("brainScanButton");

    // --------------------------------------------------------------//
    // Wait for the player to click one of the scanner buttons.
    // When clicked, call the appropriate function.
    // --------------------------------------------------------------//
    bloodFlowButton.addEventListener("click", showBloodFlowResults);
    brainScanButton.addEventListener("click", showBrainScanResults);
}


// ======================================================================//
//                        Brain Protection button
// Displays the Brain Protection menu inside the diagnosticResults section.
// ======================================================================//
function showProtectionOptions()
{
     // Replace everything inside the diagnosticResults section.
    // The old content is removed and this new HTML is displayed.
    diagnosticResults.innerHTML = 
    `
        <div class="card">
            <h2>🛡 Brain Protection Analysis</h2>

            <p>
                The patient's symptoms may involve damage to the brain's protective systems.
                Select a diagnostic test.
            </p>
            
            <button id="bbbButton">
                Blood-Brain Barrier Scanner
            </button>

            <button id="neuralButton">
                Neural Signal Test
            </button>
        </div>
    `;

    // -------------------------------------------------------------- //
    // Store references to the NEW buttons that were just created.
    // These buttons did not exist until innerHTML added them.
    // -------------------------------------------------------------- //
    const bbbButton = document.getElementById("bbbButton");
    const neuralButton = document.getElementById("neuralButton");

    // --------------------------------------------------------------//
    // Wait for the player to click one of the scanner buttons.
    // When clicked, call the appropriate function.
    // --------------------------------------------------------------//
    bbbButton.addEventListener("click", showBBBResults);
    neuralButton.addEventListener("click", showNeuralResults );
}

// ======================================================================//
//                    Blood Flow Scanner Results
// Displays the result of the Blood Flow Scanner test.
// ======================================================================//
function showBloodFlowResults()
{
    // Randomly decides the outcome.
    // 0 = correct diagnosis
    // 1 = delayed diagnosis
    let result = Math.floor(Math.random() * 2);

    // use an if statement to randomly decide if the diagnosis is correct or delayed.
    if (result === 0)
    {
        diagnosticResults.innerHTML =
        `
        <div class="card">

            <h2>🩸 Blood Flow Scanner Results</h2>

            <h3>✅ Successful Diagnosis</h3>
            <p>
                The scanner analyzes blood circulation and oxygen
                delivery throughout the brain.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>Reduced blood flow detected</li>
                <li>Oxygen delivery to brain tissue is decreased</li>
                <li>Possible blocked blood vessel identified</li>
                <li>Neurons are at risk of damage</li>
            </ul>

            <h3>Diagnosis:</h3>
            <p>
                🔴 Ischemic Stroke
            </p>

            <h3>Neuroscience Explanation:</h3>
            <p>
                The scanner detected a failure in neurovascular
                coupling. The brain was unable to deliver enough
                blood and oxygen to active neurons, increasing the
                risk of brain tissue damage.
            </p>

            <h3>Patient Status:</h3>
            <p>
                Treatment can begin quickly. Brain damage may be reduced.
            </p>
        </div>
        `;
    }
    else
    {
        // Remove 10-20 seconds from the timer as a penalty
        let timePenalty = Math.floor(Math.random() * 11) + 10;
        timeLeft -= timePenalty;

        diagnosticResults.innerHTML =
        `
        <div class="card">

            <h2>🩸 Blood Flow Scanner Results</h2>

            <h3>❌ No Abnormal Blood Flow Detected</h3>
            <p>
                The scanner completed its analysis but did not detect
                a clear blood flow problem.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>Normal blood circulation detected</li>
                <li>No blocked vessel identified</li>
                <li>Oxygen delivery appears stable</li>
                <li>Stroke cause remains unknown</li>
            </ul>

            <h3>Diagnostic Status:</h3>
            <p>
                The test did not identify the patient's emergency condition.
            </p>

            <h3>Time Penalty:</h3>
            <p>
                ⚠ ${timePenalty} seconds lost due to delayed diagnosis.
            </p>

            <h3>Patient Status:</h3>
            <p>
                The patient's symptoms continue while another diagnostic
                pathway is needed.
            </p>
        </div>
        `;
    }
}

// ======================================================================//
//                        Brain Imaging Scan
// Displays the Brain Imaging analysis inside the diagnosticResults section.
// ======================================================================//
function showBrainScanResults()
{
   let result = Math.floor(Math.random() * 2);

   // use an if statement to randomly decide if the diagnosis is correct or delayed.
   if (result === 0)
   {
       diagnosticResults.innerHTML =
       `
       <div class="card">
            <h2>🧠 Brain Imaging Scan Results</h2>

            <h3>✅ Successful Diagnosis</h3>
            <p>
                The scan analyzes brain tissue for signs of damage
                or abnormal activity.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>Ischemic stroke detected in the left hemisphere</li>
                <li>Signs of neuronal damage is present in the affected area</li>
                <li>Blood flow disruption confirmed</li>
                <li>Immediate treatment is recommended</li>
            </ul>

            <h3>Diagnosis:</h3>
            <p>
                🔴 Ischemic Stroke
            </p>

            <h3>Neuroscience Explanation:</h3>
            <p>
                The scan revealed a blockage in a blood vessel that
                has caused a lack of oxygen to the brain tissue,
                resulting in neuronal injury.
            </p>

            <h3>Patient Status:</h3>
            <p>
                Treatment can begin quickly. Brain damage may be reduced.                
            </p>
       </div>
       `;
    }
    else
    {
        // Remove 10-20 seconds from the timer as a penalty
        let timePenalty = Math.floor(Math.random() * 11) + 10;
        timeLeft -= timePenalty;

        diagnosticResults.innerHTML =
        `
        <div class="card">

            <h2>🧠 Brain Imaging Scan Results</h2>

            <h3>❌ No Abnormal Activity Detected</h3>
            <p>
                The scan completed its analysis but did not detect
                a clear sign of brain damage.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>Normal brain tissue activity detected</li>
                <li>No blocked vessel identified</li>
                <li>Oxygen delivery appears stable</li>
                <li>Stroke cause remains unknown</li>
            </ul>

            <h3>Diagnostic Status:</h3>
            <p>
                The test did not identify the patient's emergency condition.
            </p>

            <h3>Time Penalty:</h3>
            <p>
                ⚠ ${timePenalty} seconds lost due to delayed diagnosis.
            </p>

            <h3>Patient Status:</h3>
            <p>
                The patient's symptoms continue while another diagnostic
                pathway is needed.
            </p>
        </div>
        `;
    }
}

// ======================================================================//
//                        Blood-Brain Barrier Scanner
// Displays the Blood-Brain Barrier analysis inside the diagnosticResults section.
// ======================================================================//
function showBBBResults()
{
   // Randomly decides the outcome.
   // 0 = correct diagnosis
   // 1 = delayed diagnosis
   let result = Math.floor(Math.random() * 2);

   // use an if statement to randomly decide if the diagnosis is correct or delayed.
   if (result === 0)
   {
       diagnosticResults.innerHTML =
       `
       <div class="card">
            <h2>🛡 Blood-Brain Barrier Scanner Results</h2>
            <p>
                The scanner checks the strength of the brain's protective
                barrier and looks for signs of inflammation.
            </p>

            <h3>BBB Analysis:</h3>
            <ul>
                <li>Blood-brain barrier weakness detected</li>
                <li>Increased inflammation risk</li>
                <li>Astrocyte regulation problems detected</li>
                <li>Brain tissue protection is reduced</li>
            </ul>

            <h3>Possible Diagnosis:</h3>
            <p>
                🔵 Blood-Brain Barrier Disruption
            </p>

            <h3>Neuroscience Explanation:</h3>
            <p>
                The blood-brain barrier protects neurons from harmful
                substances in the bloodstream. Astrocytes help maintain
                BBB function, but damage can allow inflammation to enter
                brain tissue and cause neural injury.
            </p>
        </div>
       `;
    }
    else
    {
        // Remove 10-20 seconds from the timer as a penalty
        let timePenalty = Math.floor(Math.random() * 11) + 10;
        timeLeft -= timePenalty;

        diagnosticResults.innerHTML =
        `
        <div class="card">

            <h2>🛡 Blood-Brain Barrier Scanner Results</h2>

            <h3>❌ No Abnormal BBB Function Detected</h3>
            <p>
                The scanner completed its analysis but did not detect
                a clear blood-brain barrier problem.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>Normal BBB function detected</li>
                <li>No increased inflammation identified</li>
                <li>No evidence of barrier leakage detected.</li>
                <li>Stroke cause remains unknown</li>
            </ul>

            <h3>Diagnostic Status:</h3>
            <p>
                The test did not identify the patient's emergency condition.
            </p>

            <h3>Time Penalty:</h3>
            <p>
                ⚠ ${timePenalty} seconds lost due to delayed diagnosis.
            </p>

            <h3>Patient Status:</h3>
            <p>
                The patient's symptoms continue while another diagnostic
                pathway is needed.
            </p>
        </div>
        `;
    }
}

// ======================================================================//
//                        Neural Signal Test
// Displays the Neural Signal analysis inside the diagnosticResults section.
// ======================================================================//
function showNeuralResults()
{
   // Randomly decides the outcome.
   // 0 = correct diagnosis
   // 1 = delayed diagnosis
   let result = Math.floor(Math.random() * 2);

    // use an if statement to randomly decide if the diagnosis is correct or delayed.
    if (result === 0)
    {
        diagnosticResults.innerHTML =
        `
        <div class="card">
            <h2>🧠 Neural Signal Test Results</h2>
            <p>
                The test analyzes the electrical signals in the brain
                to detect abnormal neural activity.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>Reduced neural signal transmission detected</li>
                <li>Motor signals are slower than normal</li>
                <li>Possible myelin disruption identified</li>
                <li>Abnormal communication between neurons detected</li>
            </ul>

            <h3>Diagnosis:</h3>
            <p>
                🔵 Neural Signal Dysfunction
            </p>

            <h3>Neuroscience Explanation:</h3>
            <p>
                The neural signal test detected changes in how neurons
                communicate. Myelin helps electrical signals travel quickly
                through the nervous system and disruptions can affect movement,
                coordination, and other brain functions.
            </p>

            <h3>Patient Status:</h3>
            <p>
                The condition has been identified and treatment planning can begin.
            </p>
        </div>
        `;
    }
    else
    {
        // Remove 10-20 seconds from the timer as a penalty
        let timePenalty = Math.floor(Math.random() * 11) + 10;
        timeLeft -= timePenalty;

        diagnosticResults.innerHTML =
        `
        <div class="card">
            <h2>🧠 Neural Signal Test Results</h2>
            <p>
                The test analyzes the electrical signals in the brain
                to detect abnormal neural activity.
            </p>

            <h3>System Analysis:</h3>
            <ul>
                <li>No abnormal neural signaling detected</li>
                <li>Electrical activity appears within normal range</li>
                <li>No communication disruption identified</li>
                <li>The source of symptoms remains unknown</li>
            </ul>

            <h3>Diagnostic Status:</h3>
            <p>
                The test did not identify the patient's neurological emergency.
            </p>

            <h3>Time Penalty:</h3>
            <p>
                ⚠ ${timePenalty} seconds lost due to delayed diagnosis.
            </p>

            <h3>Patient Status:</h3>
            <p>
                The patient's symptoms continue while another diagnostic
                pathway is needed.
            </p>
        </div>
        `;
    }
}