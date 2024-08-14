function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  const bmi = (weight / height ** 2) * 10000;

  // Store the BMI in localStorage
  localStorage.setItem("BMI", JSON.stringify(bmi.toFixed(2)));

  // Display the BMI with animation
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

  // Add animation class
  resultDiv.classList.add("fade-in");

  // Determine the BMI category and update styles
  if (bmi < 18.5) {
    resultDiv.classList.add("low");
    resultDiv.classList.remove("normal", "high");
    resultDiv.innerHTML +=
      "<audio id='audio' src='./audio/underweight.mp3' autoplay></audio>";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultDiv.classList.add("normal");
    resultDiv.classList.remove("low", "high");
    resultDiv.innerHTML +=
      "<audio id='audio' src='./audio/normal.mp3' autoplay></audio>";
  } else {
    resultDiv.classList.add("high");
    resultDiv.classList.remove("low", "normal");
    resultDiv.innerHTML +=
      "<audio id='audio' src='./audio/overweight.mp3' autoplay></audio>";
  }

  // Play the audio
  const audio = document.getElementById("audio");
  if (audio) {
    audio.play();
  }
  // Remove the animation class after animation to allow re-triggering on subsequent calculations
  setTimeout(() => {
    resultDiv.classList.remove("fade-in");
  }, 1000); // Match the duration of the animation
}
