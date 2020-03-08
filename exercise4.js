var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);

function dataHandling2(input) {
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    input.splice(2, 1, 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria');
    input.splice(5, 0, 'SMA International Metro');

    console.log(input)

    input[3].split('/')

    var temp = input[3].split('/')

    var bulan = '05'

    switch (bulan) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
    }

    var temp1 = temp.join('-')
    for (var i = 0; i < temp.length; i++) {
        temp[i] = Number(temp[i])

    }
    temp.sort()
    for (var i = 0; i < temp.length; i++) {
        temp[i] = temp[i].toString();

        if (temp.length - 1 === i && temp[i].length === 1) {
            temp[i] = '0' + temp[i]
        }
    }
    console.log(temp)

    console.log(temp1)

    var temp2 = input[1].slice(0, 15)

    console.log(temp2)

}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */