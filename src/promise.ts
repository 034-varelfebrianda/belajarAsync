function tambah(param1: number, param2: number): number {
    return param1 + param2;
}

function kurang(param1: number, param2: number): number {
    return param1 - param2;
}

function hitung(
    param1: number,
    param2: number,
    aksi: (a: number, b: number) => number
): number {
    return aksi(param1, param2);
}

const p = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        const hasil = hitung(1, 2, tambah);
        resolve(hasil);
    }, 1000);
});

p.then((value: number) => {
    return value;
})
.then((val: number) => {
    return tambah(val, 3);
})
.then((val: number) => {
    const value = tambah(val, 4);
    console.log(value);
});