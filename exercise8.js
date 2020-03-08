function pasanganTerbesar(num) {
    var max = 0
    var numberStr = String(num)

    for (var i = 0; i < numberStr.length - 1; i++) {
        var cari = numberStr[i] + numberStr[i + 1]
        if (cari > max) {
            max = cari
        }
    }
    return Number(max)
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99