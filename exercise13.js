function targetTerdekat(arr) {
    // you can only write your code here!
    var hurufO = arr.indexOf('o');
    var jarak = 0;
    var jarakTerdekat = arr.length;
    if (arr.indexOf('x') === -1) {
        return 0;
    }

    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 'x') {
            jarak = Math.abs(i - hurufO);
            if (jarak < jarakTerdekat) {
                jarakTerdekat = jarak;
            }
        }
    }
    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2