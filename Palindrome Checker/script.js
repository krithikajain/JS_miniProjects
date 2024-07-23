document.getElementById('check-btn').addEventListener('click', function() {
    const inputString = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    if (inputString === '') {
        alert("Please input a value");
        return;
    }

    const processedString = processString(inputString);
    
    if (isPalindrome(processedString)) {
        resultElement.textContent = `${inputString} is a palindrome`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${inputString} is not a palindrome`;
        resultElement.style.color = "red";
    }
});

function processString(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
