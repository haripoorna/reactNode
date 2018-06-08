var text = "mahendra singh dhoni";
var newLtrArray = [];
var splitTxt = text.split(' ');
for(i = 0; i<splitTxt.length-1; i++){
    var temp = splitTxt[i].charAt(0);
    newLtrArray.push(temp);
}
console.log(newLtrArray.join('.') + "." +splitTxt.pop());