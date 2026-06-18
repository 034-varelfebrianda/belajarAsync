"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function absen(nama, hadir) {
    return new Promise((diterima, ditolak) => {
        setTimeout(() => {
            if (hadir === true) {
                diterima(`siswa bernama ${nama} telah hadir`);
            }
            else {
                ditolak(`siswa bernama ${nama} belum hadir`);
            }
        }, 3000);
    });
}
absen('varel', true)
    .then((hasil) => console.log('berhasil:', hasil))
    .catch((error) => console.log('ditolak:', error));
absen('alex', false)
    .then((hasil) => console.log('berhasil:', hasil))
    .catch((error) => console.log('ditolak:', error));
absen('owen', true)
    .then((hasil) => console.log('berhasil:', hasil))
    .catch((error) => console.log('ditolak:', error));
console.log('Mulai');
setTimeout(() => {
    console.log('selesai');
}, 4000);
//# sourceMappingURL=promise.js.map