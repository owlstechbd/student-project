//typing text
document.addEventListener("DOMContentLoaded", function(event) {
  var animatedText = document.querySelector(".animated-text");
  var items = ["Sai Sarendra Motupalli", "Masters in computer science"];
  var currentIndex = 0;

  function animateText() {
    animatedText.textContent = "";

    var currentText = items[currentIndex];
    var i = 0;

    var typingInterval = setInterval(function() {
      animatedText.textContent += currentText.charAt(i);
      i++;

      if (i >= currentText.length) {
        clearInterval(typingInterval);
        setTimeout(eraseText, 2000);
      }
    }, 100);
  }

  function eraseText() {
    var currentText = animatedText.textContent;
    var i = currentText.length - 1;

    var erasingInterval = setInterval(function() {
      animatedText.textContent = currentText.substring(0, i);
      i--;

      if (i < 0) {
        clearInterval(erasingInterval);
        currentIndex = (currentIndex + 1) % items.length;
        setTimeout(animateText, 500);
      }
    }, 50);
  }

  animateText();
});