 document.addEventListener('DOMContentLoaded', () => {
 const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

 const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;

  // Function to check if the phone number is valid
  const isValidPhoneNumber = (phone) => phoneRegex.test(phone);

  // Function to handle the check button click
  const checkBtnClick = (event) => {
    event.preventDefault();
    const phoneNumber = userInput.value.trim();

    if (phoneNumber === '') {
      alert('Please provide a phone number');
      return;
    }

    if (isValidPhoneNumber(phoneNumber)) {
      resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
  };

  // Function to handle the clear button click
  const clearBtnClick = () => {
    userInput.value = '';
    resultsDiv.textContent = '';
  };

  // Event listeners for buttons
  checkBtn.addEventListener('click', checkBtnClick);
  clearBtn.addEventListener('click', clearBtnClick);
});