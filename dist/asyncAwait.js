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
async function prosesAbsen() {
    try {
        const varel = await absen('varel', true);
        console.log('berhasil:', varel);
        const owen = await absen('owen', true);
        console.log('berhasil:', owen);
        const alex = await absen('alex', false);
        console.log('berhasil:', alex);
        const ruth = await absen('ruth', true); //tidak muncul karena alex bersifat false dan telah berhenti karna adanya catch
        console.log('berhasil: ', ruth);
    }
    catch (x) {
        console.log('ditolak:', x);
    }
    finally {
        console.log('selesai');
    }
}
console.log('Mulai');
prosesAbsen();
//# sourceMappingURL=asyncAwait.js.map