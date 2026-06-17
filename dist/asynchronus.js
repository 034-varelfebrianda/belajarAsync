"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tambah(param1, param2) {
    return param1 + param2;
}
function kurang(param1, param2) {
    return param1 - param2;
}
function hitung(param1, param2, aksi) {
    let hasil = 0;
    hasil = aksi(param1, param2);
    return hasil;
}
console.log(1);
setTimeout(() => {
    console.log(`hasil: `, hitung(1, 2, tambah));
}, 3000);
console.log(2);
//# sourceMappingURL=asynchronus.js.map