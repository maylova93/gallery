// Array med filnavne på billeder
const myImages = ['elephant.jpg', 'great-white.jpg', 'koala.jpg', 'smithi.jpg', 'tiger.jpg'];

// Funktion til at opbygge galleriet ved at tilføje hvert billede til DOM'en
function BuildGallery() {
    // Hent gallerielementet fra DOM
    const galleryElement = document.getElementById('gallery');

    // Iterer gennem hvert billednavn og kald buildCard for at oprette et billedkort
    myImages.forEach(image => {
        // Sæt billedets URL sammen
        const imageUrl = 'assets/img/' + image;

        // Kald buildCard for at oprette et billedkort og tilføj det til galleriet
        buildCard(imageUrl, galleryElement);
    });
}

// Funktion til at opbygge et billedkort og tilføje det til galleriet
function buildCard(imageUrl, galleryElement) {
    // Opret et article-element til at indeholde billedet
    const article = document.createElement('article');

    // Opret et img-element og sæt kilden til det specificerede URL
    const image = document.createElement('img');
    image.src = imageUrl;

    // Tilføj en click-håndterer for at åbne overlayet, når billedet klikkes
    image.addEventListener('click', () => openOverlay(imageUrl));

    // Tilføj billedet til artiklen og artiklen til galleriet
    article.appendChild(image);
    galleryElement.appendChild(article);
}

// Funktion til at åbne overlayet og vise det valgte store billede
function openOverlay(imageUrl) {
    // Hent overlay- og bigImage-elementerne fra DOM
    const overlay = document.getElementById('overlay');
    const bigImage = document.getElementById('bigImage');

    // Indstil kilden på det store billede til det valgte billede
    bigImage.src = imageUrl;

    // Vis overlayet ved at ændre display-stilen til 'flex'
    overlay.style.display = 'flex';
}

// Funktion til at lukke overlayet ved at ændre display-stilen til 'none'
function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Kald BuildGallery for at initialisere galleriet ved indlæsning af siden
BuildGallery();
