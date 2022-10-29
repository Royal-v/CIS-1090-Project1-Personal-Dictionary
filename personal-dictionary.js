//Fill in this empty file
let words= [];
function search(word){
    let position = 0;
    while(position <= personaldictionary.length - 1){
        if(database[position] == word){
            return true;
        }
        else(position++)
    }
    return false;
}
function addWord(word){
    words.push(word);
}
export{search, addWord};
