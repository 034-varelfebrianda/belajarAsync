// Soal Tugas
// Buat program absensi siswa dengan ketentuan:
// Nama siswa dikirim sebagai parameter.
// Program menunggu 3 detik sebelum memberikan hasil.
// Jika hadir = true, tampilkan:
// siswa bernama Varel telah hadir
// Jika hadir = false, tampilkan:
// siswa bernama Varel belum hadir

function absen(nama:string, hadir:boolean):Promise<string>{
    return new Promise((diterima,ditolak)=>{
        setTimeout(() => {
            if(hadir === true){
                diterima(`${nama} berhasil login`)
            }else {
                ditolak(`${nama} belum absen`)
            }
        }, 2000);
    })
}

async function prosesAbsen() {
    try{
        const varel = await absen ('varel',true);
        console.log('berhasil :', varel);

        const owen = await absen ('owen', true);
        console.log('berhasil :',owen);

        const alex = await absen ('alex',false);
        console.log('gagal :', alex);
    }
    catch(x){
        console.log('tidak absen',x)
    }
    finally{
        console.log('selesai')
    }
    }

    console.log('mulai')
    prosesAbsen()