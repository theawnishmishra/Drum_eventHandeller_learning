// Map each drum button to its corresponding sound file
const drumSounds = {
    'w': 'crash',
    'a': 'kick-bass',
    's': 'snare',
    'd': 'tom-1',
    'j': 'tom-2',
    'k': 'tom-3',
    'l': 'tom-4'
};

// Function to play sound based on key/button press
function makeSound(key) {
    const sound = drumSounds[key];
    if (sound) {
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    } else {
        console.log(key); // Log key if no sound is mapped
    }
}

// Event listeners for drum buttons
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function () {
        makeSound(this.innerHTML);
    });
});

// Event listener for key presses
document.addEventListener('keypress', function (event) {
    makeSound(event.key.toLowerCase()); // Convert pressed key to lowercase
});
