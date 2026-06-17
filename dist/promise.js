"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tambah(param1, param2) {
    return param1 + param2;
}
function kurang(param1, param2) {
    return param1 - param2;
}
function hitung(param1, param2, aksi) {
    return aksi(param1, param2);
}
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hasil = hitung(1, 2, tambah);
        resolve(hasil);
    }, 1000);
});
p.then((value) => {
    return value;
})
    .then((val) => {
    return tambah(val, 3);
})
    .then((val) => {
    const value = tambah(val, 4);
    console.log(value);
});
//# sourceMappingURL=promise.js.map