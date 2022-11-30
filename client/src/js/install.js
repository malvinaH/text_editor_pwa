const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);

});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('install hit')
    window.deferredPrompt = null;
});
