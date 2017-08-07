function newYorker(text) {
var myguy = ' my guy'
for(var i=0; i<text.length;i++){
if(text.substr(i) = '.'){
text.substr(i) = myguy + text.substr(i);
}
return text;
}
}