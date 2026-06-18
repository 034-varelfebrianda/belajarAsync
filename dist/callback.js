"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function absen(diterima, ditolak) {
    let hadir = true;
    if (hadir) {
        diterima('siswa telah hadir');
    }
    else {
        ditolak('siswa belum hadir');
    }
}
absen((hasil) => {
    console.log('berhasil', hasil);
}, (error) => {
    console.log('ditolak', error);
});
//callback bagus digunakan saat isi paramerter nya 2
//# sourceMappingURL=callback.js.map