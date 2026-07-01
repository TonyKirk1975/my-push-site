// sw.js
self.addEventListener('push', (event) => {
    let payload = 'Hello from your custom backend!';
    if (event.data) {
        payload = event.data.text();
    }

    const options = {
        body: payload,
        icon: 'https://githubassets.com',
        vibrate: [100, 50, 100]
    };

    event.waitUntil(
        self.registration.showNotification('Remote Alert! 🚀', options)
    );
});
