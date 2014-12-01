self.addEventListener('message', function (e) {
    var data = e.data;
    switch (data.cmd) {
        case 'start':
            self.postMessage('My worker has: ' + data.msg);
            break;
        case 'stop':
            self.postMessage('My worker has stopped: ' + data.msg + '. (buttons will no longer work)');
            self.close(); // Terminates the worker.
            break;
        default:
            self.postMessage('Huh? ' + data.msg);
    };
}, false);