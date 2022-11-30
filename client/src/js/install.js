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

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
