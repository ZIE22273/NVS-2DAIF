// 1. Application State
const state = {
    fragen: [
        {
            "frage": "Was ist die Hauptstadt von Deutschland?",
            "optionen": ["Berlin", "München", "Hamburg", "Köln"],
            "antwort": "Berlin"
        },
        {
            "frage": "Wer hat die Relativitätstheorie entwickelt?",
            "optionen": [
                "Isaac Newton",
                "Albert Einstein",
                "Nikola Tesla",
                "Thomas Edison"
            ],
            "antwort": "Albert Einstein"
        },
        {
            "frage": "Was ist der größte Planet in unserem Sonnensystem?",
            "optionen": ["Erde", "Mars", "Jupiter", "Saturn"],
            "antwort": "Jupiter"
        },
        {
            "frage": "Wer hat das Buch '1984' geschrieben?",
            "optionen": [
                "George Orwell",
                "Aldous Huxley",
                "J.K. Rowling",
                "Stephen King"
            ],
            "antwort": "George Orwell"
        },
        {
            "frage": "Was ist die Quadratwurzel von 81?",
            "optionen": ["7", "8", "9", "10"],
            "antwort": "9"
        },
        {
            "frage": "Wer hat das World Wide Web erfunden?",
            "optionen": [
                "Bill Gates",
                "Steve Jobs",
                "Tim Berners-Lee",
                "Mark Zuckerberg"
            ],
            "antwort": "Tim Berners-Lee"
        },
        {
            "frage": "In welchem Jahr fiel die Berliner Mauer?",
            "optionen": ["1987", "1989", "1991", "1993"],
            "antwort": "1989"
        },
        {
            "frage": "Wer hat das iPhone erfunden?",
            "optionen": ["Microsoft", "Apple", "Samsung", "Nokia"],
            "antwort": "Apple"
        },
        {
            "frage": "Wer hat das Gemälde 'Die Mona Lisa' gemalt?",
            "optionen": [
                "Vincent Van Gogh",
                "Pablo Picasso",
                "Leonardo da Vinci",
                "Claude Monet"
            ],
            "antwort": "Leonardo da Vinci"
        },
        {
            "frage": "Was ist der höchste Berg der Welt?",
            "optionen": ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
            "antwort": "Mount Everest"
        },
        {
            "frage": "Wer hat das Buch 'Der Herr der Ringe' geschrieben?",
            "optionen": [
                "J.K. Rowling",
                "George R.R. Martin",
                "J.R.R. Tolkien",
                "Stephen King"
            ],
            "antwort": "J.R.R. Tolkien"
        },
        {
            "frage": "Was ist der kleinste Kontinent der Welt?",
            "optionen": ["Afrika", "Australien", "Antarktis", "Europa"],
            "antwort": "Australien"
        },
        {
            "frage": "Wer hat die Glühbirne erfunden?",
            "optionen": [
                "Nikola Tesla",
                "Thomas Edison",
                "Alexander Graham Bell",
                "Benjamin Franklin"
            ],
            "antwort": "Thomas Edison"
        },
        {
            "frage": "In welchem Jahr wurde das Internet öffentlich zugänglich?",
            "optionen": ["1983", "1991", "1995", "2000"],
            "antwort": "1991"
        }
    ],
    aktuelleFrageIndex: 0
};

// 2. State Accessors/Mutators FNs
function getAktuelleFrage() {
    return state.fragen[state.aktuelleFrageIndex];
}

function incrementFrageIndex() {
    state.aktuelleFrageIndex++;
}

// 3. DOM Node Refs
const frageElement = document.getElementById("frage");
const option1Element = document.getElementById("label1");
const option2Element = document.getElementById("label2");
const option3Element = document.getElementById("label3");
const option4Element = document.getElementById("label4");
const option1Radio = document.getElementById("option1");
const option2Radio = document.getElementById("option2");
const option3Radio = document.getElementById("option3");
const option4Radio = document.getElementById("option4");

// 4. DOM Node Creation FNs
// (Not required in this case)

// 5. Render FN
function renderFrage() {
    const aktuelleFrage = getAktuelleFrage();
    
    frageElement.value = aktuelleFrage.frage;
    option1Element.textContent = aktuelleFrage.optionen[0];
    option2Element.textContent = aktuelleFrage.optionen[1];
    option3Element.textContent = aktuelleFrage.optionen[2];
    option4Element.textContent = aktuelleFrage.optionen[3];

    option1Radio.value = aktuelleFrage.optionen[0];
    option2Radio.value = aktuelleFrage.optionen[1];
    option3Radio.value = aktuelleFrage.optionen[2];
    option4Radio.value = aktuelleFrage.optionen[3];
}

// 6. Event Handlers
function handleNaechsteFrage() {
    if (state.aktuelleFrageIndex < state.fragen.length) {
        renderFrage();
        incrementFrageIndex();
    } else {
        alert("Das Quiz ist vorbei!");
    }
}

// 7. INIT Bindings
document.addEventListener("DOMContentLoaded", function() {
    handleNaechsteFrage();
});

// 8. Initial Render
renderFrage();
