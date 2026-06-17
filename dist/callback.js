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
console.log(hitung(3, 2, tambah));
console.log(hitung(3, 2, kurang));
//# sourceMappingURL=callback.js.map