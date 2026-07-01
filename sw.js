// sw.js - This runs in the background of your phone
self.addEventListener('push', (event) => {
    // We will use this later for remote server pushes
});

// This allows us to trigger local notifications through the service worker
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'TEST_NOTIFICATION') {
        const options = {
            body: 'Hello from your Service Worker! It works on mobile!',
            icon: 'https://githubassets.com',
            vibrate: [200, 100, 200]
        };
        self.registration.showNotification('It Works! 🎉', options);
    }
});
