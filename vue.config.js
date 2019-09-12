module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            '^https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/'
          ),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 3,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}
