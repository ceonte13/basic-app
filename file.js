// Prompt the user for their age
let userAge = prompt('What is your age?');

// Convert the input to a number
userAge = Number(userAge);

// Check if the input is a valid number
if (!isNaN(userAge)) {
    if (userAge >= age2) {
        alert('You are old enough to drink.');
    } else if (userAge >= age1) {
        alert('You are close but still not old enough to drink.');
    } else {
        alert('You are not old enough to drink.');
    }
} else {
    alert('Invalid input. Please enter a valid number.');
}
