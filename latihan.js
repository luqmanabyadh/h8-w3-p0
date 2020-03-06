// var string = 'Hacktiv8 Prime Fox';
var names = ['Acong', 'Djoko', 'Sitorus', 'Budi', 'AriYanto'];
// Acong, Djoko, Sitorus, Budi, Ari Yanto
// Acong, Djoko, Sitorus, Budi
// Acong, Djoko, Sitorus
// Acong, Djoko
// Acong
var temp = ''

for (var i = 0; i < names.length; i++) {
    var temp = ''
    for (var j = 0; j < names.length - i; j++) {
        temp += names[j]
    }
    console.log(temp)
}