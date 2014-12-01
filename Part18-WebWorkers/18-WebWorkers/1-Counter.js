
function timedCount() {
    for (var i = 0; i <= 10000000 ; i += 1) {
        if (i % 1000 == 0) {
                postMessage(i);
        }
    }
}

timedCount();