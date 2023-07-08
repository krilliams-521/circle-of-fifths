let form = document.getElementById('form');

let keyElement = document.getElementById('key');
let scaleElement = document.getElementById('scale');

let key, scale;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (keyElement.value && scaleElement.value) {
        key = keyElement.value;
        scale = scaleElement.value;
        displayResults();
    }
});

function displayResults() {
    let results = document.getElementById('results');
    let header = document.getElementById('header');
    const headerText = `Chords in key of ${key} ${scale}`;
    header.innerHTML = headerText;
    results.style.display = 'block';
}

function clearResults() {
    results.style.display = 'none';
}