function groupAnimals(animals) {
    // you can only write your code here!
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var tampungarr = []
    for (var i = 0; i < alfabet.length; i++) {

        var newarr = []
        for (var j = 0; j < animals.length; j++) {
            if (animals[j][0] === alfabet[i]) {
                newarr.push(animals[j])
            }
        }
        if (newarr.length !== 0) {
            tampungarr.push(newarr)
        }
    }
    return tampungarr
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]