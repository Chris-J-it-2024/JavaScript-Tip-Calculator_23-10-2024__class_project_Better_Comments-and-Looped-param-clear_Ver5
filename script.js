// script.js

// Global variables to store current state
let Calc_var_Ver2 = true;

// Function to set tip percentage when clicking preset buttons
function Tip_is(percentage) {
    document.getElementById('Tip_other').value = percentage;
  // I am going through the specifics on getElementById. It works, I need to understand more
}

// Function to validate input values
function Input_validation(Amount_owed, Percentage_of_tip) {
    if (isNaN(Amount_owed) || Amount_owed <= 0) {
      // isNAN is a function that checks if the char entered is a num - USEFUL
        alert('Please enter a valid reciept amount');
        return false;
    }
    if (isNaN(Percentage_of_tip) || Percentage_of_tip < 0 || Percentage_of_tip > 100) {
        alert('Please enter a valid tip percentage between 0 and 100');
        return false;
    }
    return true;
}

// Main calculation function
function calculateTip() {
    // Get input values
    const Amount_owed = parseFloat(document.getElementById('Amount_owed').value);
    const Percentage_of_tip = parseFloat(document.getElementById('Tip_other').value);

    // Validate inputs
    if (!Input_validation(Amount_owed, Percentage_of_tip)) {
        return;
    } // used a logical NOT to see if the syntax works

    // Calculate tip and total
    const Amount_tipped = Amount_owed * (Percentage_of_tip / 100);
    const Amount_total = Amount_owed + Amount_tipped;

    // Display results with proper formatting
    document.getElementById('Amount_tipped').textContent = `£${Amount_tipped.toFixed(2)}`;
    document.getElementById('Amount_total').textContent = `£${Amount_total.toFixed(2)}`;
}

// Function to reset all input fields and results
function resetCalculator() {
    document.getElementById('Amount_owed').value = '';
    document.getElementById('Tip_other').value = '';
    document.getElementById('Amount_tipped').textContent = '£0.00';
    document.getElementById('Amount_total').textContent = '£0.00';
}

// Function to handle exit
function exitCalculator() {
    const confirmExit = confirm('Are you sure you want to exit the Version 5 calculator?');
    if (confirmExit) {
        Calc_var_Ver2 = false;
        // Display goodbye message
        alert('Thank you for using the Verion 5 Tip Calculator!');
        // Reset the calculator for next use
        resetCalculator();
    }
}

// Event listeners for input validation
document.getElementById('Amount_owed').addEventListener('input', function(e) {
    if (e.target.value < 0) {
        e.target.value = 0;
    }
});

document.getElementById('Tip_other').addEventListener('input', function(e) {
    if (e.target.value < 0) {
        e.target.value = 0;
    }
    if (e.target.value > 100) {
        e.target.value = 100;
    }
});

// Initialize the calculator
document.addEventListener('DOMContentLoaded', function() {
    resetCalculator();
    // Main program loop using while-do structure
    while (Calc_var_Ver2) {
        // The loop is handled by the UI events
        break; // Break the loop as the flow is controlled by UI interactions
    }
});