function xo (str){
  var x =0;
  var o = 0;
  for (var i=0; i<=str.length; i++){
    
    if(str[i] === 'x'){
      x+=1
    }else if (str[i]){
      o+=1
    }else{
      ''
    }
  }
if(x===o){
  return true
}else{
  return false
}
}
  
console.log(xo('xoxoxo')); 
console.log(xo('oxooxo')); 
console.log(xo('oxo'));
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo'));
