function absen (
    diterima:(x:string)=>void,
    ditolak:(x:string)=>void
    ):void{
    let hadir:boolean = true
    if(hadir){
        diterima('siswa telah hadir')
    }else {
        ditolak('siswa belum hadir')
    }
}

absen(
    (hasil:string):void =>{
        console.log('berhasil',hasil)
    },(error:string):void =>{
        console.log('ditolak',error)
    }
)

//callback bagus digunakan saat isi paramerter nya 2