//Fill in this empty file
let words = [];
function search(word) {
    if (words.includes(word)) {
        return true;
    }
    else {
        return false;
    }
}

function addWord(word) {
    words.push(word);
}
export { search, addWord, words };
