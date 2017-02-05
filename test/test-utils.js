import jsdom from 'jsdom';

//fake dom
let document = jsdom.jsdom('<!doctype html><html><body></body></html>');

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = document;
global.window = document.defaultView;

export function getOrCreateMountPoint() {
    let node = document.querySelector('#test-mount-point');

    if (!node) {
        node = document.createElement('div');
        node.id = 'test-mount-point';
        node.style.display = 'none';
        document.body.appendChild(node);
    }

    return node;
}
