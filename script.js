document.getElementById('shakeButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('main, .selfie, .left-image, aside, section');
    elements.forEach(element => {
        element.classList.toggle('shake');
        element.classList.toggle('spin');
    });
});
