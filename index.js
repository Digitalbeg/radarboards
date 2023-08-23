/**
 * Überprüft die Größe des Fensters und passt die Anzeige und Funktionalität der Schaltflächen entsprechend an.
 */
function checkWindowSize() {
    // Elemente aus dem DOM selektieren
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const screenWarnung = document.getElementById('screenWarnung');

    // Bedingungen definieren
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isSmallScreen = window.innerHeight < 850; // Annahme für einen 15-Zoll-Bildschirm

    // Anzeigen oder Verbergen der Warnung basierend auf den Bedingungen
    if (isMobile || isSmallScreen) {
        screenWarnung.style.display = 'block';
        button1.disabled = true;
        button2.disabled = true;
        button1.style.pointerEvents = "none"; // Deaktivieren des Mouse-Over-Effekts
        button2.style.pointerEvents = "none";
    } else {
        screenWarnung.style.display = 'none';
        button1.disabled = false;
        button2.disabled = false;
        button1.style.pointerEvents = "auto"; // Aktivieren des Mouse-Over-Effekts
        button2.style.pointerEvents = "auto";
    }
}

// Funktion beim Laden der Seite aufrufen, um die Anzeige sofort zu aktualisieren
checkWindowSize();

// Event Listener für das Resize-Ereignis hinzufügen, um bei Größenänderung des Fensters zu reagieren
window.addEventListener('resize', checkWindowSize);

/**
 * Öffnet ein neues Fenster, wenn auf die Schaltflächen geklickt wird.
 *
 * @param {Event} e - Das Event-Objekt des Klicks
 */
function oeffneFensterGesamt(e) {
    window.open(e.target.dataset.href, 'neuesFenster', 'location=yes, width=1100, height=800');
}
function oeffneFensterEinzel(e) {
    window.open(e.target.dataset.href, 'neuesFenster', 'location=yes, width=1280, height=800');
}

// Event Listener zu den Buttons hinzufügen, um das Standardverhalten zu überschreiben
document.getElementById('button1').addEventListener('click', oeffneFensterGesamt);
document.getElementById('button2').addEventListener('click', oeffneFensterEinzel);
