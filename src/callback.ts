function tambah (param1: number,param2: number){
    return param1 + param2
}

function kurang (param1:number,param2:number){
    return param1 - param2
}

function hitung (param1:number,param2:number,aksi:any){
let hasil = 0;
hasil = aksi(param1,param2)
return hasil 
}

console.log(hitung(3,2,tambah))
console.log(hitung(3,2,kurang))