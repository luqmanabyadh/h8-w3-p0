function dataHandling(input) {
    var result = ''

    for (i = 0; i < input.length; i++) {
        var noID = input[i][0]
        var nama = input[i][1]
        var tempat = input[i][2]
        var tanggal = input[i][3]
        var hobi = input[i][4]

        var temp = 'Nomor ID: ' + noID + '\n' +
            'Nama: ' + nama + '\n' +
            'TTL: ' + tempat + ' ' + tanggal + '\n' +
            'Hobi: ' + hobi + '\n' + '\n'

        result += temp;
    }
    return result;
}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))