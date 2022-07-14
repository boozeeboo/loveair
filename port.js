const $contentDiv = document.getElementById('content');
const $connectButton = document.getElementById('connect');
const $getPortsButton = document.getElementById('get-ports');

const portsPool = {}

navigator.serial.addEventListener('connect', (e) => {
    const ololo = e.target
});
//
// navigator.serial.addEventListener('disconnect', (e) => {
//     window.alert(e.target);
// });

// navigator.serial.getPorts().then((ports) => {
//     // $contentDiv.innerText = ports;
//     window.alert(ports);
// });


$connectButton.addEventListener('click', () => {
    navigator.serial.requestPort().then((port) => {
        window.alert(port);
    }).catch((e) => {
        // The user didn't select a port.
    });
});

$getPortsButton.addEventListener('click', () => {
    navigator.serial.getPorts().then((ports) => {
        window.alert(ports);
    }).catch((e) => {
        // The user didn't select a port.
    });
});