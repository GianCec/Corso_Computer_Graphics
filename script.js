function loadContent(file, event) {
    // Rimuovi la classe 'active' da tutti i link
    document.querySelectorAll('.link').forEach(link => {
        link.classList.remove('active');
    });

    // Aggiungi la classe 'active' al link cliccato
    event.currentTarget.classList.add('active');

    // Log per il debug
    console.log(`Caricamento del contenuto da: ${file}`);

    // Carica il contenuto dal file specificato
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento del file");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content-display').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content-display').innerHTML = "Errore nel caricamento del contenuto.";
            console.error('Errore:', error);
        });
}
