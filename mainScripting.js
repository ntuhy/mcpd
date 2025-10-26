    function showContent(tabId, tabElement) {
        // Get all tab contents
        const contents = document.querySelectorAll('.tab-content');
        const activeContent = document.querySelector('.tab-content.active');

        // Check if the clicked tab is already active
        if (activeContent.id === tabId) {
            return; // If active, do nothing
        }

        // Fade out the currently active content
        activeContent.style.opacity = '0'; // Start fading out
        setTimeout(() => {
            activeContent.classList.remove('active');
            activeContent.style.display = 'none'; // Hide after fade out completes

            // Show the selected tab content
            const selectedContent = document.getElementById(tabId);
            selectedContent.style.display = 'block'; // Show the content first
            // Trigger reflow to restart the CSS animation
            void selectedContent.offsetWidth; 
            selectedContent.classList.add('active'); // Add to active for fade-in
            selectedContent.style.opacity = '1'; // Fade in the new content
        }, 175); // Match the timeout with the fade out duration

        // Remove active class from all tabs and add to the selected tab
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabElement.classList.add('active');
    }

function heightWeight() {
  // Get the values from the text boxes
  var meters = parseFloat(document.getElementById("heightM").value) || 0;
  var centimeters = parseFloat(document.getElementById("heightCm").value) || 0;

  // Convert meters to inches
  var totalInchesMeters = meters * 39.37;

  // Convert inches to feet and inches (part for meters)
  var feetMeters = Math.floor(totalInchesMeters / 12);
  var inchesMeters = Math.round(totalInchesMeters % 12);

  // Convert centimeters to inches
  var inchesCentimeters = centimeters / 2.54;

  // Convert inches to feet and inches (part for centimeters)
  var feetCentimeters = Math.floor(inchesCentimeters / 12);
  var inchesCentimetersRemainder = Math.round(inchesCentimeters % 12);

  // Display the results
  document.getElementById("heightFt-M").innerHTML = isNaN(feetMeters) ? "" : Math.round(feetMeters) + "'";
  document.getElementById("heightIn-M").innerHTML = isNaN(inchesMeters) ? "" : Math.round(inchesMeters) + '"';
  document.getElementById("heightFt-Cm").innerHTML = isNaN(feetCentimeters) ? "" : Math.round(feetCentimeters) + "'";
  document.getElementById("heightIn-Cm").innerHTML = isNaN(inchesCentimetersRemainder) ? "" : Math.round(inchesCentimetersRemainder) + '"';

  // Convert kilograms to pounds
  var kilograms = parseFloat(document.getElementById("weightKg").value) || 0;
  var pounds = Math.round(kilograms * 2.205);

  // Display the result
  document.getElementById("weightLbs").innerHTML = isNaN(pounds) ? "" : Math.round(pounds) + "lbs";
}

function calculateDifference() {
  // Get the values from the text boxes
  const textBox1Value = document.getElementById('charged').value;
  const textBox2Value = document.getElementById('zone').value;

  // Calculate the difference between the values
  const difference = Math.round(textBox1Value - textBox2Value);

  // Display different text results based on the difference
  if (difference < 0) {
    document.getElementById('result').innerHTML = '&#8224;The Charged speed is lower than MPH Zone.<br>Check your numbers!';
  } else if (difference >= 1 && difference <= 10) {
    document.getElementById('result').innerHTML = '&#8224;The charged speed is between <span class="warning">1-10mph</span> above the posted limit.<br>The associated fine is <span class="warning">$130, or $180 in a construction zone</span>.';
  } else if (difference >= 11 && difference <= 15) {
    document.getElementById('result').innerHTML = '&#8224;The charged speed is between <span class="warning">11-15mph</span> above the posted limit.<br>The associated fine is <span class="warning">$160, or $230 in a construction zone</span>.';
  } else if (difference >= 16 && difference <= 20) {
    document.getElementById('result').innerHTML = '&#8224;The charged speed is between <span class="warning">16-20mph</span> above the posted limit.<br>The associated fine is <span class="warning">$210, or $330 in a construction zone</span>.';
  } else if (difference >= 21 && difference <= 25) {
    document.getElementById('result').innerHTML = '&#8224;The charged speed is between <span class="warning">21-25mph</span> above the posted limit.<br>The associated fine is <span class="warning">$280, or $480 in a construction zone</span>.';
  } else if (difference >= 26 && difference <= 30) {
    document.getElementById('result').innerHTML = '&#8224;The charged speed is between <span class="warning">26-30mph</span> above the posted limit.<br>The associated fine is <span class="warning">$380, or $680 in a construction zone</span>.';
  } else if (difference >= 31) {
    document.getElementById('result').innerHTML = '&#8224;The charged speed is <span class="warning">greater than 30mph</span> above the posted limit.<br><span class="warning">The driver is mandated to contact the court</span>.';
  } else {
    document.getElementById('result').innerHTML = '&#8224;Enter data in "MPH Zone" and "Charged" to get associated monetary fine.';
  }
}

function doubleSpeed() {
  // Retrieve the values from the textboxes
  const number1 = document.getElementById("zone").value;
  const number2 = document.getElementById("confirmed").value;

  // Compare the doubled number to number2
  if (number1 == 0 && number2 == 0) {
    document.getElementById("output").innerHTML = '';
  } else if (number2 >= (number1 * 2)) {
    // Output text with HTML if doubledNumber is greater than number2
    document.getElementById("output").innerHTML = 'The confirmed speed is or more than double the posted limit.';
  } else {
    // Output text with HTML if doubledNumber is equal to number2
    document.getElementById("output").innerHTML = '';
  }
}

function confirmedDifference() {
  // Get the values from the text boxes
  const value1 = document.getElementById("confirmed").value;
  const value2 = document.getElementById("zone").value;

  // Calculate the difference
  const difference = Math.round(value1 - value2);

  // Display the difference
  if (value1 - value2 == 0) {
    document.getElementById("obsdiff").innerHTML = 'Enter data';
  } else {
    document.getElementById("obsdiff").innerHTML = 'The confirmed speed is <span class="warning">' + difference + 'mph above the posted limit</span>.';
  }
}

function copyr() {
  let textarea = document.getElementById("text-radar");
  textarea.select();
  document.execCommand("copy");
  textarea.setSelectionRange(0, 0);
}

function copyl() {
  let textarea = document.getElementById("text-lidar");
  textarea.select();
  document.execCommand("copy");
  textarea.setSelectionRange(0, 0);
}

function vinCheck() {
  const baseURL = 'https://vpic.nhtsa.dot.gov/decoder/Decoder?VIN=';
  const textToAppend = document.getElementById('VIN').value;

  // Check if input is valid: only letters and numbers
  const isValid = /^[a-zA-Z0-9]*$/.test(textToAppend);

  if (!isValid) {
    alert('Please enter only letters and numbers.');
    return;
  }

  const newURL = baseURL + encodeURIComponent(textToAppend);
  window.open(newURL, '_blank');
}

// Check if the URL contains "#"
if (!window.location.hash) {
  // Append "#default" to the URL
  window.location.href += "#default";
}

// Array of words to check for in the URL
var wordsToCheck = ["default", "noah", "calvin", "schadie", "dulce", "jason", "nate"];

// Iterate through the array
for (var i = 0; i < wordsToCheck.length; i++) {
  var word = wordsToCheck[i];

  // Check if the URL contains the word preceded by "#"
  if (window.location.href.includes("#" + word)) {
    // Create a new script element
    var script = document.createElement("script");

    // Set the src attribute to the corresponding JavaScript file
    script.src = "" + word + ".js";

    // Append the script element to the HTML document
    document.body.appendChild(script);
  }
}

const dropdowns = document.querySelectorAll('.citeDropdown, .showThird');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('change', function() {
    if (this.value === '--') {
      this.style.backgroundColor = '#000';
      this.style.color = '#FFF';
    } else {
      this.style.backgroundColor = '#333';
      this.style.color = '#FFF';
      this.style.borderColor = '#00caff';
    }
  });
});

document.getElementById("r-button").addEventListener("click", function() {
  const message = document.getElementById("r-copied");
  message.style.display = "block"; // Show the message
  setTimeout(function() {
    message.style.opacity = 1; // Fade in
  }, 10); // Small timeout to ensure the display change is registered

  setTimeout(function() {
    message.style.opacity = 0; // Fade out
  }, 7000); // Keep it visible for 3 seconds
  setTimeout(function() {
    message.style.display = "none"; // Hide the message after fade out
  }, 7500); // Hide it after fade out is complete
});

document.getElementById("l-button").addEventListener("click", function() {
  const message = document.getElementById("l-copied");
  message.style.display = "block"; // Show the message
  setTimeout(function() {
    message.style.opacity = 1; // Fade in
  }, 10); // Small timeout to ensure the display change is registered

  setTimeout(function() {
    message.style.opacity = 0; // Fade out
  }, 7000); // Keep it visible for 3 seconds
  setTimeout(function() {
    message.style.display = "none"; // Hide the message after fade out
  }, 7500); // Hide it after fade out is complete
});