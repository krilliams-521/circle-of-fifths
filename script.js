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
    clearResults();
    let results = document.getElementById('results');
    let header = document.getElementById('header');
    const headerText = `Chords in key of ${key.toUpperCase()} ${scale}`;
    header.innerHTML = headerText;
    const selector = key + scale;
    for (let chord of circleOfFifths[selector].majorChords) {
        const row = document.getElementById('major-chords');
        const cell = document.createElement('td');
        const cellText = document.createTextNode(chord);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    for (let chord of circleOfFifths[selector].minorChords) {
        const row = document.getElementById('minor-chords');
        const cell = document.createElement('td');
        const cellText = document.createTextNode(chord);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    results.style.display = 'block';
}

function clearResults() {
    results.style.display = 'none';
    const row1 = document.getElementById('major-chords');
    const row2 = document.getElementById('minor-chords');
    while (row1.firstChild) {
        row1.removeChild(row1.firstChild);
    }
    while (row2.firstChild) {
        row2.removeChild(row2.firstChild);
    }
}

const circleOfFifths = {
    emajor: {
        majorChords: ['B', 'E', 'A'],
        minorChords: ['G#m', 'C#m', 'F#m']
    },
    eminor: {
        majorChords: ['D', 'G', 'C'],
        minorChords: ['Bm', 'Em', 'Am']
    }
}