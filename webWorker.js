/**
 * Created by alexandrulazar on 2/24/16.
 */

/*global self, importScripts, qrcode */

(function(self) {
    'use strict';
    /**
     * Import all the scripts needed
     * */
    importScripts(
        'src/grid.js',
        'src/version.js',
        'src/detector.js',
        'src/formatinf.js',
        'src/errorlevel.js',
        'src/bitmat.js',
        'src/datablock.js',
        'src/bmparser.js',
        'src/datamask.js',
        'src/rsdecoder.js',
        'src/gf256poly.js',
        'src/gf256.js',
        'src/decoder.js',
        'src/qrcode.js',
        'src/findpat.js',
        'src/alignpat.js',
        'src/databr.js'
    );


    self.onmessage = function(event) {

        var data = event.data,
            qr = new QrCode(),
            resp;

        try{
            resp = qr.decode(data);
        } catch(e){
            resp = '';
        }
        self.postMessage(resp);
    };

}(self));
