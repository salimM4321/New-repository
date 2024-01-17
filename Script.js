
function toggleAnswer(question) {
  var faqItem = question.parentElement;

  // Check if the clicked item is active
  var isActive = faqItem.classList.contains('active');

  // Remove 'active' class from all items
  var allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(function (item) {
      item.classList.remove('active');
  });

  // If the clicked item was not active, add 'active' class to it
  if (!isActive) {
      faqItem.classList.add('active');
  }
}



let timeLeft;
let countdown;

// Start the countdown automatically when the page loads
window.onload = function() {
  startCountdown();
};

function startCountdown() {
  // Set the time for the countdown (in seconds)
  const totalTime = 300; // 5 minutes

  // Clear any existing countdown
  clearInterval(countdown);

  // Calculate initial timeLeft
  timeLeft = totalTime;

  // Display the initial time
  displayTime();

  // Update the timer every second
  countdown = setInterval(function() {
    // Decrease timeLeft by 1 second
    timeLeft--;

    // Display the updated time
    displayTime();

    // Check if the countdown has reached zero
    // if (timeLeft <= 0) {
    //   clearInterval(countdown);
    //   alert("Countdown has finished!");
    // }
  }, 1000);
}

function displayTime() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Format the time as HH:MM:SS
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


  // Update the timer display
  document.getElementById('timer').innerText = formattedTime;
}

