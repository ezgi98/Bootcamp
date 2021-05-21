const prompt = require('prompt');

prompt.start();

prompt.get(['radius'], function (err, result) {
    if (err) { return onErr(err); }
    let radius = result.radius;
    console.log('  Radius: ' + radius);
    let area = Math.pow(radius, 2) * Math.PI;
    console.log(`Area of the circle: ${area.toFixed(2)}`);
});

function onErr(err) {
    console.log(err);
    return 1;
}