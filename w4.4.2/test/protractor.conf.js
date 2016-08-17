module.exports = {
    config: {
        allScriptsTimeout: 11000,
        specs: ['e2e/*.js'],
        capabilities: {
            browserName: 'chrome'
        },
        baseUrl: 'http://localhost:3001/',
        framework: 'jasmine',
        directConnect: true,
        jasmineNodeOpys: {
            defaultTimeoutInterval: 30000
        }
    }
};