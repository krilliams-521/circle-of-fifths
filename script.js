const form = document.getElementById('form');
const keyElement = document.getElementById('key');
const scaleElement = document.getElementById('scale');

let key, scale;
let light = true;

function changeTheme() {
    light = !light;

    let primary;
    let background;

    if (light) {
        primary = 'black';
        background = 'white';
    } else {
        primary = 'white';
        background = 'black';
    }

    let root = document.documentElement;
    root.style.setProperty('--primary', primary);
    root.style.setProperty('--background', background);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function displayResults() {
    clearResults();
    if (keyElement.value && scaleElement.value) {
        key = keyElement.value;
        scale = scaleElement.value;
    }
    const results = document.getElementById('results');
    const header = document.getElementById('header');
    const headerText = key.includes('-flat') ? `Chords in key of ${key[0].toUpperCase()} flat ${scale}:` : `Chords in key of ${key[0].toUpperCase()} ${scale}:`;
    header.innerHTML = headerText;
    let selector = key + scale;
    if (selector.includes('-')) {
        selector = selector.replace('-', '');
    }
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
    bmajor: {
        majorChords: ['Gb', 'B', 'E'],
        minorChords: ['Ebm', 'G#m', 'C#m']
    },
    bminor: {
        majorChords: ['A', 'D', 'G'],
        minorChords: ['F#m', 'Bm', 'Em']
    },
    emajor: {
        majorChords: ['B', 'E', 'A'],
        minorChords: ['G#m', 'C#m', 'F#m']
    },
    eminor: {
        majorChords: ['D', 'G', 'C'],
        minorChords: ['Bm', 'Em', 'Am']
    },
    amajor: {
        majorChords: ['E', 'A', 'D'],
        minorChords: ['C#m', 'F#m', 'Bm']
    },
    aminor: {
        majorChords: ['G', 'C', 'F'],
        minorChords: ['Em', 'Am', 'Dm']
    },
    dmajor: {
        majorChords: ['A', 'D', 'G'],
        minorChords: ['F#m', 'Bm', 'Em']
    },
    dminor: {
        majorChords: ['C', 'F', 'Bb'],
        minorChords: ['Am', 'Dm', 'Gm']
    },
    gmajor: {
        majorChords: ['D', 'G', 'C'],
        minorChords: ['G#m', 'C#m', 'F#m']
    },
    gminor: {
        majorChords: ['D', 'G', 'C'],
        minorChords: ['Bm', 'Em', 'Am']
    },
    cmajor: {
        majorChords: ['G', 'C', 'F'],
        minorChords: ['Em', 'Am', 'Dm']
    },
    cminor: {
        majorChords: ['Bb', 'Eb', 'Ab'],
        minorChords: ['Gm', 'Cm', 'Fm']
    },
    fmajor: {
        majorChords: ['C', 'F', 'Bb'],
        minorChords: ['Am', 'Dm', 'Gm']
    },
    fminor: {
        majorChords: ['Eb', 'Ab', 'Db'],
        minorChords: ['Cm', 'Fm', 'Bbm']
    },
    bflatmajor: {
        majorChords: ['F', 'Bb', 'Eb'],
        minorChords: ['Dm', 'Gm', 'Cm']
    },
    bflatminor: {
        majorChords: ['Ab', 'Db', 'Gb'],
        minorChords: ['Fm', 'Bbm', 'Ebm']
    },
    eflatmajor: {
        majorChords: ['Bb', 'Eb', 'Ab'],
        minorChords: ['Gm', 'Cm', 'Fm']
    },
    eflatminor: {
        majorChords: ['Db', 'Gb', 'B'],
        minorChords: ['Bbm', 'Ebm', 'G#m']
    },
    aflatmajor: {
        majorChords: ['Eb', 'Ab', 'Db'],
        minorChords: ['Cm', 'Fm', 'Bbm']
    },
    aflatminor: {
        majorChords: ['Gb', 'B', 'E'],
        minorChords: ['Ebm', 'G#m', 'C#m']
    },
    dflatmajor: {
        majorChords: ['Ab', 'Db', 'Gb'],
        minorChords: ['Fm', 'Bbm', 'Ebm']
    },
    dflatminor: {
        majorChords: ['B', 'E', 'A'],
        minorChords: ['G#m', 'C#m', 'F#m']
    },
    gflatmajor: {
        majorChords: ['Db', 'Gb', 'B'],
        minorChords: ['Bbm', 'Ebm', 'G#m']
    },
    gflatminor: {
        majorChords: ['E', 'A', 'D'],
        minorChords: ['C#m', 'F#m', 'Bm']
    }
}