function balikString(word) {
    var tmp = ''
    var indexWord = word.length - 1;
    for (i = indexWord; i >= 0; i--) {
        tmp = tmp + word[i];
    }
    return tmp
}

// TEST CASE

console.log(balikString('HELLO WORLD'))
console.log(balikString('Luqman Abyadh Jundana'))