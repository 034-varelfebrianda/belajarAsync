"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Mulai');
function login(nama, password, role) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nama === 'varel' && password === '3209' && role === 'admin') {
                resolve('Login berhasil');
            }
            else {
                reject('Login gagal');
            }
        }, 2500);
    });
}
function ambilData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data user sedang diproses');
        }, 2000);
    });
}
function start() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('selamat datang admin');
        }, 3000);
    });
}
async function user() {
    try {
        const varel = await login('varel', '3209', 'admin');
        console.log('loading.....', varel);
        const data = await ambilData();
        console.log(data);
        const mulai = await start();
        console.log(mulai);
    }
    catch (x) {
        console.log('loading.....', x);
    }
    finally {
        console.log('Ayo mulai');
    }
}
user();
//# sourceMappingURL=tugasDua.js.map