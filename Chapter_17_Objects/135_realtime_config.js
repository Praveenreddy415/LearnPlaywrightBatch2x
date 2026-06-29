// Real-time config file example using a JavaScript object
// This object holds settings for an application or service.

const appConfig = {
    appName: "MyWeatherApp",
    version: "1.0.3",
    environment: "production",
    server: {
        host: "api.weatherapp.com",
        port: 443,
        protocol: "https"
    },
    features: {
        enableNotifications: true,
        enableDarkMode: false,
        dataRefreshInterval: 300 // seconds
    },
    apiKeys: {
        weatherService: "abc123xyz",
        analyticsService: "analytics-456"
    },
    logging: {
        level: "info",
        destination: "cloud"
    }
};

console.log("App Name:", appConfig.appName);
console.log("Server URL:", `${appConfig.server.protocol}://${appConfig.server.host}:${appConfig.server.port}`);
console.log("Notifications enabled:", appConfig.features.enableNotifications);
console.log("Refresh interval:", appConfig.features.dataRefreshInterval, "seconds");

// Update a configuration value
appConfig.features.enableDarkMode = true;
console.log("Dark mode enabled:", appConfig.features.enableDarkMode);

// Add a new setting
appConfig.server.timeout = 10000;
console.log("Server timeout:", appConfig.server.timeout, "ms");

// Summary:
// - Config objects store runtime settings in nested structures.
// - They make it easy to read and update application options.
// - Use meaningful keys to keep the config readable.
