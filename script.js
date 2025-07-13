document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".hero-name");
  const workElement = document.querySelector(".hero-work");

  const nameText = nameElement.textContent.trim();
  const workText = workElement.textContent.trim();

  const typingSpeed = 100;   
  const pauseBetween = 200;  

  function typeText(element, text, callback) {
    let index = 0;
    element.textContent = "";

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else if (callback) {
        setTimeout(callback, pauseBetween);
      }
    }
    type();
  }

  function startTypingCycle() {
    typeText(nameElement, nameText, () => {
      typeText(workElement, workText, () => {
        setTimeout(() => {
          nameElement.textContent = "";
          workElement.textContent = "";
          startTypingCycle();
        }, pauseBetween);
      });
    });
  }

  startTypingCycle();
});
