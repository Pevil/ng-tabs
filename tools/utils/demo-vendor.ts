import { mkdirSync } from 'fs';
import * as rimraf from 'rimraf';
import { copySync } from 'fs-extra';

console.log('Copy Vendor Files');

const vendorFiles = [
    './node_modules/zone.js/dist/zone.js',
    './node_modules/reflect-metadata/Reflect.js',
    './node_modules/es6-shim/es6-shim.js'
];

rimraf('demo/vendor', () => {
    mkdirSync('demo/vendor');
    vendorFiles.forEach((path) => {
        console.log('copying: ', path);
        const filename = path.split('/').pop();
        copySync(path, `demo/vendor/${filename}`);
    });
});