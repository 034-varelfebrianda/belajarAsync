// function ambilData(): Promise<string> {
//     return new Promise((x) => {
//         setTimeout(() => {
//             x("Data berhasil diambil");
//         }, 3000);
//     });
// }

// async function main(): Promise<void> {
//     console.log("Mulai");

//     const hasil = await ambilData();

//     console.log(hasil);
//     console.log("Selesai");
// }

// main();


console.log('mulai')
function person(nama:string){
    setTimeout(() => {
        console.log(`nama orang ini adalah ${nama}`)
    }, 3000);
}
async function main() {
    const hasil = await person('varel');
}


function selesai (){
    setTimeout(() => {
        console.log('selesai')
    }, 5000);
}

main()
selesai()