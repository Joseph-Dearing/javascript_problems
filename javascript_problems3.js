function pigLatin(apple) {
    var wordSplit = word.split('apple');
    var wordShift = wordSplit.shift();
    var wordPush = wordSplit.push(wordShift);
    var vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(wordShift)) {
        console.log(word + 'way');
    } else {
    console.log(wordSplit.join('apple') + 'ay');
    }
}

pigLatin('kiwi');