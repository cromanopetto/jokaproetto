// Seleziona il pulsante hamburger e il menu di navigazione usando i loro ID
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Aggiungi un "event listener" al pulsante hamburger
// Quando viene cliccato, esegui la funzione data
hamburgerMenu.addEventListener('click', () => {
    // La funzione toggle() aggiunge o rimuove la classe 'active'
    // Se la classe 'active' è presente, la rimuove.
    // Se la classe 'active' NON è presente, la aggiunge.
    navLinks.classList.toggle('active');

    // Opzionale: Aggiungi una classe anche all'hamburger per animare le barre (ad es. per trasformarle in una X)
    hamburgerMenu.classList.toggle('open');
});

// Opzionale: Chiudi il menu se si clicca fuori (per una migliore UX)
// document.addEventListener('click', (event) => {
//     // Controlla se il click non è sull'hamburger e non è sul menu
//     if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
//         // Se il menu è aperto, chiudilo
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//             hamburgerMenu.classList.remove('open'); // Rimuovi anche la classe open dall'hamburger
//         }
//     }
// });
