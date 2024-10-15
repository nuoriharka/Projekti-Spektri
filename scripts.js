// scripts.js

// Tumman ja vaalean tilan vaihtaminen
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Teeman lataaminen tallennetun asetuksen mukaisesti
function loadThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Offline-tuen alustus
function initializeOfflineSupport() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(function (registration) {
            console.log('Service Worker rekisteröity onnistuneesti:', registration.scope);
        }).catch(function (error) {
            console.error('Service Worker rekisteröinti epäonnistui:', error);
        });
    }
}
