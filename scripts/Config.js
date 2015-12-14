var Config = (function () {
    function Config() {
        this.apiUrl = 'http://192.168.56.55:3000';
        if (window.location.host === 'webit.work') {
            this.apiUrl = 'https://api.webit.work';
        }
        if (window.location.host === '192.168.56.55:8080') {
            this.apiUrl = 'http://192.168.56.55:3000';
        }
        if (window.location.host === '127.0.0.1:8080') {
            this.apiUrl = 'http://127.0.0.1:3000';
        }
        if (window.location.host === 'localhost:8080') {
            this.apiUrl = 'http://localhost:3000';
        }
    }
    return Config;
})();
exports.Config = Config;
