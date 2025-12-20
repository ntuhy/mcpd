function showContent(tabId, tabElement) {
  const contents = document.querySelectorAll('.tab-content');
  const activeContent = document.querySelector('.tab-content.active');

  if (activeContent && activeContent.id === tabId) {
    return;
  }

  if (activeContent) {
    activeContent.style.opacity = '0';
    setTimeout(() => {
      activeContent.classList.remove('active');
      activeContent.style.display = 'none';

      const selectedContent = document.getElementById(tabId);
      selectedContent.style.display = 'block';
      void selectedContent.offsetWidth;
      selectedContent.classList.add('active');
      selectedContent.style.opacity = '1';
    }, 175);
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  tabElement.classList.add('active');
}

function heightWeight() {
  const meters = parseFloat(document.getElementById("heightM").value) || 0;
  const centimeters = parseFloat(document.getElementById("heightCm").value) || 0;

  const totalInchesMeters = meters * 39.37;
  const feetMeters = Math.floor(totalInchesMeters / 12);
  const inchesMeters = Math.round(totalInchesMeters % 12);

  const inchesCentimeters = centimeters / 2.54;
  const feetCentimeters = Math.floor(inchesCentimeters / 12);
  const inchesCentimetersRemainder = Math.round(inchesCentimeters % 12);

  document.getElementById("heightFt-M").innerHTML = isNaN(feetMeters) ? "" : Math.round(feetMeters) + "'";
  document.getElementById("heightIn-M").innerHTML = isNaN(inchesMeters) ? "" : Math.round(inchesMeters) + '"';
  document.getElementById("heightFt-Cm").innerHTML = isNaN(feetCentimeters) ? "" : Math.round(feetCentimeters) + "'";
  document.getElementById("heightIn-Cm").innerHTML = isNaN(inchesCentimetersRemainder) ? "" : Math.round(inchesCentimetersRemainder) + '"';

  const kilograms = parseFloat(document.getElementById("weightKg").value) || 0;
  const pounds = Math.round(kilograms * 2.205);
  document.getElementById("weightLbs").innerHTML = isNaN(pounds) ? "" : Math.round(pounds) + "lbs";
}

function calculateDifference() {
  const charged = document.getElementById('charged').value;
  const zone = document.getElementById('zone').value;
  const difference = Math.round(charged - zone);

  if (difference < 0) {
    document.getElementById('result').innerHTML = 'The Charged speed is lower than MPH Zone. Check your numbers!';
  } else if (difference >= 1 && difference <= 10) {
    document.getElementById('result').innerHTML = 'The charged speed is between <span class="warning">1-10mph</span> above the posted limit. The associated fine is <span class="warning">$130, or $180 in a construction zone</span>.';
  } else if (difference >= 11 && difference <= 15) {
    document.getElementById('result').innerHTML = 'The charged speed is between <span class="warning">11-15mph</span> above the posted limit. The associated fine is <span class="warning">$160, or $230 in a construction zone</span>.';
  } else if (difference >= 16 && difference <= 20) {
    document.getElementById('result').innerHTML = 'The charged speed is between <span class="warning">16-20mph</span> above the posted limit. The associated fine is <span class="warning">$210, or $330 in a construction zone</span>.';
  } else if (difference >= 21 && difference <= 25) {
    document.getElementById('result').innerHTML = 'The charged speed is between <span class="warning">21-25mph</span> above the posted limit. The associated fine is <span class="warning">$280, or $480 in a construction zone</span>.';
  } else if (difference >= 26 && difference <= 30) {
    document.getElementById('result').innerHTML = 'The charged speed is between <span class="warning">26-30mph</span> above the posted limit. The associated fine is <span class="warning">$380, or $680 in a construction zone</span>.';
  } else if (difference >= 31) {
    document.getElementById('result').innerHTML = 'The charged speed is <span class="warning">greater than 30mph</span> above the posted limit. <span class="warning">The driver is mandated to contact the court</span>.';
  } else {
    document.getElementById('result').innerHTML = 'Enter data in "MPH Zone" and "Charged" to get associated monetary fine.';
  }
}

function doubleSpeed() {
  const zone = document.getElementById("zone").value;
  const confirmed = document.getElementById("confirmed").value;

  if (zone == 0 && confirmed == 0) {
    document.getElementById("output").innerHTML = '';
  } else if (confirmed >= (zone * 2)) {
    document.getElementById("output").innerHTML = 'The confirmed speed is or more than double the posted limit.';
  } else {
    document.getElementById("output").innerHTML = '';
  }
}

function confirmedDifference() {
  const confirmed = document.getElementById("confirmed").value;
  const zone = document.getElementById("zone").value;
  const difference = Math.round(confirmed - zone);

  if (confirmed - zone == 0) {
    document.getElementById("obsdiff").innerHTML = 'Enter data';
  } else {
    document.getElementById("obsdiff").innerHTML = `The confirmed speed is <span class="warning">${difference}mph above the posted limit</span>.`;
  }
}

function copyr() {
  const textarea = document.getElementById("text-radar");
  textarea.select();
  document.execCommand("copy");
  textarea.setSelectionRange(0, 0);
}

function copyl() {
  const textarea = document.getElementById("text-lidar");
  textarea.select();
  document.execCommand("copy");
  textarea.setSelectionRange(0, 0);
}

function vinCheck() {
  const baseURL = 'https://vpic.nhtsa.dot.gov/decoder/Decoder?VIN=';
  const vin = document.getElementById('VIN').value.trim();

  if (!/^[a-zA-Z0-9]*$/.test(vin)) {
    alert('Please enter only letters and numbers.');
    return;
  }

  window.open(baseURL + encodeURIComponent(vin), '_blank');
}

// Ensure default hash if none exists
if (!window.location.hash) {
  window.location.href += "#default";
}

// Dynamic user-specific script loader
const wordsToCheck = ["default", "noah", "calvin", "schadie", "dulce", "jason", "nate"];

for (let word of wordsToCheck) {
  if (window.location.href.includes("#" + word)) {
    const script = document.createElement("script");
    script.src = word + ".js";
    document.body.appendChild(script);
  }
}

// Dropdown visual feedback
document.querySelectorAll('.citeDropdown, .showThird').forEach(dropdown => {
  dropdown.addEventListener('change', function () {
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

// Copy feedback for Radar
document.getElementById("r-button").addEventListener("click", () => {
  const message = document.getElementById("r-copied");
  message.style.display = "block";
  setTimeout(() => message.style.opacity = 1, 10);
  setTimeout(() => message.style.opacity = 0, 7000);
  setTimeout(() => message.style.display = "none", 7500);
});

// Copy feedback for LiDAR
document.getElementById("l-button").addEventListener("click", () => {
  const message = document.getElementById("l-copied");
  message.style.display = "block";
  setTimeout(() => message.style.opacity = 1, 10);
  setTimeout(() => message.style.opacity = 0, 7000);
  setTimeout(() => message.style.display = "none", 7500);
});

// PDF Viewer Module
const pdfViewer = (function () {
  const viewer = document.getElementById('pdfViewer');
  const defaultMessage = document.getElementById('defaultMessage');

  function loadPDF(url) {
    viewer.src = url;
    defaultMessage.style.display = 'none';
  }

  function checkPDF() {
    if (!viewer.src) {
      defaultMessage.style.display = 'block';
    }
  }

  return {
    loadPDF,
    checkPDF
  };
})();

// Initialize PDF viewer on load
document.addEventListener('DOMContentLoaded', () => {
  pdfViewer.checkPDF();
});


        const pdfModalViewer = (function() {
            const pdfModal = document.getElementById('pdfModal');
            const modalPDFViewer = document.getElementById('modalPDFViewer');

            function loadPDF(url) {
                modalPDFViewer.src = url;
                openModal();
            }

            function openModal() {
                pdfModal.style.display = 'block'; // Show modal
                setTimeout(() => {
                    pdfModal.style.opacity = '1'; // Fade in effect
                }, 10); // Small delay to allow display to take effect
            }

            function closeModal() {
                pdfModal.style.opacity = '0'; // Fade out effect
                setTimeout(() => {
                    pdfModal.style.display = 'none'; // Hide modal after fading out
                }, 500); // Wait for the fade-out duration before hiding the modal
                modalPDFViewer.src = ''; // Clear the iframe source to stop loading the PDF
            }

            // Close modal when clicking outside of modal content
            pdfModal.addEventListener('click', function(event) {
                if (event.target === pdfModal) {
                    closeModal();
                }
            });

            return {
                loadPDF: loadPDF,
                closeModal: closeModal
            }
        })();

        // Optional: Optional for testing responsive layouts
        document.addEventListener('click', function(event) {
            if (event.target === pdfModalViewer.pdfModal) {
                pdfModalViewer.closeModal();
            }
        });


